
import React from 'react';
import { ShoppingCart, User, Search, Menu, Package } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-blue-600 p-1.5 rounded group-hover:bg-blue-500 transition-colors">
                <Package className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter uppercase text-white">
                CarPartsPro<span className="text-blue-500">Kenya</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => onNavigate('search')}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Browse Catalog
              </button>
              <button
                onClick={() => onNavigate('seller')}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Sell Parts
              </button>
              <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Fitment Guide
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="Search Part #, Make, or Model..."
                className="bg-zinc-900 border border-zinc-800 rounded-md py-1.5 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 w-64 text-zinc-100 placeholder-zinc-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            </div>

            <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-zinc-950">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
