
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
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col group hover:border-zinc-600 transition-all">
      <div 
        className="aspect-[4/3] bg-zinc-950 overflow-hidden cursor-pointer relative"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
            product.condition === PartCondition.NEW ? 'bg-blue-600 text-white' : 'bg-orange-600 text-white'
          }`}>
            {product.condition}
          </span>
          {product.stock <= 3 && (
            <span className="bg-red-600/90 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Only {product.stock} Left
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mono">OEM: {product.oemNumber}</p>
          <div className="flex items-center gap-1 text-[10px] font-bold text-green-500 uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3" /> Verified
          </div>
        </div>
        
        <h3 
          className="text-white font-bold text-sm mb-2 group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="text-xl font-black text-white leading-none">
              KES {product.price.toLocaleString()}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="bg-zinc-100 hover:bg-white text-black p-2 rounded transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
