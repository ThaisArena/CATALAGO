import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL, WHATSAPP_PHONE_DISPLAY } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E8E5DE] py-10 text-[#1C1917]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-base font-bold uppercase tracking-tight text-[#1C1917] block">
            Thalin Confecções
          </span>
          <span className="text-xs text-[#78716C]">
            Uniformes e Vestuário Personalizado
          </span>
        </div>

        <a
          href={WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Atendimento:</span>
          <span className="font-semibold text-[#1C1917]">{WHATSAPP_PHONE_DISPLAY}</span>
        </a>
      </div>
    </footer>
  );
};
