import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E7E4DC] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#F0ECE1] bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#1C1917]" />
            <h3 className="text-base font-bold text-[#1C1917]">
              Tabela de Medidas (Guia de Tamanhos)
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs text-[#57534E] leading-relaxed">
            As medidas são aproximadas em centímetros (cm), tiradas com a peça estendida sobre uma superfície plana. Pode haver variação de até ±1,5 cm devido ao processo de costura manual.
          </p>

          {/* Adult Table */}
          <div>
            <h4 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider mb-3">
              Grade Adulto (Tradicional, Dryfit e Polo)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-[#E7E4DC]">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F6F4EE] text-[#1C1917] border-b border-[#E7E4DC]">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Tamanho</th>
                    <th className="py-2.5 px-4 font-bold">Largura (Tórax)</th>
                    <th className="py-2.5 px-4 font-bold">Altura (Comprimento)</th>
                    <th className="py-2.5 px-4 font-bold">Manga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0ECE1] text-[#44403C] font-mono tabular-nums">
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">PP</td>
                    <td className="py-2.5 px-4">48 cm</td>
                    <td className="py-2.5 px-4">66 cm</td>
                    <td className="py-2.5 px-4">19 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">P</td>
                    <td className="py-2.5 px-4">51 cm</td>
                    <td className="py-2.5 px-4">68 cm</td>
                    <td className="py-2.5 px-4">20 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">M</td>
                    <td className="py-2.5 px-4">54 cm</td>
                    <td className="py-2.5 px-4">71 cm</td>
                    <td className="py-2.5 px-4">21 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">G</td>
                    <td className="py-2.5 px-4">57 cm</td>
                    <td className="py-2.5 px-4">74 cm</td>
                    <td className="py-2.5 px-4">22 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">GG</td>
                    <td className="py-2.5 px-4">60 cm</td>
                    <td className="py-2.5 px-4">77 cm</td>
                    <td className="py-2.5 px-4">23 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">XG</td>
                    <td className="py-2.5 px-4">64 cm</td>
                    <td className="py-2.5 px-4">80 cm</td>
                    <td className="py-2.5 px-4">24 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kids Table */}
          <div>
            <h4 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider mb-3">
              Grade Infantil (Camiseta Infantil)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-[#E7E4DC]">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F6F4EE] text-[#1C1917] border-b border-[#E7E4DC]">
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Tamanho</th>
                    <th className="py-2.5 px-4 font-bold">Idade Sugerida</th>
                    <th className="py-2.5 px-4 font-bold">Largura</th>
                    <th className="py-2.5 px-4 font-bold">Comprimento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0ECE1] text-[#44403C] font-mono tabular-nums">
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 02</td>
                    <td className="py-2.5 px-4 font-sans">1 a 2 anos</td>
                    <td className="py-2.5 px-4">31 cm</td>
                    <td className="py-2.5 px-4">42 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 04</td>
                    <td className="py-2.5 px-4 font-sans">3 a 4 anos</td>
                    <td className="py-2.5 px-4">33 cm</td>
                    <td className="py-2.5 px-4">46 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 06</td>
                    <td className="py-2.5 px-4 font-sans">5 a 6 anos</td>
                    <td className="py-2.5 px-4">36 cm</td>
                    <td className="py-2.5 px-4">49 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 08</td>
                    <td className="py-2.5 px-4 font-sans">7 a 8 anos</td>
                    <td className="py-2.5 px-4">39 cm</td>
                    <td className="py-2.5 px-4">53 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 10</td>
                    <td className="py-2.5 px-4 font-sans">9 a 10 anos</td>
                    <td className="py-2.5 px-4">41 cm</td>
                    <td className="py-2.5 px-4">57 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 12</td>
                    <td className="py-2.5 px-4 font-sans">11 a 12 anos</td>
                    <td className="py-2.5 px-4">43 cm</td>
                    <td className="py-2.5 px-4">60 cm</td>
                  </tr>
                  <tr className="hover:bg-[#FAF9F5]">
                    <td className="py-2.5 px-4 font-bold font-sans">Tam 14/16</td>
                    <td className="py-2.5 px-4 font-sans">13 a 15 anos</td>
                    <td className="py-2.5 px-4">46 cm</td>
                    <td className="py-2.5 px-4">64 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Measuring tips */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#EAE7DE] space-y-2">
            <h5 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              Dica para não errar no tamanho:
            </h5>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Pegue uma camiseta que veste perfeitamente em você, estique-a sobre a cama ou mesa e meça com fita métrica a distância entre as duas axilas (largura) e do ombro até a barra (altura). Compare com os valores acima!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#F0ECE1] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#292524] rounded-lg transition-colors cursor-pointer"
          >
            Entendi, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
