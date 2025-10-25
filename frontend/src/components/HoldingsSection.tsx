import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpDown } from 'lucide-react';
import { Holding } from '../types';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface HoldingsSectionProps {
  holdings: Holding[];
}

type SortKey = 'value' | 'change' | 'allocation';

const HoldingsSection = ({ holdings }: HoldingsSectionProps) => {
  const [sortBy, setSortBy] = useState<SortKey>('value');
  const [sortedHoldings, setSortedHoldings] = useState(holdings);

  const handleSort = (key: SortKey) => {
    const sorted = [...holdings].sort((a, b) => {
      if (key === 'value') return b.value - a.value;
      if (key === 'change') return b.change - a.change;
      if (key === 'allocation') return b.allocation - a.allocation;
      return 0;
    });
    setSortedHoldings(sorted);
    setSortBy(key);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-black">Your Holdings</h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleSort('value')}
            className={`px-3 py-1.5 text-sm rounded-lg flex items-center gap-1 transition-colors ${
              sortBy === 'value' ? 'bg-[#00C853] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Value
          </button>
          <button
            onClick={() => handleSort('change')}
            className={`px-3 py-1.5 text-sm rounded-lg flex items-center gap-1 transition-colors ${
              sortBy === 'change' ? 'bg-[#00C853] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Performance
          </button>
          <button
            onClick={() => handleSort('allocation')}
            className={`px-3 py-1.5 text-sm rounded-lg flex items-center gap-1 transition-colors ${
              sortBy === 'allocation' ? 'bg-[#00C853] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            Allocation
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedHoldings.map((holding) => (
          <div
            key={holding.ticker}
            className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-black">{holding.ticker}</h3>
                    <p className="text-sm text-gray-600">{holding.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="font-semibold text-black">${holding.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Value</p>
                    <p className="font-semibold text-black">${holding.value.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Allocation</p>
                    <p className="font-semibold text-black">{holding.allocation}%</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={holding.sparklineData.map((value, i) => ({ value, index: i }))}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={holding.change >= 0 ? '#00C853' : '#FF5252'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex items-center gap-2 min-w-[100px] justify-end">
                  {holding.change >= 0 ? (
                    <TrendingUp className="w-5 h-5 text-[#00C853]" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-[#FF5252]" />
                  )}
                  <span
                    className={`text-lg font-semibold ${
                      holding.change >= 0 ? 'text-[#00C853]' : 'text-[#FF5252]'
                    }`}
                  >
                    {holding.change >= 0 ? '+' : ''}{holding.change}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldingsSection;
