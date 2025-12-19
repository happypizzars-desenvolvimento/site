import { PizzaFlavor, PricingTier } from './types';

// Helper to get consistent images (simulating "respective" images)
const SAVORY_IMGS = [
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Pepperoni/Meat
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Cheese
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Veggie/Mixed
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Classic
  "https://images.unsplash.com/photo-1593560708920-638928bad3d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Fancy
];

const SWEET_IMGS = [
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Chocolate style
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Dessert style
];

export const SAVORY_FLAVORS: PizzaFlavor[] = [
  { name: 'Alho e Óleo', description: 'Clássica e aromática', image: SAVORY_IMGS[3] },
  { name: 'Bacon', description: 'Sabor intenso de bacon crocante', image: SAVORY_IMGS[0] },
  { name: 'Bacon com Milho', description: 'A combinação perfeita', image: SAVORY_IMGS[2] },
  { name: 'Basca', description: 'Tomate, bacon e catupiry', image: SAVORY_IMGS[4] },
  { name: 'Brócolis', description: 'Leve e saborosa', isVegetarian: true, image: SAVORY_IMGS[2] },
  { name: 'Brócolis com Bacon', description: 'O toque defumado no brócolis', image: SAVORY_IMGS[2] },
  { name: 'Calabresa', description: 'A preferida dos brasileiros', image: SAVORY_IMGS[0] },
  { name: 'Calabresa com Cebola', description: 'Toque acebolado especial', image: SAVORY_IMGS[0] },
  { name: 'Calabresa com Cheddar', description: 'Cremusidade extra', image: SAVORY_IMGS[0] },
  { name: 'Carne de Panela', description: 'Sabor caseiro inigualável', image: SAVORY_IMGS[4] },
  { name: 'Carne de Panela ao Alho e Óleo', description: 'Explosão de sabores', image: SAVORY_IMGS[4] },
  { name: 'Da Happy', description: 'Abacaxi, bacon, cebola roxa e requeijão', isPremium: true, image: SAVORY_IMGS[4] },
  { name: 'Quatro Queijos', description: 'Mussarela, provolone, parmessão e gorgonzola', isVegetarian: true, image: SAVORY_IMGS[1] },
  { name: 'Frango c/ Geleia de Pimenta', description: 'Agridoce levemente picante', image: SAVORY_IMGS[3] },
  { name: 'Frango c/ Requeijão', description: 'Cremoso e suave', image: SAVORY_IMGS[3] },
  { name: 'Frango Fricassê', description: 'Com batata palha crocante', image: SAVORY_IMGS[3] },
  { name: 'Lombo com Abacaxi', description: 'O clássico agridoce', image: SAVORY_IMGS[0] },
  { name: 'Lombo', description: 'Suave e delicioso', image: SAVORY_IMGS[0] },
  { name: 'Marguerita', description: 'Tomate e manjericão fresco', isVegetarian: true, image: SAVORY_IMGS[1] },
  { name: 'Milho', description: 'Doce e crocante', isVegetarian: true, image: SAVORY_IMGS[2] },
  { name: 'Mussarela', description: 'O básico bem feito', isVegetarian: true, image: SAVORY_IMGS[1] },
  { name: 'Portuguesa', description: 'Presunto, ovo, cebola e azeitona', image: SAVORY_IMGS[2] },
  { name: 'Primavera', description: 'Mix de vegetais frescos', isVegetarian: true, image: SAVORY_IMGS[2] },
  { name: 'Strogonoff', description: 'Carne com molho cremoso e batata palha', image: SAVORY_IMGS[4] },
];

export const SWEET_FLAVORS: PizzaFlavor[] = [
  { name: 'Casadinho', description: 'Preto e branco em harmonia', image: SWEET_IMGS[0] },
  { name: 'Chocolate Branco', description: 'Doçura suave', image: SWEET_IMGS[1] },
  { name: 'Chocolate Preto', description: 'Intenso e cremoso', image: SWEET_IMGS[0] },
  { name: 'Chocolate Preto com Morango', description: 'O clássico romântico', image: SWEET_IMGS[0] },
  { name: 'Chocolate Preto com Paçoca', description: 'Crocância do amendoim', image: SWEET_IMGS[0] },
  { name: 'Doce de Leite com Paçoca', description: 'Sabor de infância', image: SWEET_IMGS[1] },
  { name: 'Prestígio', description: 'Chocolate com coco', image: SWEET_IMGS[0] },
  { name: 'Romeu e Julieta', description: 'Queijo com goiabada', image: SWEET_IMGS[1] },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    hours: 2,
    price: 39.90,
    description: 'Ideal para reuniões rápidas e petit comités.',
  },
  {
    hours: 3,
    price: 49.90,
    description: 'A modalidade perfeita para festas e celebrações completas.',
  }
];

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
];

export const CONTACT_WHATSAPP = "5551993922477"; // Based on OCR (51) 99392-2477