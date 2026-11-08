import React, { useState } from 'react';
import { MessageCircle, ZoomIn } from 'lucide-react';
import { Product } from '../types';
import { buildWhatsAppProductUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct
}) => {
  const [imageError, setImageError] = useState(false);
  const directWhatsAppUrl = buildWhatsAppProductUrl(product, 1);

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-[#E5E2DA] overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#D5D2C9]">
      {/* Product Image */}
      <div
        onClick={() => onSelectProduct(product)}
        className="relative w-full aspect-square bg-[#F5F4EE] overflow-hidden cursor-pointer flex items-center justify-center p-3"
        title="Clique para ver a foto ampliada"
      >
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#78716C] p-4 text-center">
            <span className="text-xs font-semibold">{product.name}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/75 rounded-full shadow-sm">
            <ZoomIn className="w-3.5 h-3.5" />
            Ampliar foto
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-5">
        <span className="text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider mb-1">
          {product.category}
        </span>

        <h3
          onClick={() => onSelectProduct(product)}
          className="text-base font-bold text-[#1C1917] tracking-tight hover:text-neutral-700 cursor-pointer transition-colors mb-2 leading-snug"
        >
          {product.name}
        </h3>

        <p className="text-xs text-[#57534E] leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price */}
        <div className="pt-3 border-t border-[#F0ECE1] flex items-baseline justify-between mb-4">
          <span className="text-xs text-[#78716C]">Preço</span>
          <span className="text-xl font-extrabold text-[#1C1917] font-mono tabular-nums">
            {product.priceFormatted}
          </span>
        </div>

        {/* WhatsApp Order Button */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#075E54] hover:bg-[#128C7E] rounded-lg transition-colors shadow-xs text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
          <span>Fazer Pedido no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
