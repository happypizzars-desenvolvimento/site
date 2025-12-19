export interface PizzaFlavor {
  name: string;
  description?: string;
  isVegetarian?: boolean;
  isPremium?: boolean;
  image: string;
}

export interface PricingTier {
  hours: number;
  price: number;
  description: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  HOW_IT_WORKS = 'how-it-works',
  MENU = 'menu',
  PRICING = 'pricing',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}