import React from 'react';
import { X, Trash2, MessageCircle, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { buildWhatsAppCartUrl, WHATSAPP_PHONE_DISPLAY } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const totalPieces = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);

  const cartPayload = items.map((i) => ({
    product: i.product,
    quantity: i.quantity,
    sizes: i.selectedSizes,
    notes: i.customizationNotes
  }));

  const whatsAppUrl = buildWhatsAppCartUrl(cartPayload);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl border-l border-[#E7E4DC] flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-[#F0ECE1] flex items-center justify-between bg-[#FAF9F5]">
          <div>
            <h3 className="text-base font-bold text-[#1C1917]">
              Lista de Orçamento
            </h3>
            <p className="text-xs text-[#78716C]">
              {totalPieces} {totalPieces === 1 ? 'peça selecionada' : 'peças selecionadas'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] rounded-lg transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center text-[#78716C]">
              <p className="text-sm font-semibold text-[#1C1917] mb-1">
                Sua lista está vazia
              </p>
              <p className="text-xs text-[#78716C] max-w-xs mx-auto mb-4">
                Navegue pelo catálogo e adicione os modelos desejados para solicitar um orçamento conjunto.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:underline"
              >
                Voltar aos produtos <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            items.map((item, index) => {
              const itemTotal = item.product.price * item.quantity;
              const sizeString = Object.entries(item.selectedSizes)
                .filter(([_, q]) => q > 0)
                .map(([sz, q]) => `${q}x ${sz}`)
                .join(', ');

              return (
                <div
                  key={`${item.product.id}-${index}`}
                  className="p-3.5 rounded-xl border border-[#E7E4DC] bg-[#FAF9F5] flex flex-col gap-2"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-14 h-14 object-contain rounded bg-white p-1 border border-[#E8E5DF] shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-[#1C1917] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-[#A8A29E] hover:text-red-600 transition-colors cursor-pointer p-0.5"
                          title="Remover item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#78716C]">{item.product.fabric}</p>

                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xs text-[#57534E]">
                          {item.quantity} un. × {item.product.priceFormatted}
                        </span>
                        <span className="text-xs font-bold text-[#1C1917] font-mono tabular-nums">
                          R$ {itemTotal.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {sizeString && (
                    <div className="text-[11px] text-[#57534E] bg-white px-2 py-1 rounded border border-[#ECE9E2]">
                      <span className="font-semibold text-[#1C1917]">Grade:</span> {sizeString}
                    </div>
                  )}

                  {item.customizationNotes && (
                    <div className="text-[11px] text-[#78716C] italic line-clamp-2">
                      &ldquo;{item.customizationNotes}&rdquo;
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F0ECE1] bg-white space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span>Total de peças:</span>
                <span className="font-semibold text-[#1C1917]">{totalPieces} un.</span>
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-[#F0ECE1]">
                <span className="text-sm font-bold text-[#1C1917]">Total Estimado:</span>
                <span className="text-2xl font-extrabold text-[#1C1917] font-mono tabular-nums">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#075E54] hover:bg-[#128C7E] rounded-xl transition-colors shadow-sm text-center"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enviar Orçamento no WhatsApp</span>
            </a>

            <div className="flex items-center justify-between pt-1 text-[11px] text-[#78716C]">
              <span>WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
              <button
                type="button"
                onClick={onClearCart}
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                Limpar lista
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
