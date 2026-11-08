import { Product } from '../types';

export const WHATSAPP_PHONE_DISPLAY = "(11) 94309-0887";
export const WHATSAPP_RAW_PHONE = "5511943090887";
export const WHATSAPP_BASE_URL = "https://wa.me/5511943090887";

export const PRODUCTS: Product[] = [
  {
    id: 'camiseta-tradicional',
    name: 'CAMISETA TRADICIONAL',
    price: 55.00,
    priceFormatted: 'R$ 55,00',
    description: 'CAMISETA PERSONALIZADA COM NOMES, LOGOS, BRASÕES E ESTAMPA. IDEAL PARA EMPRESAS, EQUIPES, EVENTOS E UNIFORMES. CONFECIONADA EM MALHA FRIA.',
    category: 'Vestuário',
    fabric: 'Malha Fria (PV Premium)',
    customization: 'Nomes, logos, brasões militares e estampas personalizadas',
    imageUrl: '/assets/aistudio/camiseta_padr_o_24344169.jpeg',
    badge: 'Mais Pedida',
    highlights: [
      'Personalizada frente e verso com nome e insígnia',
      'Malha fria antipilling com toque macio e caimento impecável',
      'Excelente resistência a lavagens contínuas sem desbotar',
      'Ideal para empresas, pelotões, equipes e eventos'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
    suitableFor: ['Empresas', 'Equipes', 'Eventos', 'Uniformes']
  },
  {
    id: 'camiseta-infantil',
    name: 'CAMISETA INFANTIL',
    price: 40.00,
    priceFormatted: 'R$ 40,00',
    description: 'TAMANHO INFANTIL PERSONALIZADA - MALHA FRIA.',
    category: 'Vestuário',
    fabric: 'Malha Fria (Hipoalergênica)',
    customization: 'Estampas infantis temáticas, brasões, nomes e personalizações',
    imageUrl: '/assets/aistudio/IMG_2716_b39d11a4.png',
    badge: 'Linha Kids',
    highlights: [
      'Modelagem confortável e anatômica para crianças',
      'Malha fria leve e fresca para uso prolongado com máximo conforto',
      'Estamparia em alta definição com cores vivas e duráveis',
      'Personalização com nomes e artes personalizadas'
    ],
    sizes: ['02', '04', '06', '08', '10', '12', '14', '16'],
    suitableFor: ['Infantil', 'Escolas', 'Pelotões Mirins', 'Presentes']
  },
  {
    id: 'camiseta-numerada',
    name: 'CAMISETA NUMERADA',
    price: 55.00,
    priceFormatted: 'R$ 55,00',
    description: 'IDEAL PARA CURSOS MILITARES, PERSONALIZADA COM NUMERAÇÃO NA FRENTE, COSTAS E MANGAS. MALHA FRIA.',
    category: 'Vestuário',
    fabric: 'Malha Fria Reforçada',
    customization: 'Numeração tática em destaque na frente, costas e mangas',
    imageUrl: '/assets/aistudio/IMG_2724_825e2792.png',
    badge: 'Cursos Militares',
    highlights: [
      'Numeração de alta visibilidade no peito, costas e manga lateral',
      'Padrão oficial exigido para cursos operacionais e formação',
      'Costuras duplas reforçadas nas cavas e gola para máxima tração',
      'Tecido leve que não retém calor em atividades físicas intensas'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    suitableFor: ['Cursos Militares', 'Treinamento Tático', 'TFM', 'Turmas de Formação']
  },
  {
    id: 'dryfit-com-protecao-uv',
    name: 'DRYFIT COM PROTEÇÃO UV',
    price: 60.00,
    priceFormatted: 'R$ 60,00',
    description: '100% POLIAMIDA - DISPONIVEL NA VERSÃO BÁSICA E PERSONALIZADA CONFORME SUA PREFERÊNCIA.',
    category: 'Vestuário',
    fabric: '100% Poliamida Tecnológica com Proteção UV',
    customization: 'Versão básica lisa ou personalizada com artes, brasões e logotipos',
    imageUrl: '/assets/aistudio/IMG_2723_c142745d.png',
    badge: 'Proteção Solar UV',
    highlights: [
      '100% Poliamida com fator de proteção contra raios solares',
      'Tecnologia de secagem rápida (Dry) com rápida evaporação do suor',
      'Toque gelado acetinado, super leve e respirável',
      'Disponível lisa básica ou totalmente personalizada'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    suitableFor: ['Atividades ao Ar Livre', 'Polícia / Operações', 'Corrida', 'Esportes']
  },
  {
    id: 'camiseta-polo',
    name: 'CAMISETA POLO',
    price: 75.00,
    priceFormatted: 'R$ 75,00',
    description: 'POLO CONFECIONADA EM MALHA PIQUET.',
    category: 'Vestuário',
    fabric: 'Malha Piquet Confort',
    customization: 'Bordados estruturados, brasões, patches nas mangas e nas costas',
    imageUrl: '/assets/aistudio/Mockup_de_Polo_Preto_com_Patches_Bordados_27460f68.png',
    badge: 'Padrão Executivo',
    highlights: [
      'Confeccionada em autêntica malha piquet com textura sofisticada',
      'Gola e punhos com acabamento canelado que não deforma',
      'Ideal para patches e bordados de alta gramatura e bandeiras',
      'Perfeita para fardamento de serviço, oficiais e uniforme corporativo'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    suitableFor: ['Uniformes Executivos', 'Comando', 'Batalhões', 'Empresas']
  },
  {
    id: 'camiseta-tradicional-bordada',
    name: 'CAMISETA TRADICIONAL COM PERSONALIZAÇÃO BORDADA',
    price: 65.00,
    priceFormatted: 'R$ 65,00',
    description: 'MALHA FRIA COM BORDADO REFINADO DE ALTA PRECISÃO.',
    category: 'Vestuário',
    fabric: 'Malha Fria Nobre',
    customization: 'Bordado computadorizado com linhas de alta tenacidade e brilho',
    imageUrl: '/assets/aistudio/Camiseta_preta_com_bordados_personalizados_310f58f4.png',
    badge: 'Bordado Premium',
    highlights: [
      'Bordado computadorizado ultra definido e resistente a desfiamento',
      'Toque suave interno com entretela protetora antialérgica',
      'Malha fria nobre de primeira linha para durabilidade superior',
      'Valorização visual impecável para distintivos, patentes e marcas'
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
    suitableFor: ['Distintivos Oficiais', 'Uniformes de Destaque', 'Clubes', 'Corporativo']
  }
];

export const CATEGORIES = [
  'Todos',
  'Malha Fria',
  'Dryfit UV',
  'Polo Piquet',
  'Militar & Tático',
  'Infantil'
];

export function buildWhatsAppProductUrl(product: Product, quantity = 1, sizes?: { [key: string]: number }, notes?: string) {
  let message = `Olá, Thalin Confecções! Gostaria de fazer um pedido pelo catálogo:\n\n`;
  message += `*Item:* ${product.name}\n`;
  message += `*Valor Unitário:* ${product.priceFormatted}\n`;
  message += `*Tecido:* ${product.fabric}\n`;

  if (sizes && Object.keys(sizes).length > 0) {
    const sizeDetails = Object.entries(sizes)
      .filter(([_, q]) => q > 0)
      .map(([sz, q]) => `${q}x Tam ${sz}`)
      .join(', ');
    if (sizeDetails) {
      message += `*Tamanhos & Quantidades:* ${sizeDetails}\n`;
    }
  } else {
    message += `*Quantidade estimada:* ${quantity} peça(s)\n`;
  }

  if (notes && notes.trim()) {
    message += `*Observações / Personalização:* ${notes.trim()}\n`;
  }

  message += `\nPor favor, confirmem a disponibilidade e o prazo de confecção. Obrigado!`;

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppCartUrl(items: Array<{ product: Product; quantity: number; sizes: { [sz: string]: number }; notes: string }>) {
  if (items.length === 0) return WHATSAPP_BASE_URL;

  let total = 0;
  let totalPieces = 0;
  let message = `Olá, Thalin Confecções! Gostaria de solicitar um orçamento para os seguintes itens do catálogo:\n\n`;

  items.forEach((item, index) => {
    const subtotal = item.product.price * item.quantity;
    total += subtotal;
    totalPieces += item.quantity;

    message += `*${index + 1}. ${item.product.name}*\n`;
    message += `   Preço unitário: ${item.product.priceFormatted}\n`;
    message += `   Quantidade: ${item.quantity} peça(s) | Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;

    const sizeDetails = Object.entries(item.sizes)
      .filter(([_, q]) => q > 0)
      .map(([sz, q]) => `${q}x ${sz}`)
      .join(', ');
    if (sizeDetails) {
      message += `   Tamanhos: ${sizeDetails}\n`;
    }

    if (item.notes && item.notes.trim()) {
      message += `   Detalhes: ${item.notes.trim()}\n`;
    }
    message += `\n`;
  });

  message += `*TOTAL ESTIMADO:* R$ ${total.toFixed(2).replace('.', ',')} (${totalPieces} peças no total)\n\n`;
  message += `Aguardo retorno para combinarmos a arte/personalização e fechamento. Muito obrigado!`;

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
