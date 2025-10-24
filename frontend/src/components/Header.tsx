import { TrendingUp, User } from 'lucide-react';

const Header = () => {
  const navItems = ['Dashboard', 'Portfolio', 'Advisor', 'News', 'Settings'];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-[#00C853]" />
            <span className="text-2xl font-bold text-black">Capra</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors hover:text-[#00C853] ${
                  index === 0 ? 'text-[#00C853]' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
