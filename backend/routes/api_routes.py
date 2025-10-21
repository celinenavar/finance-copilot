import os
from flask import Blueprint, jsonify, request, current_app
from werkzeug.utils import secure_filename
from utils.csv_validator import validate_csv_file, parse_stocks_csv
from utils.file_utils import allowed_file

api_bp = Blueprint('api', __name__)

@api_bp.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask backend!"})

@api_bp.route("/upload", methods=['POST'])
def upload_stocks():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({"error": "No file selected"}), 400
        
        if not allowed_file(file.filename):
            return jsonify({"error": "Invalid file type. Only CSV files are allowed"}), 400
        
        filename = secure_filename(file.filename)
        filepath = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Validate and parse CSV
        validation_result = validate_csv_file(filepath)
        if not validation_result['valid']:
            os.remove(filepath)  # Clean up invalid file
            return jsonify({"error": validation_result['error']}), 400
        
        stocks_data = parse_stocks_csv(filepath)
        
        return jsonify({
            "message": "File uploaded successfully",
            "filename": filename,
            "stocks_count": len(stocks_data),
            "stocks": stocks_data
        }), 200
        
    except Exception as e:
        return jsonify({"error": f"Upload failed: {str(e)}"}), 500

@api_bp.errorhandler(413)
def too_large(e):
    return jsonify({"error": "File too large"}), 413
