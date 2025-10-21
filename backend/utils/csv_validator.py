import csv
import os
from datetime import datetime

REQUIRED_COLUMNS = ['Ticker', 'Shares', 'Purchase Price', 'Current Price', 'Purchase Date']

def validate_csv_file(filepath):
    """Validate CSV file structure and content"""
    try:
        with open(filepath, 'r', newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            
            # Check if required columns exist
            if not all(col in reader.fieldnames for col in REQUIRED_COLUMNS):
                return {
                    'valid': False, 
                    'error': f'Missing required columns. Expected: {", ".join(REQUIRED_COLUMNS)}'
                }
            
            # Validate each row
            for row_num, row in enumerate(reader, start=2):  # start=2 because row 1 is header
                validation_error = validate_row(row, row_num)
                if validation_error:
                    return {'valid': False, 'error': validation_error}
            
        return {'valid': True}
    
    except Exception as e:
        return {'valid': False, 'error': f'File validation error: {str(e)}'}

def validate_row(row, row_num):
    """Validate individual row data"""
    try:
        # Check for empty values
        for col in REQUIRED_COLUMNS:
            if not row[col].strip():
                return f'Row {row_num}: Empty value in column "{col}"'
        
        # Validate numeric fields
        try:
            float(row['Shares'])
            float(row['Purchase Price'])
            float(row['Current Price'])
        except ValueError:
            return f'Row {row_num}: Invalid numeric value in Shares, Purchase Price, or Current Price'
        
        # Validate date format
        try:
            datetime.strptime(row['Purchase Date'], '%Y-%m-%d')
        except ValueError:
            return f'Row {row_num}: Invalid date format. Expected YYYY-MM-DD'
        
        return None
    
    except Exception as e:
        return f'Row {row_num}: Validation error - {str(e)}'

def parse_stocks_csv(filepath):
    """Parse validated CSV file and return structured data"""
    stocks = []
    
    with open(filepath, 'r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            stock = {
                'ticker': row['Ticker'].strip().upper(),
                'shares': int(float(row['Shares'])),
                'purchase_price': float(row['Purchase Price']),
                'current_price': float(row['Current Price']),
                'purchase_date': row['Purchase Date'].strip(),
                'total_value': int(float(row['Shares'])) * float(row['Current Price']),
                'gain_loss': (float(row['Current Price']) - float(row['Purchase Price'])) * int(float(row['Shares']))
            }
            stocks.append(stock)
    
    return stocks
