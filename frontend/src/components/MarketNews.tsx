import { ExternalLink } from 'lucide-react';
import { NewsItem } from '../types';

interface MarketNewsProps {
  news: NewsItem[];
}

const MarketNews = ({ news }: MarketNewsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-6">Trending Market News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
          >
            {item.imageUrl && (
              <div className="h-40 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                <span className="font-medium">{item.source}</span>
                <span>•</span>
                <span>{item.timestamp}</span>
              </div>
              <h3 className="text-base font-semibold text-black mb-2 leading-snug group-hover:text-[#00C853] transition-colors">
                {item.headline}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {item.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#00C853] hover:text-[#00B347] font-medium transition-colors"
              >
                Read more
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
