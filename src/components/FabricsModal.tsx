import React from 'react';
import { X, Sparkles, Sun, Shield, Layers, Award } from 'lucide-react';

interface FabricsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FabricsModal: React.FC<FabricsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E7E4DC] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#F0ECE1] bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#1C1917]" />
            <h3 className="text-base font-bold text-[#1C1917]">
              Guia de Tecidos & Personalização
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
        <div className="p-6 overflow-y-auto space-y-6 text-[#1C1917]">
          <p className="text-xs text-[#57534E] leading-relaxed">
            Na <strong>Thalin Confecções</strong>, selecionamos criteriosamente cada matéria-prima para garantir durabilidade, toque agradável na pele e resistência a dezenas de ciclos de lavagem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Fabric 1 */}
            <div className="p-4 rounded-xl border border-[#E7E4DC] bg-[#FAF9F5] flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-[#1C1917]">
                <Sparkles className="w-4 h-4 text-[#78716C]" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Malha Fria (PV)</h4>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed mb-3 flex-grow">
                Composição em 67% poliéster e 33% viscose. Possui toque fresco e sedoso, caimento leve, alta resistência antipilling (não gera bolinhas) e dispensa passar ferro após a lavagem.
              </p>
              <div className="pt-2 border-t border-[#EAE7DE] text-[11px] text-[#78716C]">
                <strong>Ideal para:</strong> Uniformes de empresas, eventos, cursos militares e uso diário.
              </div>
            </div>

            {/* Fabric 2 */}
            <div className="p-4 rounded-xl border border-[#E7E4DC] bg-[#FAF9F5] flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-[#1C1917]">
                <Sun className="w-4 h-4 text-[#D97706]" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Dryfit Poliamida UV</h4>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed mb-3 flex-grow">
                Confeccionada em 100% Poliamida pura com bloqueio de radiação ultravioleta. Toque gelado acetinado, máxima respirabilidade e evaporação instantânea da transpiração.
              </p>
              <div className="pt-2 border-t border-[#EAE7DE] text-[11px] text-[#78716C]">
                <strong>Ideal para:</strong> Treinamento Físico Militar (TFM), corrida, sol forte e esportes.
              </div>
            </div>

            {/* Fabric 3 */}
            <div className="p-4 rounded-xl border border-[#E7E4DC] bg-[#FAF9F5] flex flex-col">
              <div className="flex items-center gap-2 mb-2 text-[#1C1917]">
                <Shield className="w-4 h-4 text-[#1C1917]" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Malha Piquet Polo</h4>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed mb-3 flex-grow">
                Tecido estruturado com textura microperfurada característica da clássica camisa polo. Encorpado, elegante, com gola e punhos canelados de alta firmeza.
              </p>
              <div className="pt-2 border-t border-[#EAE7DE] text-[11px] text-[#78716C]">
                <strong>Ideal para:</strong> Fardamento de serviço, oficiais, recepção e trajes corporativos.
              </div>
            </div>
          </div>

          {/* Customization methods */}
          <div className="p-5 rounded-xl border border-[#EAE7DE] bg-[#F7F5EE] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#1C1917]">
              <Award className="w-4 h-4 text-[#25D366]" />
              Tecnologias de Personalização Disponíveis
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#57534E]">
              <div>
                <strong className="text-[#1C1917] block mb-0.5">Bordado Computadorizado</strong>
                Linhas de alta tenacidade com acabamento em relevo, fios brilhantes e entretela protetora antialérgica.
              </div>
              <div>
                <strong className="text-[#1C1917] block mb-0.5">Estamparia & Silk Digital</strong>
                Alta definição para nomes de alunos, números grandes para pelotões, logomarcas e artes completas.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#F0ECE1] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#292524] rounded-lg transition-colors cursor-pointer"
          >
            Fechar Guia
          </button>
        </div>
      </div>
    </div>
  );
};
