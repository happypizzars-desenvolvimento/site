
import { PizzaFlavor, PricingTier } from './types';

/**
 * URLs VERIFICADAS DE PIZZAS SALGADAS
 */
const SAVORY_IMGS = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=600&q=80",
];

/**
 * URLs VERIFICADAS DE SOBREMESAS (EXCLUSIVAMENTE PIZZAS DOCES/DOCES CIRCULARES)
 */
const SWEET_IMGS = {
  morango_choc: "https://images.unsplash.com/photo-1617343253967-7986abbc9c86?auto=format&fit=crop&w=600&q=80",
  banana_doce: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=600&q=80",
  nutella_avelas: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80",
  romeu_julieta: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?auto=format&fit=crop&w=600&q=80",
  doce_leite: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80",
  mms_coloridos: "https://images.unsplash.com/photo-1565299543923-37dd39e0673f?auto=format&fit=crop&w=600&q=80",
  prestigio_coco: "https://images.unsplash.com/photo-1620374645310-f9d97e72326d?auto=format&fit=crop&w=600&q=80",
  brigadeiro_belga: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
};

export const SAVORY_FLAVORS: PizzaFlavor[] = [
  { name: 'Alho e Óleo', description: 'Clássica e aromática', image: SAVORY_IMGS[3] },
  { name: 'Bacon', description: 'Sabor intenso de bacon crocante', image: SAVORY_IMGS[0] },
  { name: 'Bacon com Milho', description: 'A combinação perfeita', image: SAVORY_IMGS[2] },
  { name: 'Basca', description: 'Tomate, bacon e catupiry', image: SAVORY_IMGS[5] },
  { name: 'Brócolis', description: 'Leve e saborosa', isVegetarian: true, image: SAVORY_IMGS[2] },
  { name: 'Brócolis com Bacon', description: 'O toque defumado no brócolis', image: SAVORY_IMGS[2] },
  { name: 'Calabresa', description: 'A preferida dos brasileiros', image: SAVORY_IMGS[1] },
  { name: 'Calabresa com Cebola', description: 'Toque acebolado especial', image: SAVORY_IMGS[1] },
  { name: 'Calabresa com Cheddar', description: 'Cremusidade extra', image: SAVORY_IMGS[1] },
  { name: 'Carne de Panela', description: 'Sabor caseiro inigualável', image: SAVORY_IMGS[5] },
  { name: 'Carne de Panela ao Alho e Óleo', description: 'Explosão de sabores', image: SAVORY_IMGS[5] },
  { name: 'Da Happy', description: 'Abacaxi, bacon, cebola roxa e requeijão', isPremium: true, image: SAVORY_IMGS[6] },
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
  { name: 'Chocolate com Morango', description: 'Ganache de chocolate ao leite com morangos frescos e raspas.', image: SWEET_IMGS.morango_choc },
  { name: 'Banana com Canela', description: 'Bananas fatiadas, açúcar, canela e gotas de chocolate branco.', image: SWEET_IMGS.banana_doce },
  { name: 'Nutella com Avelã', description: 'Creme de avelã original com avelãs torradas e picadas.', image: SWEET_IMGS.nutella_avelas },
  { name: 'Romeu e Julieta', description: 'Combinação clássica de goiabada cremosa com queijo minas frescal.', image: SWEET_IMGS.romeu_julieta },
  { name: 'Doce de Leite com Coco', description: 'Doce de leite artesanal salpicado com coco ralado em flocos.', image: SWEET_IMGS.doce_leite },
  { name: 'M&M\'s Coloridos', description: 'Base de chocolate branco coberta com confeitos coloridos.', image: SWEET_IMGS.mms_coloridos },
  { name: 'Prestígio', description: 'Chocolate ao leite, coco ralado e cerejas ao marrasquino.', image: SWEET_IMGS.prestigio_coco },
  { name: 'Brigadeiro Belga', description: 'Granulado gourmet sobre camada generosa de chocolate belga.', image: SWEET_IMGS.brigadeiro_belga },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    hours: 2,
    price: 39.90,
    description: 'Ideal para reuniões rápidas e petit comités.',
    features: ['Rodízio Livre', 'Massa Artesanal', 'Equipe Inclusa']
  },
  {
    hours: 3,
    price: 49.90,
    description: 'A modalidade perfeita para festas e celebrações completas.',
    isPopular: true,
    features: ['Rodízio Livre', 'Massa Artesanal', 'Equipe Inclusa', 'Mais tempo de festa']
  },
  {
    title: '2026 CHEGOU',
    hours: 3,
    price: 69.90,
    isSpecial: true,
    description: 'É HORA DE COMEMORAR! Rodízio de pizza + Chopp geladinho.',
    features: ['3h de Rodízio Livre', '50L de Chopp Gelado', 'Serviço Completo', 'Ideal p/ Formaturas e Casamentos']
  }
];

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
];

export const CONTACT_WHATSAPP = "5551993922477";
