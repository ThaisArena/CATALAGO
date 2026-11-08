export interface Product {
  id: string;
  name: string;
  price: number; // in BRL, e.g. 55.00
  priceFormatted: string; // "R$ 55,00"
  description: string;
  category: string;
  fabric: string; // e.g. "Malha Fria (PV)", "100% Poliamida Dryfit UV", "Malha Piquet"
  customization: string; // e.g. "Nomes, logos, brasões e estampa"
  imageUrl: string;
  badge?: string; // e.g. "Mais Pedido", "Proteção UV50+", "Bordado Alta Definição"
  highlights: string[];
  sizes: string[];
  suitableFor: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSizes: { [size: string]: number };
  customizationNotes: string;
}
