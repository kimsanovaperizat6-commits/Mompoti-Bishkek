export type Language = 'kg' | 'ru';

export interface LocalizedString {
  ru: string;
  kg: string;
}

export interface ProductDetails {
  description: LocalizedString;
  materials: LocalizedString;
  safety: LocalizedString;
  dimensions?: LocalizedString;
  manufacturing: LocalizedString;
}

export interface Product {
  id: string;
  name: LocalizedString;
  shortDescription: LocalizedString;
  image: string;
  badge?: LocalizedString;
  priceNote?: LocalizedString;
  category: 'shelves' | 'shelving' | 'tables' | 'beds' | 'storage' | 'safety' | 'sets' | 'kitchen' | 'playhouse' | 'chairs' | 'decor';
  details: ProductDetails;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappUrlKg: string;
  whatsappUrlRu: string;
  instagramUrl: string;
  instagramHandle: string;
  phone: string;
  city: LocalizedString;
  address: LocalizedString;
  schedule: LocalizedString;
}
