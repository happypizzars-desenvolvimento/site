
export interface PizzaFlavor {
  name: string;
  description?: string;
  isVegetarian?: boolean;
  isPremium?: boolean;
  image: string;
}

export interface PricingTier {
  title?: string;
  hours: number;
  price: number;
  description: string;
  features?: string[];
  isSpecial?: boolean;
  isPopular?: boolean;
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
