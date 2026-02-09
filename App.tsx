
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import InventoryDashboard from './components/InventoryDashboard';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { Wrench, ChevronRight, Filter, Grid, List, CheckCircle2, RefreshCcw, ShieldCheck, Truck, Package } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'search' | 'seller' | 'cart' | 'details'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleNavigate = (newView: string) => {
    setView(newView as any);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <>
      <Hero onSearch={() => setView('search')} />

      {/* Category Strip */}
      <section className="bg-[#0c0c0e] border-b border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-2">Discovery</h2>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Browse by Category</h3>
            </div>
            <button
              onClick={() => setView('search')}
              className="text-[10px] font-black uppercase text-amber-500 flex items-center gap-2 hover:text-amber-400 transition-colors tracking-widest"
            >
              View Full Catalog <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-amber-500/50 group transition-all duration-300 hover:-translate-y-1"
                onClick={() => setView('search')}
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-all duration-300">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase text-center text-zinc-500 group-hover:text-white leading-tight tracking-widest transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-2">New Arrivals</h2>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase mb-4">Latest Additions</h3>
            <p className="text-zinc-500 text-sm font-medium">Verified inventory for competition and high-performance applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewDetails={(p) => {
                  setSelectedProduct(p);
                  setView('details');
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Trust Section */}
      <section className="py-32 bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Technical Verification',
                desc: 'Every listing undergoes OEM cross-referencing to ensure 100% fitment accuracy before going live.',
                icon: <CheckCircle2 className="w-8 h-8 text-amber-500" />
              },
              {
                title: 'Logistics',
                desc: 'Secure industrial packaging and worldwide shipping for bulky components like engines and transmissions.',
                icon: <Truck className="w-8 h-8 text-amber-500" />
              },
              {
                title: 'Fit-First Guarantee',
                desc: 'Not the right fit? Our guarantee allows for hassle-free returns on all parts within 14 days of delivery.',
                icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-[2rem] hover:border-amber-500/30 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderSearch = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <div className="w-full md:w-80 flex-shrink-0 space-y-10">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
            <h2 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Filter className="w-5 h-5 text-amber-500" /> Filters
            </h2>
            <button className="text-[10px] font-black text-zinc-500 hover:text-amber-500 uppercase tracking-widest transition-colors">Reset</button>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Price Range</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase">Min</label>
                  <input type="number" placeholder="0" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500/50 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase">Max</label>
                  <input type="number" placeholder="500k" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-amber-500/50 outline-none" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Condition</h3>
              <div className="space-y-3">
                {['New', 'Used', 'Remanufactured'].map(c => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer w-5 h-5 rounded-lg border-zinc-800 bg-zinc-900 text-amber-500 focus:ring-amber-500 transition-all cursor-pointer appearance-none checked:bg-amber-500 border" />
                      <CheckCircle2 className="w-3 h-3 text-black absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-200 transition-colors uppercase tracking-wider">{c}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-zinc-900">
            <span className="text-zinc-500 text-sm font-black uppercase tracking-widest">
              Catalog Items: <span className="text-amber-500">12 Found</span>
            </span>
            <div className="flex items-center gap-6">
              <select className="bg-zinc-900 border border-zinc-800 text-[10px] font-black text-white px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-amber-500/50 uppercase tracking-widest appearance-none cursor-pointer">
                <option>Most Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <div className="flex gap-1 border border-zinc-800 rounded-xl overflow-hidden p-1 bg-zinc-900">
                <button className="p-2 bg-amber-500 text-black rounded-lg"><Grid className="w-4 h-4" /></button>
                <button className="p-2 text-zinc-500 hover:text-white rounded-lg transition-colors"><List className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onViewDetails={(p) => {
                  setSelectedProduct(p);
                  setView('details');
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDetails = () => {
    if (!selectedProduct) return null;
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden group shadow-2xl">
              <img src={selectedProduct.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={selectedProduct.name} />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {selectedProduct.images.map((img, i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500 transition-all group p-1">
                  <img src={img} className="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-500 text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
                {selectedProduct.condition}
              </span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] font-mono border-l border-zinc-800 pl-4">SKU: {selectedProduct.oemNumber}</span>
            </div>

            <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              {selectedProduct.name}
            </h1>

            <div className="flex items-center gap-3 mb-10 text-green-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-xs font-black uppercase tracking-widest">Verified OEM Fitment</span>
            </div>

            <div className="text-5xl font-black text-white mb-12 tracking-tighter">
              <span className="text-base text-zinc-500 font-bold mr-2 italic">KES</span>
              {selectedProduct.price.toLocaleString()}
            </div>

            <div className="flex gap-6 mb-12">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="flex-grow bg-amber-500 hover:bg-amber-400 text-black font-black py-6 rounded-2xl uppercase tracking-widest text-sm transition-all shadow-xl shadow-amber-500/20 active:scale-[0.98]"
              >
                Add to Cart
              </button>
              <button className="bg-zinc-900 border border-zinc-800 text-white px-10 font-black rounded-2xl hover:bg-zinc-800 transition-all uppercase text-xs tracking-widest">
                Save
              </button>
            </div>

            <div className="space-y-10">
              {/* Return Policy Block */}
              <div className="bg-amber-500/5 border border-amber-500/10 p-8 rounded-3xl flex gap-6">
                <div className="p-3 bg-amber-500/10 rounded-2xl h-fit">
                  <ShieldCheck className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white tracking-widest mb-2">Protection Plan</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                    Shop with absolute confidence. If this part doesn't fit your vehicle as specified, return it within 14 days for a full refund.
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-10">
                <h3 className="text-[10px] font-black uppercase text-amber-500 tracking-[0.2em] mb-6">Technical Specification</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium">{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Reference #</span>
                    <span className="text-zinc-300 font-mono text-sm">{selectedProduct.interchangeNumber || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Warehouse</span>
                    <span className="text-zinc-300 font-bold text-sm tracking-tight">{selectedProduct.location}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">Inventory</span>
                    <span className="text-green-500 font-black text-sm tracking-widest uppercase">{selectedProduct.stock > 0 ? 'Ready to Ship' : 'Backorder'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCart = () => (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="flex items-end gap-4 mb-16">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Cart</h1>
        <span className="text-zinc-500 text-xl font-black uppercase tracking-tighter mb-2 italic">/ Review</span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-32 bg-zinc-900/20 rounded-[3rem] border-2 border-dashed border-zinc-900">
          <p className="text-zinc-500 font-bold uppercase tracking-widest mb-10">Your cart is currently empty</p>
          <button
            onClick={() => setView('search')}
            className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-lg shadow-amber-500/20"
          >
            Explore Catalog
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 rounded-[2rem] flex gap-10 group hover:border-zinc-700 transition-colors">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0">
                  <img src={item.images[0]} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{item.name}</h3>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">SKU: {item.oemNumber}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white tracking-tighter">
                        <span className="text-xs text-zinc-500 mr-1 italic font-bold">KES</span>
                        {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
                        <span className="text-xs font-black text-zinc-500 uppercase">Qty</span>
                        <span className="text-sm font-black text-white">{item.quantity}</span>
                      </div>
                      <button className="text-red-500 hover:text-red-400 font-black uppercase text-[10px] tracking-widest transition-colors">Remove Item</button>
                    </div>
                    <span className="text-zinc-600 text-xs font-bold font-mono">@ KES {item.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-12 rounded-[3rem] space-y-8 shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-between text-zinc-500 text-sm font-black uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-white">KES {cart.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-500 text-sm font-black uppercase tracking-widest">
                <span>Shipping</span>
                <span className="text-green-500">Calculated at Checkout</span>
              </div>
            </div>
            <div className="pt-8 border-t border-zinc-800 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2 block">Grand Total</span>
                <span className="text-lg font-black text-white uppercase tracking-tighter">Final Amount</span>
              </div>
              <span className="text-5xl font-black text-amber-500 tracking-tighter shadow-amber-500/20">
                <span className="text-xl mr-2 italic">KES</span>
                {cart.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString()}
              </span>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-8 rounded-2xl uppercase tracking-[0.2em] text-sm shadow-xl shadow-amber-500/20 active:scale-[0.99] transition-all">
              Proceed to Secure Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0c0c0e]">
      <Header cartCount={cartCount} onNavigate={handleNavigate} />

      <main className="min-h-[calc(100vh-80px)]">
        {view === 'home' && renderHome()}
        {view === 'search' && renderSearch()}
        {view === 'seller' && <InventoryDashboard />}
        {view === 'details' && renderDetails()}
        {view === 'cart' && renderCart()}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-amber-500 p-1.5 rounded-lg shadow-lg shadow-amber-500/20">
                  <Package className="text-black w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase text-white">
                  CARPARTS<span className="text-amber-500">PRO</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
                Leading the automotive performance market through technical verification and industrial-grade logistics in Kenya.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.3em] mb-10">Marketplace</h4>
              <ul className="space-y-6 text-xs font-black uppercase tracking-widest text-zinc-500">
                <li className="hover:text-amber-500 cursor-pointer transition-colors" onClick={() => handleNavigate('search')}>Catalog</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Fitment</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors" onClick={() => handleNavigate('seller')}>Sellers</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Bulk Order</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.3em] mb-10">Group Support</h4>
              <ul className="space-y-6 text-xs font-black uppercase tracking-widest text-zinc-500">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Shipping</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Returns</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Privacy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.3em] mb-10">Rare Parts Alert</h4>
              <p className="text-zinc-500 text-[11px] mb-6 font-medium leading-relaxed uppercase tracking-wider">Get technical updates and rare inventory alerts via email.</p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
                <button className="bg-amber-500 text-black px-6 py-4 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:bg-amber-400 shadow-lg shadow-amber-500/20 active:scale-95 transition-all">Connect</button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
            <p>© 2024 CARPARTSPRO KENYA INDUSTRIAL GROUP.</p>
            <div className="flex gap-10">
              <span className="hover:text-amber-500 cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-amber-500 cursor-pointer transition-colors">Protocol</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
