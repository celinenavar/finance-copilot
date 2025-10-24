import { Holding, NewsItem, ChartDataPoint } from '../types';

export const holdings: Holding[] = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    price: 178.45,
    change: 2.4,
    allocation: 22.5,
    value: 55687.50,
    sparklineData: [170, 172, 171, 175, 178, 177, 178.45]
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corp.',
    price: 412.30,
    change: 1.8,
    allocation: 19.2,
    value: 47520.00,
    sparklineData: [405, 408, 410, 409, 411, 413, 412.30]
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.67,
    change: -0.5,
    allocation: 16.8,
    value: 41580.00,
    sparklineData: [145, 144, 143, 142, 143, 142.5, 142.67]
  },
  {
    ticker: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 495.22,
    change: 5.6,
    allocation: 15.3,
    value: 37867.50,
    sparklineData: [470, 475, 480, 485, 490, 492, 495.22]
  },
  {
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    price: 248.50,
    change: -1.2,
    allocation: 14.2,
    value: 35145.00,
    sparklineData: [255, 252, 250, 249, 251, 248, 248.50]
  },
  {
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 178.35,
    change: 3.1,
    allocation: 12.0,
    value: 29700.00,
    sparklineData: [173, 174, 175, 176, 177, 178, 178.35]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    headline: 'Federal Reserve Signals Potential Rate Cuts in Coming Months',
    source: 'Bloomberg',
    timestamp: '2 hours ago',
    excerpt: 'Fed officials indicated a shift in monetary policy stance as inflation shows signs of cooling. Market analysts predict implications for tech stocks.',
    imageUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    headline: 'Tech Giants Report Strong Q4 Earnings Amid AI Boom',
    source: 'CNBC',
    timestamp: '4 hours ago',
    excerpt: 'Major technology companies exceed analyst expectations, driven by robust demand for artificial intelligence infrastructure and cloud services.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    headline: 'Electric Vehicle Market Sees Record Growth in 2024',
    source: 'Reuters',
    timestamp: '6 hours ago',
    excerpt: 'Global EV sales surge 35% year-over-year as battery technology advances and charging infrastructure expands across major markets.',
    imageUrl: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    headline: 'Bond Markets Rally as Treasury Yields Decline',
    source: 'Financial Times',
    timestamp: '8 hours ago',
    excerpt: 'Fixed income securities attract renewed investor interest as long-term Treasury yields fall to lowest levels in six months.',
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const generateChartData = (days: number, startValue: number, endValue: number): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const valueRange = endValue - startValue;
  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    const progress = (days - i) / days;
    const randomVariation = (Math.random() - 0.5) * (valueRange * 0.1);
    const value = startValue + (valueRange * progress) + randomVariation;

    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(value * 100) / 100
    });
  }

  return data;
};

export const chartDataByPeriod = {
  '1D': generateChartData(1, 246800, 247500),
  '1W': generateChartData(7, 245000, 247500),
  '1M': generateChartData(30, 242000, 247500),
  '3M': generateChartData(90, 235000, 247500),
  '1Y': generateChartData(365, 210000, 247500),
  'ALL': generateChartData(730, 180000, 247500)
};
