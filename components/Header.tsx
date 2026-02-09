
import React from 'react';
import { ShoppingCart, User, Search, Menu, Package } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0e]/80 border-b border-zinc-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-amber-500 p-1.5 rounded-lg group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                <Package className="text-black w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                CARPARTS<span className="text-amber-500">PRO</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => onNavigate('search')}
                className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                Catalog
              </button>
              <button
                onClick={() => onNavigate('seller')}
                className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                Sell Part
              </button>
              <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-wider">
                Support
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex relative group">
              <input
                type="text"
                placeholder="Search SKU or Part Name..."
                className="bg-zinc-900/50 border border-zinc-800 rounded-full py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 w-80 text-zinc-100 placeholder-zinc-500 transition-all focus:bg-zinc-900"
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-amber-500 text-black cursor-pointer hover:bg-amber-400 transition-colors">
                <Search className="w-4 h-4" />
              </div>
            </div>

            <button className="p-2.5 text-zinc-400 hover:text-amber-500 hover:bg-zinc-900 rounded-xl transition-all">
              <User className="w-6 h-6" />
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2.5 text-zinc-400 hover:text-amber-500 hover:bg-zinc-900 rounded-xl transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-amber-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded-full ring-2 ring-[#0c0c0e]">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
