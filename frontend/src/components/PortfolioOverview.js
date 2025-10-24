import React from 'react';

function PortfolioOverview({ selectedPeriod, onPeriodChange }) {
  const periods = ['1D', '1W', '1M', '3M', '1Y'];
  
  const portfolioData = {
    totalValue: 34800.00,
    dayChange: 1250.00,
    dayChangePercent: 3.72,
    isPositive: true
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Portfolio Overview</h2>
        
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onPeriodChange(period)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                selectedPeriod === period
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-sm text-gray-500 mb-1">Total Value</div>
          <div className="text-3xl font-bold text-gray-900">
            ${portfolioData.totalValue.toLocaleString()}
          </div>
        </div>
        
        <div>
          <div className="text-sm text-gray-500 mb-1">Today's Change</div>
          <div className={`text-2xl font-semibold ${
            portfolioData.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {portfolioData.isPositive ? '+' : ''}${portfolioData.dayChange.toLocaleString()}
          </div>
        </div>
        
        <div>
          <div className="text-sm text-gray-500 mb-1">Change %</div>
          <div className={`text-2xl font-semibold ${
            portfolioData.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {portfolioData.isPositive ? '+' : ''}{portfolioData.dayChangePercent}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioOverview;
