import React from 'react';

function MarketNews({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market News</h3>
        <div className="text-center text-gray-500 py-8">No news available</div>
      </div>
    );
  }

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600 bg-green-50';
      case 'negative':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '↗';
      case 'negative':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Market News</h3>
        <p className="text-sm text-gray-500">Latest financial news and market updates</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {news.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
              </div>
              
              <div className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${getSentimentColor(item.sentiment)}`}>
                <span className="mr-1">{getSentimentIcon(item.sentiment)}</span>
                {item.sentiment}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <button className="w-full text-center text-sm text-green-600 hover:text-green-800 font-medium">
          View All News →
        </button>
      </div>
    </div>
  );
}

export default MarketNews;
