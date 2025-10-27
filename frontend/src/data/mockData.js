// Mock data for the dashboard
export const holdings = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shares: 50,
    price: 175.43,
    change: 2.34,
    changePercent: 1.35,
    value: 8771.50,
    weight: 25.2
  },
  {
    id: 2,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    shares: 30,
    price: 378.85,
    change: -1.23,
    changePercent: -0.32,
    value: 11365.50,
    weight: 32.7
  },
  {
    id: 3,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    shares: 20,
    price: 142.56,
    change: 0.89,
    changePercent: 0.63,
    value: 2851.20,
    weight: 8.2
  },
  {
    id: 4,
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    shares: 15,
    price: 248.50,
    change: -5.67,
    changePercent: -2.23,
    value: 3727.50,
    weight: 10.7
  },
  {
    id: 5,
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    shares: 25,
    price: 155.30,
    change: 1.45,
    changePercent: 0.94,
    value: 3882.50,
    weight: 11.2
  },
  {
    id: 6,
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    shares: 10,
    price: 875.20,
    change: 12.45,
    changePercent: 1.44,
    value: 8752.00,
    weight: 25.2
  }
];

export const newsItems = [
  {
    id: 1,
    title: 'Tech Stocks Rally on Strong Earnings',
    summary: 'Major technology companies report better-than-expected quarterly results, driving market optimism.',
    time: '2 hours ago',
    source: 'Financial Times',
    sentiment: 'positive'
  },
  {
    id: 2,
    title: 'Federal Reserve Signals Potential Rate Cuts',
    summary: 'Central bank hints at possible interest rate reductions in the coming months.',
    time: '4 hours ago',
    source: 'Reuters',
    sentiment: 'positive'
  },
  {
    id: 3,
    title: 'Energy Sector Faces Headwinds',
    summary: 'Oil prices decline amid concerns over global demand and supply chain disruptions.',
    time: '6 hours ago',
    source: 'Bloomberg',
    sentiment: 'negative'
  },
  {
    id: 4,
    title: 'AI Stocks Continue Momentum',
    summary: 'Artificial intelligence companies see continued investor interest and funding growth.',
    time: '8 hours ago',
    source: 'TechCrunch',
    sentiment: 'positive'
  }
];

export const chartDataByPeriod = {
  '1D': [
    { time: '09:30', value: 34750 },
    { time: '10:00', value: 34820 },
    { time: '10:30', value: 34780 },
    { time: '11:00', value: 34850 },
    { time: '11:30', value: 34920 },
    { time: '12:00', value: 34890 },
    { time: '12:30', value: 34950 },
    { time: '13:00', value: 35020 },
    { time: '13:30', value: 34980 },
    { time: '14:00', value: 35050 },
    { time: '14:30', value: 35120 },
    { time: '15:00', value: 35080 },
    { time: '15:30', value: 35150 },
    { time: '16:00', value: 35200 }
  ],
  '1W': [
    { time: 'Mon', value: 34500 },
    { time: 'Tue', value: 34650 },
    { time: 'Wed', value: 34800 },
    { time: 'Thu', value: 34750 },
    { time: 'Fri', value: 34900 },
    { time: 'Sat', value: 34900 },
    { time: 'Sun', value: 34900 }
  ],
  '1M': [
    { time: 'Week 1', value: 34000 },
    { time: 'Week 2', value: 34200 },
    { time: 'Week 3', value: 34500 },
    { time: 'Week 4', value: 34800 }
  ],
  '3M': [
    { time: 'Month 1', value: 33000 },
    { time: 'Month 2', value: 33500 },
    { time: 'Month 3', value: 34800 }
  ],
  '1Y': [
    { time: 'Q1', value: 32000 },
    { time: 'Q2', value: 33000 },
    { time: 'Q3', value: 34000 },
    { time: 'Q4', value: 34800 }
  ]
};
