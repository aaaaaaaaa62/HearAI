import { Ear } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('Home')}
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-br from-yellow-300 to-pink-300 p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
              <Ear className="w-6 h-6 text-slate-700" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent hidden sm:inline">
              HearAI
            </span>
          </button>

          <nav className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === item
                    ? 'bg-gradient-to-r from-yellow-300 to-pink-300 text-slate-700 shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
