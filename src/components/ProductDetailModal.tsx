import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { buildWhatsAppProductUrl, WHATSAPP_PHONE_DISPLAY } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const directWhatsAppUrl = buildWhatsAppProductUrl(product, 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#E7E4DC] flex flex-col md:flex-row z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 text-[#78716C] hover:text-[#1C1917] bg-white/90 hover:bg-white rounded-full border border-[#E7E4DC] transition-colors cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo Left */}
        <div className="md:w-1/2 bg-[#F6F4EE] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E7E4DC]">
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="max-h-80 md:max-h-96 w-auto object-contain rounded-lg"
          />
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider block mb-1">
              {product.category}
            </span>

            <h2 className="text-xl font-bold text-[#1C1917] tracking-tight mb-2">
              {product.name}
            </h2>

            <div className="text-2xl font-extrabold text-[#1C1917] font-mono tabular-nums mb-4">
              {product.priceFormatted}
            </div>

            <p className="text-sm text-[#44403C] leading-relaxed mb-6 pb-6 border-b border-[#F0ECE1]">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-bold text-white bg-[#075E54] hover:bg-[#128C7E] rounded-xl transition-colors shadow-sm text-center"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Fazer Pedido no WhatsApp ({product.priceFormatted})</span>
            </a>

            <p className="text-center text-xs text-[#78716C]">
              WhatsApp: {WHATSAPP_PHONE_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
