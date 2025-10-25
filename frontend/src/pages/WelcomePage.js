import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Captura</h1>
              <span className="text-sm text-gray-500">AI Investment Assistant</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/hello" 
                className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                Upload CSV
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Captura
            <span className="block text-3xl font-normal text-gray-600 mt-2">
              Your AI Investment Assistant
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your portfolio management with AI-powered insights, real-time analysis, 
            and personalized investment recommendations.
          </p>
          <Link 
            to="/hello"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>


    </div>
  );
}

export default WelcomePage;
