export type Gender = 'all' | 'women' | 'men';

export interface Artisan {
  name: string;
  region: string;
  generation: string;
  experienceYears: number;
  specialty: string;
  story: string;
  avatar: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  outfitBought: string;
  productId?: string;
  title?: string;
  helpfulCount?: number;
  fitFeedback?: 'True to Size' | 'Runs Slightly Small' | 'Runs Slightly Large' | 'Perfect Drape';
  occasion?: string;
  craftAppreciation?: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  gender: 'women' | 'men';
  category: 'sarees' | 'lehengas' | 'anarkalis' | 'kurta-sets' | 'sherwanis' | 'bandhgalas' | 'nehru-jackets';
  occasion: 'wedding' | 'festive' | 'sangeet' | 'haldi' | 'everyday';
  fabric: string;
  weaveType: string;
  originRegion: string;
  weavesDays: number;
  price: number; // in INR
  originalPrice: number;
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  images: string[];
  sizes: string[];
  description: string;
  artisan: Artisan;
  fabricDetails: string[];
  craftTechnique: string;
  careInstructions: string[];
  stylingTips: string;
  reviews: Review[];
}

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  quantity: number;
  customTailoring?: boolean;
  tailoringNotes?: string;
}

export interface FilterOptions {
  gender: Gender;
  category: string;
  occasion: string;
  fabric: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
}

export type Currency = 'INR' | 'USD' | 'GBP' | 'EUR' | 'AED';

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  specialInstructions?: string;
}

export interface OrderConfirmation {
  orderId: string;
  date: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  packagingType: 'heirloom' | 'eco';
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  currency: Currency;
  estimatedDelivery: string;
  trackingNumber: string;
}
