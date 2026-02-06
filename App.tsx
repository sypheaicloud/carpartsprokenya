
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import InventoryDashboard from './components/InventoryDashboard';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { Wrench, ChevronRight, Filter, Grid, List, CheckCircle2, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';

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
      <section className="bg-zinc-900 border-b border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Car Part By Category</h2>
            <button className="text-[10px] font-bold uppercase text-blue-500 flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className="bg-zinc-950 border border-zinc-800 p-6 rounded flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-600 group transition-all"
                onClick={() => setView('search')}
              >
                <div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase text-center text-zinc-400 group-hover:text-white leading-tight">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 border-l-4 border-blue-600 pl-6">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">Just Added Car Parts</h2>
            <p className="text-zinc-500 text-sm">Verified inventory for competition and high-performance applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Technical Verification',
                desc: 'Every listing undergoes OEM cross-referencing to ensure 100% fitment accuracy before going live.',
                icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />
              },
              {
                title: 'Logistics',
                desc: 'Secure industrial packaging and worldwide shipping for bulky components like engines and transmissions.',
                icon: <Truck className="w-6 h-6 text-blue-500" />
              },
              {
                title: 'Return Policy',
                desc: 'Not the right fit? Our "Fit-First" guarantee allows for hassle-free returns on all parts within 14 days of delivery.',
                icon: <RefreshCcw className="w-6 h-6 text-blue-500" />
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="mb-2">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderSearch = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-500" /> Filters
            </h2>
            <button className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase">Reset</button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <input type="number" placeholder="Min" className="bg-zinc-900 border border-zinc-800 rounded p-2 text-xs text-white" />
                <input type="number" placeholder="Max" className="bg-zinc-900 border border-zinc-800 rounded p-2 text-xs text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Condition</h3>
              <div className="space-y-2">
                {['New', 'Used', 'Remanufactured'].map(c => (
                  <label key={c} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-blue-600 focus:ring-blue-600" />
                    <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">{c}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
            <span className="text-zinc-500 text-sm font-medium">Showing <span className="text-white">12</span> results</span>
            <div className="flex items-center gap-4">
              <select className="bg-zinc-950 border border-zinc-800 text-xs font-bold text-white px-3 py-1.5 rounded outline-none focus:ring-1 focus:ring-blue-600 uppercase">
                <option>Most Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <div className="flex gap-1 border border-zinc-800 rounded overflow-hidden">
                <button className="p-1.5 bg-zinc-800 text-white"><Grid className="w-4 h-4" /></button>
                <button className="p-1.5 bg-zinc-950 text-zinc-600 hover:text-white"><List className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <img src={selectedProduct.images[0]} className="w-full h-full object-cover" alt={selectedProduct.name} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {selectedProduct.images.map((img, i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:border-blue-600 transition-all">
                  <img src={img} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded">
                {selectedProduct.condition}
              </span>
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mono">OEM: {selectedProduct.oemNumber}</span>
            </div>

            <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-4 leading-none">
              {selectedProduct.name}
            </h1>

            <div className="flex items-center gap-2 mb-8 text-green-500">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-tight">Verified Performance Component</span>
            </div>

            <div className="text-3xl font-black text-white mb-8">
              KES {selectedProduct.price.toLocaleString()}
            </div>

            <div className="flex gap-4 mb-10">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-md uppercase tracking-widest text-sm transition-all"
              >
                Add to Cart
              </button>
              <button className="bg-zinc-900 border border-zinc-800 text-white px-8 font-bold rounded-md hover:bg-zinc-800 transition-all">
                Wishlist
              </button>
            </div>

            <div className="space-y-8">
              {/* Return Policy Block */}
              <div className="bg-blue-600/10 border border-blue-600/30 p-4 rounded-lg flex gap-4">
                <RefreshCcw className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-widest mb-1">Return Policy</h4>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Shop with confidence. If this part doesn't fit your vehicle as described, return it within 14 days for a full refund. Conditions apply to used components.
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-4">Technical Details</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{selectedProduct.description}</p>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-600 uppercase font-bold">Interchange #</span>
                    <span className="text-zinc-300 mono">{selectedProduct.interchangeNumber || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-600 uppercase font-bold">Location</span>
                    <span className="text-zinc-300">{selectedProduct.location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-600 uppercase font-bold">Stock Status</span>
                    <span className="text-green-500 font-bold">{selectedProduct.stock > 0 ? 'Ready to Ship' : 'Out of Stock'}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-black uppercase text-zinc-500 tracking-widest mb-4">Detailed Return Policy</h3>
                <div className="text-zinc-400 text-[11px] space-y-2 leading-relaxed">
                  <p>• Items must be returned in their original packaging with all seals intact.</p>
                  <p>• Used parts are tested prior to shipping; returns on used items are only accepted if the unit is non-functional upon arrival.</p>
                  <p>• Electrical components (Alternators, ECUs, Sensors) carry a specific "No-Open" return policy once installed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCart = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-12">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800">
          <p className="text-zinc-500 mb-6">Your cart is currently empty.</p>
          <button
            onClick={() => setView('search')}
            className="bg-blue-600 text-white px-8 py-3 rounded font-bold uppercase text-sm tracking-widest"
          >
            Go to Catalog
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex gap-6">
                <img src={item.images[0]} className="w-24 h-24 object-cover rounded bg-zinc-800" alt="" />
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold text-white">{item.name}</h3>
                      <span className="text-xl font-black text-white">KES {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mono">OEM: {item.oemNumber}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>Qty: {item.quantity}</span>
                      <button className="text-red-500 hover:text-red-400 font-bold uppercase text-[10px]">Remove</button>
                    </div>
                    <span className="text-zinc-500 text-xs">KES {item.price.toLocaleString()} each</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-4">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span className="text-white">KES {cart.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Estimated Shipping</span>
              <span className="text-white font-bold text-green-500 uppercase text-[10px]">Calculated at Next Step</span>
            </div>
            <div className="pt-4 border-t border-zinc-800 flex justify-between items-end">
              <span className="text-lg font-bold text-white uppercase tracking-tight">Total</span>
              <span className="text-3xl font-black text-blue-500">KES {cart.reduce((a, b) => a + (b.price * b.quantity), 0).toLocaleString()}</span>
            </div>
            <button className="w-full bg-white text-black font-black py-5 rounded-md uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all">
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header cartCount={cartCount} onNavigate={handleNavigate} />

      <main className="min-h-[calc(100vh-64px)]">
        {view === 'home' && renderHome()}
        {view === 'search' && renderSearch()}
        {view === 'seller' && <InventoryDashboard />}
        {view === 'details' && renderDetails()}
        {view === 'cart' && renderCart()}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1 rounded">
                  <Wrench className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-extrabold tracking-tighter uppercase text-white">
                  CarPartsPro<span className="text-blue-500">Kenya</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Leading the global automotive performance market through technical verification and industrial-grade logistics.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.2em] mb-6">Marketplace</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-blue-500 cursor-pointer transition-colors" onClick={() => handleNavigate('search')}>Performance Catalog</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Fitment Verification</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors" onClick={() => handleNavigate('seller')}>Seller Registration</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Bulk Sourcing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.2em] mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Fitment Support</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Shipping Information</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors font-bold text-zinc-300">Returns & Claims</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Account Security</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-white tracking-[0.2em] mb-6">Newsletter</h4>
              <p className="text-zinc-500 text-xs mb-4">Get technical updates and rare inventory alerts.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-xs text-white flex-grow focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-700">Join</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            <p>© 2024 CarPartsProKenya Industrial Group. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
