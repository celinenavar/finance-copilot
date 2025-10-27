# Captura 💰

A web-based financial AI assistant for managing and analyzing your stock portfolio.

## 🚀 Features

- **Portfolio Management**: Upload and manage your stock portfolio via CSV files
- **Real-time Analysis**: View portfolio performance with gain/loss calculations
- **Secure File Upload**: Validated CSV processing with error handling
- **Modern UI**: React-based frontend with intuitive interface
- **RESTful API**: Flask backend with structured endpoints

## 📁 Project Structure

```
finance-copilot/
├── frontend/          # React application
│   ├── src/
│   │   └── pages/
│   │       └── HelloPage.js
│   └── package.json
├── backend/           # Flask API
│   ├── app.py        # Main application
│   ├── config.py     # Configuration
│   ├── routes/       # API endpoints
│   ├── utils/        # Utility functions
│   ├── uploads/      # File upload directory
│   └── stocks.csv    # Sample data
├── package.json      # Root package management
└── README.md
```

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

## ⚡ Quick Start

### Option 1: Run Everything (Recommended)
```bash
# Install all dependencies and start both services
npm run dev
```

### Option 2: Manual Setup
```bash
# Install root dependencies
npm install

# Setup backend
cd backend
pip install -r requirements.txt

# Setup frontend
cd ../frontend
npm install

# Run both services
cd ..
npm run dev
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend concurrently |
| `npm run frontend` | Start only the React frontend |
| `npm run backend` | Start only the Flask backend |
| `npm run install-all` | Install dependencies for both backend and frontend apps |

## 🔧 Manual Development

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
# Server runs on http://127.0.0.1:5000
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
# App runs on http://localhost:3000
```

## 📊 CSV Format

Upload CSV files with the following format:

```csv
Ticker,Shares,Purchase Price,Current Price,Purchase Date
AAPL,15,162.45,186.12,2024-03-10
MSFT,10,312.80,336.52,2024-02-22
GOOGL,8,128.90,142.33,2024-01-19
```

### Required Columns:
- **Ticker**: Stock symbol (e.g., AAPL, MSFT)
- **Shares**: Number of shares (integer or decimal)
- **Purchase Price**: Price when purchased (decimal)
- **Current Price**: Current market price (decimal)
- **Purchase Date**: Date in YYYY-MM-DD format

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/hello` | Health check endpoint |
| `POST` | `/api/upload-stocks` | Upload and process CSV file |

## 🧪 Testing the Upload

1. Start the application: `npm run dev`
2. Open http://localhost:3000
3. Use the provided `stocks.csv` file or create your own
4. Upload via the web interface

## 🛡️ Security Features

- **File validation**: Only CSV files accepted
- **Content validation**: Required columns and data types
- **Secure filenames**: Protection against directory traversal
- **File size limits**: 16MB maximum upload size
- **Error handling**: Comprehensive error messages

## 🔮 Future Enhancements

- [ ] Database integration for persistent storage
- [ ] Real-time stock price API integration
- [ ] Portfolio analytics and charts
- [ ] User authentication and multiple portfolios
- [ ] Export functionality (PDF reports)
- [ ] Mobile-responsive design improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License.
