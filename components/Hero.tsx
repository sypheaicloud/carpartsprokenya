
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
    <div className="relative overflow-hidden bg-zinc-950 pt-12 pb-24 border-b border-zinc-900 min-h-[500px] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/assets/images/mutebackvideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays for better depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-zinc-950/20 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-0"></div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Find New - Used <br />
              <span className="text-blue-600">Parts</span> <br />
              Kenya.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 font-light">
              The premier marketplace for verified high-performance automotive parts. Verified fitment. Global shipping. Track-ready inventory.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onSearch({})}
                className="bg-white text-black font-bold px-8 py-4 rounded uppercase text-sm tracking-wider flex items-center gap-2 hover:bg-zinc-200 transition-all"
              >
                Shop for Parts <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border border-zinc-800 text-white font-bold px-8 py-4 rounded uppercase text-sm tracking-wider hover:bg-zinc-900 transition-all">
                Selling Dashboard
              </button>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl relative">
              <div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                Find Parts
              </div>

              <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" /> Find Exact Fitment
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1.5 ml-1">Year</label>
                    <select
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-600 outline-none"
                      onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                    >
                      <option value="">Select Year</option>
                      {[2024, 2023, 2022, 2021, 2020, 2019].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1.5 ml-1">Make</label>
                    <select
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-600 outline-none"
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

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1.5 ml-1">Model</label>
                  <select
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-600 outline-none"
                    onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  >
                    <option value="">Select Model</option>
                    <option value="911 Carrera">911 Carrera</option>
                    <option value="M3">M3</option>
                    <option value="Supra">Supra</option>
                    <option value="GT-R">GT-R</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1.5 ml-1">Engine Type</label>
                  <select
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-600 outline-none"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md mt-4 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" /> Verify & Search Parts
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] text-zinc-500 font-medium border-t border-zinc-800 pt-4">
                <span className="flex items-center gap-1.5 uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  2.4M Parts Cataloged
                </span>
                <span className="uppercase tracking-wide">Fitment Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
