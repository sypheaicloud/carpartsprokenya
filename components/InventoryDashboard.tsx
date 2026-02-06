
import React from 'react';
import { Plus, BarChart3, Package, Settings, AlertCircle } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const InventoryDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Seller Dashboard</h1>
          <p className="text-zinc-500 text-sm">Manage your inventory, pricing, and fulfillment status.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold text-sm uppercase flex items-center gap-2 transition-all">
          <Plus className="w-4 h-4" /> Add New Part
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Revenue', value: 'KES 1,248,200', icon: BarChart3, color: 'text-blue-500' },
          { label: 'Active Listings', value: '24', icon: Package, color: 'text-zinc-400' },
          { label: 'Low Stock Alert', value: '3', icon: AlertCircle, color: 'text-red-500' },
          { label: 'Pending Orders', value: '8', icon: Settings, color: 'text-zinc-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</span>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white uppercase tracking-tight">Active Inventory</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Filter by Part #..." 
              className="bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-zinc-950 border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Part Info</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Condition</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Stock</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Price</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {MOCK_PRODUCTS.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={p.images[0]} className="w-10 h-10 object-cover rounded bg-zinc-800" alt="" />
                      <div>
                        <div className="text-sm font-bold text-white">{p.name}</div>
                        <div className="text-[10px] text-zinc-500 mono">OEM: {p.oemNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      p.condition === 'NEW' ? 'bg-blue-600/20 text-blue-400' : 'bg-orange-600/20 text-orange-400'
                    }`}>
                      {p.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-sm font-bold ${p.stock <= 3 ? 'text-red-500' : 'text-zinc-300'}`}>
                      {p.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-bold text-white">KES {p.price.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[10px] font-bold uppercase text-zinc-400 hover:text-white transition-colors">Edit</button>
                    <span className="mx-2 text-zinc-800">|</span>
                    <button className="text-[10px] font-bold uppercase text-red-500 hover:text-red-400 transition-colors">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
