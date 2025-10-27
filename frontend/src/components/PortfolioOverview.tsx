import { TrendingUp } from 'lucide-react';
import { TimePeriod } from '../types';

interface PortfolioOverviewProps {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

const PortfolioOverview = ({ selectedPeriod, onPeriodChange }: PortfolioOverviewProps) => {
  const periods: TimePeriod[] = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Total Portfolio Value</p>
          <h1 className="text-5xl font-bold text-black mb-2">$247,500</h1>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#00C853]" />
            <span className="text-xl font-semibold text-[#00C853]">+$12,875 (5.2%)</span>
          </div>
        </div>

        <div className="flex gap-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => onPeriodChange(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === period
                  ? 'bg-[#00C853] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
