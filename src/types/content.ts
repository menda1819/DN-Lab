import { ProductItem } from '../data/products';
import { ServiceItem } from '../data/services';
import { GalleryItem } from '../data/gallery';

export interface HeroContent {
  category: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  description: string;
  badges: string[];
  backgroundImage: string;
  bannerImage: string;
  bannerTitle: string;
  bannerSubtitle: string;
  inquiryLabel: string;
  inquiryPhone: string;
}

export interface AboutCard {
  title: string;
  description: string;
  badge: string;
  image: string;
  icon: string;
}

export interface AboutContent {
  tagline: string;
  title: string;
  description: string;
  backgroundImage: string;
  cards: AboutCard[];
}

export interface WhyUsCard {
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsContent {
  tagline: string;
  title: string;
  description: string;
  backgroundImage: string;
  cards: WhyUsCard[];
  teamImage: string;
  teamTag: string;
  teamSubtitle: string;
  teamTitle: string;
  teamDescription: string;
  teamBadges: string[];
}

export interface ServicesContent {
  tagline: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface ProductsContent {
  tagline: string;
  title: string;
  description: string;
  bannerImage: string;
  items: ProductItem[];
}

export interface GalleryContent {
  tagline: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface BusinessContent {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  street: string;
  city: string;
  formattedAddress: string;
  openingHours: string;
  sundayHours: string;
  ratingScore: number;
  reviewCount: number;
}

export interface WebsiteContent {
  business: BusinessContent;
  hero: HeroContent;
  about: AboutContent;
  whyUs: WhyUsContent;
  services: ServicesContent;
  products: ProductsContent;
  gallery: GalleryContent;
  lastUpdated: string;
}

