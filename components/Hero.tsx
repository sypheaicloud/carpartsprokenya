
import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    year: '',
    make: '',
    model: '',
    engine: ''
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="relative overflow-hidden bg-[#0c0c0e] pt-20 pb-32 border-b border-zinc-900 min-h-[700px] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
      >
        <source src="/assets/images/mutebackvideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays for better depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent z-0"></div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Verified Inventory in Kenya
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter">
              PRECISION <br />
              <span className="text-amber-500 tracking-normal italic">CAR PARTS.</span> <br />
              KENYA.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-12 font-medium leading-relaxed">
              Your premier destination for high-quality genuine and performance car parts. Delivered anywhere in Kenya with fitment guarantee.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => onSearch({})}
                className="bg-amber-500 text-black font-black px-10 py-5 rounded-xl uppercase text-sm tracking-widest flex items-center gap-3 hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
              >
                Shop Catalog <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-zinc-900 border border-zinc-800 text-white font-black px-10 py-5 rounded-xl uppercase text-sm tracking-widest hover:bg-zinc-800 transition-all">
                Selling Hub
              </button>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 lg:col-span-6">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-10 rounded-[2rem] shadow-2xl relative">
              <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Search className="w-6 h-6 text-amber-500" />
                </div>
                Part Finder
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Year</label>
                    <select
                      className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all appearance-none cursor-pointer hover:border-zinc-700"
                      onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                    >
                      <option value="">Select Year</option>
                      {[2024, 2023, 2022, 2021, 2020, 2019].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Make</label>
                    <select
                      className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all appearance-none cursor-pointer hover:border-zinc-700"
                      onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                    >
                      <option value="">Select Make</option>
                      <option value="Porsche">Porsche</option>
                      <option value="BMW">BMW</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Nissan">Nissan</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Model</label>
                  <select
                    className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all appearance-none cursor-pointer hover:border-zinc-700"
                    onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  >
                    <option value="">Select Model</option>
                    <option value="911 Carrera">911 Carrera</option>
                    <option value="M3">M3</option>
                    <option value="Supra">Supra</option>
                    <option value="GT-R">GT-R</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Engine Type</label>
                  <select
                    className="w-full bg-[#0c0c0e] border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all appearance-none cursor-pointer hover:border-zinc-700"
                    onChange={(e) => setFilters({ ...filters, engine: e.target.value })}
                  >
                    <option value="">All Engines</option>
                    <option value="Turbo">Turbocharged</option>
                    <option value="NA">Naturally Aspirated</option>
                    <option value="Hybrid">Hybrid/Electric</option>
                  </select>
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-5 rounded-xl mt-6 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20"
                >
                  <Search className="w-5 h-5" /> Search Part Catalog
                </button>
              </div>

              <div className="mt-8 flex items-center justify-between text-[10px] text-zinc-500 font-bold border-t border-zinc-800 pt-6">
                <span className="flex items-center gap-2 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  Part Verification Live
                </span>
                <span className="uppercase tracking-widest">Global Sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
