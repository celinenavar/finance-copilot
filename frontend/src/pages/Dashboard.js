import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PortfolioOverview from '../components/PortfolioOverview';
import InvestmentChart from '../components/InvestmentChart';
import AdvisorChat from '../components/AdvisorChat';
import HoldingsSection from '../components/HoldingsSection';
import MarketNews from '../components/MarketNews';
import { holdings, newsItems, chartDataByPeriod } from '../data/mockData';
import './Dashboard.css';

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('1M');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                to="/hello" 
                className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                Upload New Portfolio
              </Link>
            </div>
            
            <div className="text-sm text-gray-500">
              Portfolio Dashboard
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PortfolioOverview
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />

            <InvestmentChart data={chartDataByPeriod[selectedPeriod]} />

            <HoldingsSection holdings={holdings} />

            <MarketNews news={newsItems} />
          </div>

          <div className="lg:col-span-1">
            <AdvisorChat />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

