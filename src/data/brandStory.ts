export interface ArtisanProfile {
  id: string;
  name: string;
  role: string;
  region: string;
  craft: string;
  experience: string;
  quote: string;
  image: string;
  loomType: string;
}

export const ARTISAN_PROFILES: ArtisanProfile[] = [
  {
    id: 'artisan-1',
    name: 'Mohammad Rais Ansari',
    role: 'Master Pit-Loom Weaver',
    region: 'Madanpura, Varanasi',
    craft: 'Kadwa Brocade & Pure Zari Weaving',
    experience: '34 Years',
    quote: 'When the wooden shuttle flies between silk warps, it is not just fabric taking birth. It is our ancestral memory passing into your celebrations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
    loomType: 'Traditional 200-year-old Wooden Pit Loom'
  },
  {
    id: 'artisan-2',
    name: 'Begum Shabana Bano',
    role: 'Master Chikankari Artisan',
    region: 'Kakori, Lucknow',
    craft: 'Shadow-work Bakhiya, Murri & Phanda',
    experience: '28 Years',
    quote: 'In our village, women have preserved these 32 hand stitches across four generations. Each needle pass is made with prayer, patience, and love.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85',
    loomType: 'Handheld Wooden Embroidery Hoop & Adda'
  },
  {
    id: 'artisan-3',
    name: 'V. Ramachandran',
    role: 'Korvai Double-Shuttle Weaver',
    region: 'Kanchipuram, Tamil Nadu',
    craft: 'Temple Border Pure Mulberry Silk',
    experience: '37 Years',
    quote: 'A genuine Kanchipuram requires two weavers working in rhythmic unison. If one breathes faster than the other, the temple pattern shifts. Unity is our cloth.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=85',
    loomType: 'Dual-Shuttle Petni Loom'
  }
];

export const BRAND_VALUES = [
  {
    id: 'v1',
    title: 'Zero Intermediaries',
    description: '100% of our production funds go straight to independent artisan families and cooperative weaving guilds across Varanasi, Chanderi, Kanchipuram, and Lucknow.',
    tagline: 'Direct-from-Loom Fair Trade'
  },
  {
    id: 'v2',
    title: 'Certified Natural Fibers',
    description: 'We reject synthetic polyester and machine replicas. Every garment is crafted from government Silk Mark certified pure mulberry silk, wild Tussar, or organic combed Mulmul.',
    tagline: '100% Silk Mark Authenticated'
  },
  {
    id: 'v3',
    title: 'Slow Batch Craft',
    description: 'We don’t produce in conveyor-belt thousands. Each bridal lehenga, saree, and bandhgala takes between 12 to 45 dedicated days on traditional wooden looms.',
    tagline: '12 to 45 Days Per Garment'
  },
  {
    id: 'v4',
    title: 'Heirloom Guarantee',
    description: 'Traditional Indian clothing is meant to be passed down through generations. We offer complimentary lifetime seam expansion and styling consultation for all pieces.',
    tagline: 'Crafted to Outlast Decades'
  }
];
