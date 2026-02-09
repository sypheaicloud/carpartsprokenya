
import React from 'react';
import { Package, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Product, PartCondition } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/5">
      <div
        className="aspect-[4/3] bg-[#0c0c0e] overflow-hidden cursor-pointer relative"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${product.condition === PartCondition.NEW ? 'bg-amber-500 text-black' : 'bg-zinc-100 text-black'
            }`}>
            {product.condition}
          </span>
          {product.stock <= 3 && (
            <span className="bg-red-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
              Low Stock
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] font-mono">SKU: {product.oemNumber}</p>
          <div className="flex items-center gap-1.5 text-[10px] font-black text-green-500 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            Verified
          </div>
        </div>

        <h3
          className="text-white font-bold text-base mb-4 group-hover:text-amber-500 transition-colors cursor-pointer line-clamp-2 leading-tight"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>

        <div className="mt-auto pt-6 border-t border-zinc-800/50">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-white leading-none tracking-tighter">
              <span className="text-xs text-zinc-500 font-bold mr-1 italic">KES</span>
              {product.price.toLocaleString()}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="bg-amber-500 hover:bg-amber-400 text-black p-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
