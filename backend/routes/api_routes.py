import os
import logging
from flask import Blueprint, jsonify, request, current_app
from werkzeug.utils import secure_filename
from utils.csv_parser import parse_portfolio_csv
from utils.database import insert_portfolio, insert_holdings, get_portfolio_by_id, get_holdings_by_portfolio, get_portfolio_summary
from utils.file_utils import allowed_file

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

api_bp = Blueprint('api', __name__)

@api_bp.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask backend!"})

@api_bp.route("/upload", methods=['POST'])
def upload_portfolio():
    """
    Upload and process portfolio CSV file.
    Parses CSV, validates data, and saves to database.
    """
    try:
        # Validate file presence
        if 'file' not in request.files:
            logger.warning("Upload request missing file")
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            logger.warning("Upload request with empty filename")
            return jsonify({"error": "No file selected"}), 400
        
        if not allowed_file(file.filename):
            logger.warning(f"Invalid file type uploaded: {file.filename}")
            return jsonify({"error": "Invalid file type. Only CSV files are allowed"}), 400
        
        # Get user ID from request (default to 'anonymous' if not provided)
        user_id = request.form.get('user_id', 'anonymous')
        filename = secure_filename(file.filename)
        
        logger.info(f"Processing upload for user {user_id}: {filename}")
        
        # Read file content
        try:
            csv_content = file.read().decode('utf-8')
        except UnicodeDecodeError:
            logger.error(f"Failed to decode file {filename} as UTF-8")
            return jsonify({"error": "File encoding error. Please ensure the file is UTF-8 encoded"}), 400
        
        # Parse CSV using new parser
        logger.info(f"Parsing CSV content for {filename}")
        parse_result = parse_portfolio_csv(csv_content, filename)
        
        # Check for parsing errors
        if not parse_result['success']:
            logger.error(f"CSV parsing failed for {filename}: {parse_result['errors']}")
            return jsonify({
                "error": "CSV validation failed",
                "details": parse_result['errors'],
                "warnings": parse_result['warnings']
            }), 400
        
        # Save to database
        try:
            logger.info(f"Inserting portfolio for user {user_id}")
            portfolio_id = insert_portfolio(user_id, filename)
            
            logger.info(f"Inserting {len(parse_result['data'])} holdings for portfolio {portfolio_id}")
            holdings_count = insert_holdings(portfolio_id, parse_result['data'])
            
            logger.info(f"Successfully processed portfolio {portfolio_id} with {holdings_count} holdings")
            
            return jsonify({
                "message": "Portfolio uploaded and processed successfully",
                "portfolio_id": portfolio_id,
                "filename": filename,
                "holdings_count": holdings_count,
                "warnings": parse_result['warnings'] if parse_result['warnings'] else None
            }), 200
            
        except Exception as db_error:
            logger.error(f"Database error during portfolio insertion: {str(db_error)}")
            return jsonify({
                "error": "Failed to save portfolio to database",
                "details": str(db_error)
            }), 500
        
    except Exception as e:
        logger.error(f"Unexpected error during upload: {str(e)}")
        return jsonify({"error": f"Upload failed: {str(e)}"}), 500

@api_bp.route("/portfolio/<int:portfolio_id>", methods=['GET'])
def get_portfolio(portfolio_id):
    """
    Get portfolio data with holdings by portfolio ID.
    """
    try:
        logger.info(f"Fetching portfolio {portfolio_id}")
        
        # Get portfolio information
        portfolio = get_portfolio_by_id(portfolio_id)
        if not portfolio:
            logger.warning(f"Portfolio {portfolio_id} not found")
            return jsonify({"error": "Portfolio not found"}), 404
        
        # Get holdings for the portfolio
        holdings = get_holdings_by_portfolio(portfolio_id)
        
        # Get portfolio summary
        summary = get_portfolio_summary(portfolio_id)
        
        logger.info(f"Successfully retrieved portfolio {portfolio_id} with {len(holdings)} holdings")
        
        return jsonify({
            "portfolio": portfolio,
            "holdings": holdings,
            "summary": summary,
            "holdings_count": len(holdings)
        }), 200
        
    except Exception as e:
        logger.error(f"Error fetching portfolio {portfolio_id}: {str(e)}")
        return jsonify({"error": f"Failed to fetch portfolio: {str(e)}"}), 500

@api_bp.route("/portfolios/user/<user_id>", methods=['GET'])
def get_user_portfolios(user_id):
    """
    Get all portfolios for a specific user.
    """
    try:
        logger.info(f"Fetching portfolios for user {user_id}")
        
        from utils.database import get_portfolios_by_user
        portfolios = get_portfolios_by_user(user_id)
        
        logger.info(f"Successfully retrieved {len(portfolios)} portfolios for user {user_id}")
        
        return jsonify({
            "user_id": user_id,
            "portfolios": portfolios,
            "count": len(portfolios)
        }), 200
        
    except Exception as e:
        logger.error(f"Error fetching portfolios for user {user_id}: {str(e)}")
        return jsonify({"error": f"Failed to fetch portfolios: {str(e)}"}), 500

@api_bp.route("/health", methods=['GET'])
def health_check():
    """
    Health check endpoint for monitoring.
    """
    try:
        from utils.database import get_database_stats
        stats = get_database_stats()
        
        return jsonify({
            "status": "healthy",
            "database": "connected",
            "stats": stats
        }), 200
        
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return jsonify({
            "status": "unhealthy",
            "error": str(e)
        }), 500

@api_bp.errorhandler(413)
def too_large(e):
    return jsonify({"error": "File too large"}), 413
