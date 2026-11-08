import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { buildWhatsAppProductUrl } from '../data/products';

interface OrderCustomizerModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, sizes: { [sz: string]: number }, notes: string) => void;
}

export const OrderCustomizerModal: React.FC<OrderCustomizerModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [sizesState, setSizesState] = useState<{ [sz: string]: number }>({});
  const [notes, setNotes] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    if (product) {
      // Default with 1 piece of the middle size
      const defaultSize = product.sizes.includes('M') ? 'M' : product.sizes[0];
      setSizesState({ [defaultSize]: 1 });
      setNotes('');
      setAddedNotice(false);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const totalQuantity = Object.values(sizesState).reduce((acc, curr) => acc + (curr || 0), 0);
  const effectiveQuantity = totalQuantity > 0 ? totalQuantity : 1;
  const totalPrice = effectiveQuantity * product.price;

  const handleUpdateSize = (sz: string, delta: number) => {
    setSizesState((prev) => {
      const current = prev[sz] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [sz]: next };
    });
  };

  const handleDirectWhatsApp = () => {
    const url = buildWhatsAppProductUrl(product, effectiveQuantity, sizesState, notes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToList = () => {
    onAddToCart(product, effectiveQuantity, sizesState, notes);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E7E4DC] overflow-hidden z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#F0ECE1] bg-[#FAF9F5]">
          <div>
            <span className="text-[11px] font-semibold text-[#78716C] uppercase tracking-wider">
              Configurar Pedido
            </span>
            <h3 className="text-base font-bold text-[#1C1917] line-clamp-1">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] rounded-lg transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-5">
          {/* Item summary banner */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F2EC] border border-[#E5E2DA]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-14 h-14 object-contain rounded bg-white p-1"
            />
            <div className="flex-grow min-w-0">
              <p className="text-xs font-semibold text-[#1C1917] truncate">{product.name}</p>
              <p className="text-xs text-[#78716C]">{product.fabric}</p>
              <p className="text-xs font-bold text-[#1C1917] font-mono tabular-nums">
                {product.priceFormatted} cada
              </p>
            </div>
          </div>

          {/* Size & Quantity Stepper */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                Selecione as Quantidades por Tamanho
              </label>
              <span className="text-xs text-[#78716C]">
                Total: <strong className="text-[#1C1917]">{effectiveQuantity}</strong> peças
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {product.sizes.map((sz) => {
                const count = sizesState[sz] || 0;
                return (
                  <div
                    key={sz}
                    className="flex items-center justify-between p-2 rounded-lg border border-[#E2DFD6] bg-[#FAF9F5]"
                  >
                    <span className="text-xs font-bold text-[#1C1917]">{sz}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleUpdateSize(sz, -1)}
                        disabled={count <= 0}
                        className="w-6 h-6 rounded flex items-center justify-center bg-white border border-[#D5D2C9] text-[#1C1917] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold font-mono">
                        {count}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdateSize(sz, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center bg-[#1C1917] text-white hover:bg-[#292524] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customization Details Input */}
          <div>
            <label className="block text-xs font-bold text-[#1C1917] uppercase tracking-wider mb-1.5">
              Detalhes de Personalização (Opcional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Nome nas costas: SGT SILVA, Brasão do batalhão no peito esquerdo, ou nome da empresa..."
              rows={3}
              className="w-full text-xs p-3 rounded-lg border border-[#D5D2C9] bg-white focus:outline-none focus:ring-1 focus:ring-[#1C1917] text-[#1C1917] placeholder:text-[#A8A29E]"
            />
            <p className="text-[11px] text-[#78716C] mt-1">
              A equipe da Thalin Confecções ajustará a arte e detalhes diretamente pelo WhatsApp.
            </p>
          </div>

          {/* Total Bar */}
          <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#E2DFD6] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#78716C] block">Subtotal Calculado</span>
              <span className="text-xs font-medium text-[#1C1917]">
                {effectiveQuantity} {effectiveQuantity === 1 ? 'peça' : 'peças'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl font-extrabold text-[#1C1917] font-mono tabular-nums">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#F0ECE1] bg-white space-y-2">
          {addedNotice ? (
            <div className="flex items-center justify-center gap-2 py-3 bg-[#EBF7EE] text-[#075E54] rounded-xl font-semibold text-xs border border-[#C5ECD0]">
              <Check className="w-4 h-4" />
              <span>Adicionado à Lista de Orçamento com sucesso!</span>
            </div>
          ) : (
            <>
              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#075E54] hover:bg-[#128C7E] rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Pedir no WhatsApp agora</span>
              </button>

              {/* Add to Multi-Item Cart */}
              <button
                type="button"
                onClick={handleAddToList}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#1C1917] bg-[#F4F2EC] hover:bg-[#EAE7DF] border border-[#E2DFD6] rounded-xl transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#57534E]" />
                <span>Adicionar à Lista de Orçamento (Multi-itens)</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
