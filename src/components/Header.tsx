import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_BASE_URL, WHATSAPP_PHONE_DISPLAY } from '../data/products';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-xs border-b border-[#E8E5DE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Name */}
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1C1917] uppercase">
              Thalin Confecções
            </span>
          </div>

          {/* Discreet WhatsApp Contact */}
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp:</span>
            <span className="font-semibold text-[#1C1917]">{WHATSAPP_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
