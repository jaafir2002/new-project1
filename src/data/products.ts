import { Product } from '../types';
import chanderiAnarkaliImg from '../assets/images/chanderi_anarkali_suit_1789487617342.jpg';
import chanderiDetailImg from '../assets/images/chanderi_suit_detail_1789487636380.jpg';
import chikankariShararaImg from '../assets/images/chikankari_sharara_suit_1789487702002.jpg';
import haldiAngrakhaImg from '../assets/images/haldi_angrakha_suit_1789487666067.jpg';
import kanchipuramSareeImg from '../assets/images/kanchipuram_silk_saree_1789489901933.jpg';
import kanchipuramDetailImg from '../assets/images/kanchipuram_border_detail_1789489920275.jpg';
import groomVelvetSherwaniImg from '../assets/images/groom_velvet_sherwani_1789490585387.jpg';
import sherwaniZardoziDetailImg from '../assets/images/sherwani_zardozi_detail_1789490602076.jpg';
import tussarKurtaImg from '../assets/images/tussar_silk_kurta_1789566536230.jpg';
import tussarDetailImg from '../assets/images/tussar_kurta_detail_1789566549101.jpg';
import chikankariKurtaMenImg from '../assets/images/chikankari_kurta_men_1789567011327.jpg';
import chikankariKurtaDetailImg from '../assets/images/chikankari_emb_detail_1789567029250.jpg';
import zeenatPeshwasGownImg from '../assets/images/zeenat_peshwas_gown_1789571810005.jpg';
import peshwasZardoziDetailImg from '../assets/images/peshwas_zardozi_detail_1789571824926.jpg';
import kanjivaramBridalSareeImg from '../assets/images/kanjivaram_bridal_saree_1789572133783.jpg';
import gulabBridalLehengaImg from '../assets/images/gulab_bridal_lehenga_1789572164575.jpg';
import chanderiGotaAnarkaliImg from '../assets/images/chanderi_gota_anarkali_1789572180453.jpg';
import rawSilkBandhgalaMenImg from '../assets/images/raw_silk_bandhgala_men_1789572206790.jpg';
import velvetSherwaniMenImg from '../assets/images/velvet_sherwani_men_1789572224815.jpg';
import tussarKurtaMustardImg from '../assets/images/tussar_kurta_mustard_1789572244165.jpg';
import amberNehruBundiImg from '../assets/images/amber_nehru_bundi_1789573057665.jpg';
import amberBundiDetailImg from '../assets/images/amber_bundi_detail_1789573072433.jpg';

export const PRODUCTS: Product[] = [
  // --- WOMEN'S ETHNIC WEAR ---
  {
    id: 'vexo-w-01',
    title: 'Varanasi Royal Katan Silk Saree',
    subtitle: 'Handwoven in pure gold zari with antique floral jaal',
    gender: 'women',
    category: 'sarees',
    occasion: 'wedding',
    fabric: 'Pure Varanasi Katan Silk',
    weaveType: 'Kadwa Brocade Weave',
    originRegion: 'Varanasi, Uttar Pradesh',
    weavesDays: 32,
    price: 34500,
    originalPrice: 42000,
    badge: 'Masterpiece Handloom',
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['Free Size (Includes Unstitched Blouse Piece)', 'Custom Tailored Blouse'],
    description: 'A tribute to the centuries-old pit-loom heritage of Varanasi. Crafted from 100% pure Mulberry silk warp and spun zari weft, this majestic crimson heirloom saree requires over 250 hours of meticulous hand-manipulation by master weavers.',
    artisan: {
      name: 'Mohammad Rais Ansari',
      region: 'Madanpura, Varanasi',
      generation: '4th Generation Weaver',
      experienceYears: 34,
      specialty: 'Kadwa & Konia Motifs on Pit Loom',
      story: 'My great-grandfather wove for the royal courtyards. Every bootah on this saree is woven individually without floating threads on the reverse.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Certified Silk Mark Pure Katan Silk',
      'Tested Silver-Gilded Zari thread border & pallu',
      '6.5 Metres total drape (5.5m Saree + 1.0m Blouse piece)',
      'Rich contrast temple border with meenakari detailing'
    ],
    craftTechnique: 'Authentic Handloom Kadwa Technique - each motif is woven separately by hand shuttle.',
    careInstructions: [
      'Strictly dry clean only by silk specialists',
      'Wrap in breathable unbleached muslin cloth',
      'Change folding creases every 3-4 months to preserve zari strength'
    ],
    stylingTips: 'Pair with antique temple gold jhumkas, a round bindi, and freshly strung jasmine gajra in hair.',
    reviews: [
      {
        id: 'r-01',
        author: 'Ananya Deshmukh',
        location: 'Pune, Maharashtra',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Wore this for my brother’s wedding in Udaipur. The drape falls like liquid royalty. The zari does not itch at all, which proves how pure the weave is.',
        verified: true,
        outfitBought: 'Varanasi Royal Katan Silk Saree'
      },
      {
        id: 'r-02',
        author: 'Rohini Sundaram',
        location: 'Bengaluru, Karnataka',
        rating: 5,
        date: '1 month ago',
        comment: 'You can smell the honest loom craft the moment you unbox the muslin wrap. Truly an heirloom piece I will pass down to my daughter.',
        verified: true,
        outfitBought: 'Varanasi Royal Katan Silk Saree'
      }
    ]
  },
  {
    id: 'vexo-w-02',
    title: 'Chanderi Silk Anarkali Suit Set',
    subtitle: 'With fine gota patti and hand-embroidered organza dupatta',
    gender: 'women',
    category: 'anarkalis',
    occasion: 'festive',
    fabric: 'Handwoven Chanderi Silk Cotton',
    weaveType: 'Sheer Gossamer Weave with Zari Borders',
    originRegion: 'Chanderi, Madhya Pradesh',
    weavesDays: 16,
    price: 18900,
    originalPrice: 23500,
    badge: 'Artisan Favorite',
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    images: [
      chanderiAnarkaliImg,
      chanderiDetailImg,
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Size'],
    description: 'Light as morning mist yet radiant with festive charm. Hand-spun fine silk threads intertwined with soft cotton create a breathable, regal silhouette adorned with traditional Rajasthani gota patti along the hem and yoke.',
    artisan: {
      name: 'Sunita & Devraj Koli',
      region: 'Pranpur Village, Chanderi',
      generation: 'Family Guild Collective',
      experienceYears: 22,
      specialty: 'Fine count 200s silk-cotton blend weaving',
      story: 'In Pranpur, the rhythmic click-clack of the handloom is our village heartbeat. This suit carries the gentleness of natural river water wash.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '70% Pure Silk, 30% Desi Hand-spun Cotton',
      'Translucent Pure Silk Organza Dupatta with Scalloped Zari Edge',
      'Pure Cotton Malmal breathable inner lining',
      'Tonal churidar pants with comfortable drawstring'
    ],
    craftTechnique: 'Chanderi pit loom weaving with hand-appliquéd real metal Gota work.',
    careInstructions: [
      'Gentle cold dry clean recommended',
      'Iron inside-out on low silk setting',
      'Store flat in cotton bag away from direct sun'
    ],
    stylingTips: 'Adorn with polki stud earrings and raw silk mojris for Diwali celebrations or intimate sangeet ceremonies.',
    reviews: [
      {
        id: 'r-03',
        author: 'Meera Sengupta',
        location: 'Kolkata, West Bengal',
        rating: 5,
        date: '2 months ago',
        comment: 'So lightweight! Usually heavy ethnic wear feels exhausting after two hours, but this Chanderi set let me dance all night at my best friend’s Sangeet.',
        verified: true,
        outfitBought: 'Chanderi Silk Anarkali Suit Set'
      }
    ]
  },
  {
    id: 'vexo-w-03',
    title: 'Heritage Raw Silk Bridal Lehenga',
    subtitle: 'Deep rust & vermillion with zardozi, dabka, and pearl work',
    gender: 'women',
    category: 'lehengas',
    occasion: 'wedding',
    fabric: 'Pure Mulberry Raw Silk & Velvet Choli',
    weaveType: 'Heavy Structured Silk Twill',
    originRegion: 'Jaipur & Delhi Karigar Guild',
    weavesDays: 45,
    price: 68000,
    originalPrice: 84000,
    badge: 'Bespoke Bridal',
    rating: 5.0,
    reviewCount: 17,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['Custom Made to Measure', 'S', 'M', 'L', 'XL'],
    description: 'A timeless bridal creation celebrating Indian royal court couture. The flared skirt features 16 kalis hand-embroidered with micro-pearls, antique copper dabka, and fine zardozi wire reflecting Mughal floral arched motifs.',
    artisan: {
      name: 'Ustad Ashfaq Hussain',
      region: 'Old Delhi Karigari Guild',
      generation: 'Master Karigar',
      experienceYears: 41,
      specialty: 'Zardozi wire stretching & pearl cluster setting',
      story: 'My fingers know the tension of pure gold-wrapped copper wire by touch alone. Four karigars sat shoulder-to-shoulder for 3 weeks on the wooden frame for this skirt.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Skirts: Pure Raw Matka Silk with double can-can structuring',
      'Blouse: Silk Velvet with heavy neck and sleeve karigari',
      'Dual Dupatta: One heavy velvet bridal veil + One soft tissue organza drape',
      'Concealed artisanal pockets sewn inside the lehenga ghera'
    ],
    craftTechnique: 'Authentic Adda-work Zardozi embroidery performed on wooden trestles.',
    careInstructions: [
      'Specialist bridal dry clean only',
      'Keep enclosed with silica pouch and natural cedar balls',
      'Never spray perfume directly on metallic threads'
    ],
    stylingTips: 'Complete the royal bridal aesthetic with uncut polki choker, matha patti, and hand-embroidered velvet jutti.',
    reviews: [
      {
        id: 'r-04',
        author: 'Dr. Tanvi Parekh',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        date: '1 month ago',
        comment: 'I opted for the custom measurement service. The Vexo team called me via video to guide my measurement tape. It arrived fitting like a bespoke glove!',
        verified: true,
        outfitBought: 'Heritage Raw Silk Bridal Lehenga'
      }
    ]
  },
  {
    id: 'vexo-w-04',
    title: 'Lucknowi Chikankari Georgette Sharara Set',
    subtitle: 'Hand-crafted Bakhiya & Phanda stitches with fine mukaish embellishments',
    gender: 'women',
    category: 'kurta-sets',
    occasion: 'sangeet',
    fabric: 'Pure Viscose Georgette Hand-Dyed',
    weaveType: 'Hand Embroidered Chikankari',
    originRegion: 'Old Lucknow, Uttar Pradesh',
    weavesDays: 20,
    price: 21500,
    originalPrice: 26000,
    badge: 'Heritage Craft',
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    images: [
      chikankariShararaImg,
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Born in the Nawabi courts of Awadh. This sharara set embodies poetic restraint—over 32 distinct hand-embroidery stitches forming shadow floral medallions, punctuated with tiny flattened silver mukaish dots that catch the evening light.',
    artisan: {
      name: 'Begum Shabana Bano',
      region: 'Kakori, Lucknow',
      generation: 'Women’s Craft Collective Leader',
      experienceYears: 28,
      specialty: 'Fine shadow-work Bakhiya and Jaali cutting',
      story: 'Chikankari is meditative prayer for us. We sit in our village courtyard in natural daylight so every stitch remains balanced and taut.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure Georgette with whisper-soft drape',
      'Authentic Hand Chikankari: Bakhiya, Keel Kangan, and Phanda stitches',
      'Flared double-tier sharara pants with gathered silhouette',
      'Tonal crepe inner slip included for modesty and structure'
    ],
    craftTechnique: '100% manual needlework with wooden block-printed blueprint washes.',
    careInstructions: [
      'Hand wash gently in cold water with mild silk detergent or dry clean',
      'Dry in shade on flat surface',
      'Iron on reverse with press cloth'
    ],
    stylingTips: 'Style with silver chaandbalis, green glass bangles, and soft dewy makeup for sangeet or evening festivities.',
    reviews: [
      {
        id: 'r-05',
        author: 'Zoya Qureshi',
        location: 'Hyderabad, Telangana',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The shadow embroidery is so delicate you can tell immediately it was done by human hands, not machine prints. Absolutely breathtaking in real life.',
        verified: true,
        outfitBought: 'Lucknowi Chikankari Georgette Sharara Set'
      }
    ]
  },
  {
    id: 'vexo-w-05',
    title: 'Kanchipuram Temple Border Silk Saree',
    subtitle: 'Hand-loomed in pure mulberry silk with korvai interlocking technique',
    gender: 'women',
    category: 'sarees',
    occasion: 'wedding',
    fabric: 'Pure Mulberry Silk 3-Ply',
    weaveType: 'Traditional Korvai Handloom',
    originRegion: 'Kanchipuram, Tamil Nadu',
    weavesDays: 28,
    price: 39000,
    originalPrice: 46500,
    badge: 'GI Tag Certified',
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    images: [
      kanchipuramSareeImg,
      kanchipuramDetailImg,
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['Free Size (Includes Unstitched Blouse Piece)'],
    description: 'The golden jewel of South Indian handloom tradition. Made using the rare Korvai interlocking technique where two weavers work simultaneously from either side to meld the contrasting temple border seamlessly into the body.',
    artisan: {
      name: 'V. Ramachandran & Family',
      region: 'Kanchipuram Weavers Colony',
      generation: '5th Generation Silk Weaver',
      experienceYears: 37,
      specialty: 'Petni & Korvai Double Shuttle Weaving',
      story: 'A genuine Kanjivaram silk saree has substance—it stays crisp for decades. Our silks are dipped in rice starch water before final rolling.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Silk Mark Certified 100% 3-Ply Twisted Mulberry Silk',
      'Authentic Pure Silver and Gold Dipped Zari Border',
      'Signature Temple Rudraksha & Peacock motifs along the border',
      'Dense 820g weight offering majestic structural fall'
    ],
    craftTechnique: 'Dual-shuttle Korvai weave on pit-loom with jacquard punch-card border.',
    careInstructions: [
      'Specialist dry clean only',
      'Wrap in pure unbleached cotton',
      'Aerate in gentle indoor shade once a year'
    ],
    stylingTips: 'Drape in traditional Nivi style, paired with South Indian coin necklace (Kasu Mala) and waistband (Oddiyanam).',
    reviews: [
      {
        id: 'r-06',
        author: 'Lakshmi Narayanan',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Authentic Korvai joint is clearly visible on the reverse seam—this proves it was woven by two weavers on a real loom. Rare to find this integrity online.',
        verified: true,
        outfitBought: 'Kanchipuram Temple Border Silk Saree'
      }
    ]
  },
  {
    id: 'vexo-w-06',
    title: 'Mustard Haldi Silk Angrakha Set',
    subtitle: 'Flared crossover kurta with hand-block booti & churidar',
    gender: 'women',
    category: 'kurta-sets',
    occasion: 'haldi',
    fabric: 'Tussar Georgette Silk',
    weaveType: 'Hand Block Print with Gota Highlights',
    originRegion: 'Sanganer & Jaipur, Rajasthan',
    weavesDays: 12,
    price: 14800,
    originalPrice: 17500,
    badge: 'Haldi Edit',
    rating: 4.7,
    reviewCount: 22,
    inStock: true,
    images: [
      haldiAngrakhaImg,
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'An effervescent sunlit yellow ensemble designed specifically for joyful morning Haldi ceremonies. The angrakha neckline ties with handcrafted thread latkans, while the flowing skirt spins gracefully with every movement.',
    artisan: {
      name: 'Rameshwar Chhipa',
      region: 'Bagru, Rajasthan',
      generation: 'Block Carver & Printer Guild',
      experienceYears: 19,
      specialty: 'Natural turmeric and mud-resist Dabu printing',
      story: 'We carved the wooden blocks by hand using seasoned teakwood. Each print block is tapped with precision using wooden mallets.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Soft flowing Tussar Georgette Silk blend',
      'Organic Haldi (turmeric) dyed golden yellow tone',
      'Handcrafted fabric tassels with cowrie shells and mirror coins',
      'Includes matching silk organza dupatta with gota border'
    ],
    craftTechnique: 'Hand-carved wooden block print with artisanal gota patti appliqué.',
    careInstructions: [
      'First wash dry clean, subsequently gentle hand wash with cold water',
      'Do not wring or soak'
    ],
    stylingTips: 'Wear with fresh floral jewelry (haldi haath phool) and comfortable juttis for hassle-free festive celebrations.',
    reviews: [
      {
        id: 'r-07',
        author: 'Kritika Roy',
        location: 'Jaipur, Rajasthan',
        rating: 5,
        date: '1 month ago',
        comment: 'The yellow is so warm and flattering in golden hour wedding photos! Got endless compliments from everyone in my family.',
        verified: true,
        outfitBought: 'Mustard Haldi Silk Angrakha Set'
      }
    ]
  },

  // --- MEN'S ETHNIC WEAR ---
  {
    id: 'vexo-m-01',
    title: 'Raw Silk Jodhpuri Royal Bandhgala',
    subtitle: 'Hand-tailored structured bandhgala with antique brass lion buttons',
    gender: 'men',
    category: 'bandhgalas',
    occasion: 'wedding',
    fabric: 'Heavy Matka Raw Silk (350 GSM)',
    weaveType: 'Structured Slub Weave',
    originRegion: 'Jodhpur & Jaipur Royal Tailors',
    weavesDays: 18,
    price: 26500,
    originalPrice: 32000,
    badge: 'Royal Bespoke',
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)', 'Custom Bespoke Fit'],
    description: 'The epitome of princely elegance. Crafted from heavyweight natural Matka raw silk characterized by organic slub textures. Hand-canvassed with horsehair chest interlining to maintain a sharp, commanding posture throughout wedding galas.',
    artisan: {
      name: 'Master Tailor Chhagan Lal',
      region: 'Sojati Gate, Jodhpur',
      generation: 'Court Darzi Tradition',
      experienceYears: 36,
      specialty: 'Hand-canvassed shoulder architecture & stand collars',
      story: 'A true Bandhgala stands without wrinkling at the clavicle. We shape the collar curve by hand with steam irons before needlework.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Pure Natural Handloom Matka Raw Silk',
      'Full floating canvas construction for natural body mold',
      'Custom cast antique brass crested buttons',
      'Breathable Japanese Bemberg cupro silk lining inside'
    ],
    craftTechnique: 'Traditional Jodhpuri bespoke tailoring with hand-stitched pick lapels.',
    careInstructions: [
      'Strictly dry clean only',
      'Always hang on a broad contoured wooden hanger',
      'Steam iron only; avoid direct flat hot iron on raw silk slubs'
    ],
    stylingTips: 'Pair with slim-fit ivory breeches or tailored trousers, a silk pocket square, and polished leather monk straps.',
    reviews: [
      {
        id: 'r-08',
        author: 'Arjun Vikram Singh',
        location: 'New Delhi',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The chest roll and collar fit are unmatched. The raw silk has genuine texture and weight—not the synthetic polyester blend sold by fast-fashion stores.',
        verified: true,
        outfitBought: 'Raw Silk Jodhpuri Royal Bandhgala'
      },
      {
        id: 'r-09',
        author: 'Vikramaditya Rana',
        location: 'Udaipur, Rajasthan',
        rating: 5,
        date: '1 month ago',
        comment: 'Received compliments from royal family elders at our destination wedding. The craft speaks for itself.',
        verified: true,
        outfitBought: 'Raw Silk Jodhpuri Royal Bandhgala'
      }
    ]
  },
  {
    id: 'vexo-m-02',
    title: 'Heritage Velvet Groom Sherwani with Zari Stole',
    subtitle: 'Deep wine velvet with micro-dabka embroidery and pure silk churidar',
    gender: 'men',
    category: 'sherwanis',
    occasion: 'wedding',
    fabric: 'Micro-Silk Velvet & Tussar Silk Churidar',
    weaveType: 'Hand Zardozi on Velvet',
    originRegion: 'Lucknow & Old Delhi Atelier',
    weavesDays: 35,
    price: 54000,
    originalPrice: 65000,
    badge: 'Groom Heirloom',
    rating: 5.0,
    reviewCount: 19,
    inStock: true,
    images: [
      groomVelvetSherwaniImg,
      sherwaniZardoziDetailImg,
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', 'Custom Measurement'],
    description: 'Engineered for the discerning groom. The deep regal wine velvet base provides warmth and unmatched gravitas, embellished with subtle tone-on-tone antique zardozi work along the mandarin collar, cuffs, and front overlap.',
    artisan: {
      name: 'Ustad Tariq Qureshi',
      region: 'Chowk, Lucknow',
      generation: '3rd Generation Master Embroiderer',
      experienceYears: 31,
      specialty: 'Micro-dabka and salma work on heavy velvet',
      story: 'Velvet requires a delicate hand. If the needle tension slips by a fraction, the pile crushes. We take our time to honor the groom’s once-in-a-lifetime day.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'High-density pure silk velvet pile with rich luster',
      'Comes with 2.8m Pure Tussar Silk Stole with Zari Border',
      'Includes stretchable pure cotton-silk churidar bottoms',
      'Handcrafted matching velvet turban fabric option available'
    ],
    craftTechnique: 'Meticulous needle-set zardozi and antique dabka embroidery.',
    careInstructions: [
      'Specialist dry clean only',
      'Store upright in the provided heirloom wooden hanger and cotton bag'
    ],
    stylingTips: 'Pair with an emerald bead mala necklace, jeweled kalgi on safa, and embroidered mojris.',
    reviews: [
      {
        id: 'r-10',
        author: 'Rohan Mathur',
        location: 'Chandigarh, Punjab',
        rating: 5,
        date: '3 weeks ago',
        comment: 'My wedding sherwani was the highlight of our wedding album! The weight, the wine velvet hue, and the custom stole completed my groom look effortlessly.',
        verified: true,
        outfitBought: 'Heritage Velvet Groom Sherwani with Zari Stole'
      }
    ]
  },
  {
    id: 'vexo-m-03',
    title: 'Handwoven Tussar Silk Kurta Churidar',
    subtitle: 'Natural wild tussar silk with subtle kantha embroidered placket',
    gender: 'men',
    category: 'kurta-sets',
    occasion: 'festive',
    fabric: 'Pure Wild Tussar Silk Handloom',
    weaveType: 'Natural Textured Slub Weave',
    originRegion: 'Bhagalpur, Bihar',
    weavesDays: 14,
    price: 13500,
    originalPrice: 16800,
    badge: 'Artisan Handloom',
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
    images: [
      tussarKurtaImg,
      tussarDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Renowned as Bhagalpur’s golden thread. Wild Tussar silk is naturally breathable, cool in daytime rituals and insulating as evening sets in. Features a minimalist Mandarin collar accented with hand-run Kantha stitch running down the placket.',
    artisan: {
      name: 'Dharmendra Kumar Das',
      region: 'Champanagar, Bhagalpur',
      generation: 'Weavers Collective Co-op',
      experienceYears: 24,
      specialty: 'Wild Tussar yarn spinning & pit loom weaving',
      story: 'Tussar has an earthy soul. Unlike commercial factory silks, each thread carries natural honey tones directly from wild silkworm cocoons.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Unbleached Bhagalpuri Tussar Silk',
      'Natural honey-beige undertone requiring zero chemical bleaching',
      'Mother-of-pearl buttons hand-sewn with silk thread',
      'Dual deep in-seam side pockets for phone and wallet'
    ],
    craftTechnique: 'Handloom shuttle weaving with artisan Kantha needlework.',
    careInstructions: [
      'Dry clean or gentle cold wash with baby shampoo',
      'Never twist or wring the fabric',
      'Warm iron while slightly damp'
    ],
    stylingTips: 'Wear with a contrasting maroon silk pocket square or pair with a woven Nehru bundi jacket for festive dinners.',
    reviews: [
      {
        id: 'r-11',
        author: 'Siddharth Iyer',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        date: '1 month ago',
        comment: 'So comfortable! The natural tussar breathability is incredible. It feels rich without being showy.',
        verified: true,
        outfitBought: 'Handwoven Tussar Silk Kurta Churidar'
      }
    ]
  },
  {
    id: 'vexo-m-04',
    title: 'Banarasi Brocade Nehru Bundi Jacket',
    subtitle: 'Woven in antique gold bootah pattern with mandarin collar',
    gender: 'men',
    category: 'nehru-jackets',
    occasion: 'festive',
    fabric: 'Pure Banarasi Katan Silk & Zari',
    weaveType: 'Brocade Jacquard Weave',
    originRegion: 'Varanasi, Uttar Pradesh',
    weavesDays: 15,
    price: 15200,
    originalPrice: 18500,
    badge: 'Festive Bestseller',
    rating: 4.9,
    reviewCount: 52,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Transform any simple kurta into an occasion ensemble. This sleeveless Nehru bundi jacket features an exquisite Banarasi brocade pattern woven with burnished gold zari on deep royal midnight blue silk.',
    artisan: {
      name: 'Master Weaver Hafeez Ahmed',
      region: 'Kotwa, Varanasi',
      generation: '4th Generation Brocade Weaver',
      experienceYears: 29,
      specialty: 'Zari bootah drafting and punch-card design',
      story: 'We balance the weight of gold thread against fine silk so the jacket stays crisp on the chest without feeling stiff.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure Banarasi Silk with woven metallic thread motif',
      'Structured chest canvas with welt breast pocket for pocket square',
      'High Mandarin band collar with soft silk interior facing',
      'Custom cast metal coin buttons'
    ],
    craftTechnique: 'Varanasi traditional pit-loom brocade weaving.',
    careInstructions: [
      'Dry clean only',
      'Keep away from moisture; store in unbleached cotton envelope'
    ],
    stylingTips: 'Layer over an ivory or raw silk kurta set for Diwali, Sangeet evenings, or daytime engagement celebrations.',
    reviews: [
      {
        id: 'r-12',
        author: 'Kabir Batra',
        location: 'Gurugram, Haryana',
        rating: 5,
        date: '3 weeks ago',
        comment: 'This jacket turned my plain white kurta into the best-dressed outfit at our office Diwali party. Superbly structured.',
        verified: true,
        outfitBought: 'Banarasi Brocade Nehru Bundi Jacket'
      }
    ]
  },
  {
    id: 'vexo-m-05',
    title: 'Lucknowi Chikankari Cotton Kurta Set',
    subtitle: 'Breathable fine cotton with hand-embroidered shadow work',
    gender: 'men',
    category: 'kurta-sets',
    occasion: 'everyday',
    fabric: '100% Fine Egyptian Mulmul Cotton',
    weaveType: 'Hand Embroidered Chikankari',
    originRegion: 'Lucknow, Uttar Pradesh',
    weavesDays: 10,
    price: 8900,
    originalPrice: 11200,
    badge: 'Everyday Heritage',
    rating: 4.7,
    reviewCount: 39,
    inStock: true,
    images: [
      chikankariKurtaMenImg,
      chikankariKurtaDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Pure effortless elegance. Crafted from whisper-light Mulmul cotton, adorned with classic Lucknowi Chikankari needlework along the placket, collar, and sleeve cuffs. Built for balmy Indian summers, temple visits, and relaxed Sunday brunches.',
    artisan: {
      name: 'Raziya Begum',
      region: 'Aminabad, Lucknow',
      generation: 'Women’s Artisanal Guild',
      experienceYears: 23,
      specialty: 'Tepchi and Murri stitch mastery',
      story: 'A white-on-white Chikankari kurta is an immortal classic. It speaks softly without needing loud fanfare.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Combed Mulmul Cotton - pre-shrunk and bio-washed',
      'Authentic Lucknowi hand-embroidery throughout collar and placket',
      'Includes comfortable cotton pajama trousers with elasticized waist',
      'Reinforced side slits for easy movement'
    ],
    craftTechnique: 'Pure manual hand needlework on fine cotton fabric.',
    careInstructions: [
      'Gentle machine wash with cold water or hand wash',
      'Line dry in shade to maintain crisp cotton brightness',
      'Iron with medium-high steam'
    ],
    stylingTips: 'Pair with tan leather kolhapuri sandals and aviator sunglasses for casual elegance.',
    reviews: [
      {
        id: 'r-13',
        author: 'Devendra Joshi',
        location: 'Ahmedabad, Gujarat',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The cotton is amazingly soft. Doesn’t heat up during afternoon rituals. Very authentic Chikankari stitch.',
        verified: true,
        outfitBought: 'Lucknowi Chikankari Cotton Kurta Set'
      }
    ]
  },
  {
    id: 'vexo-m-06',
    title: 'Indo-Western Silk Achkan with Asymmetrical Placket',
    subtitle: 'Modern tailored silhouette in pure raw silk with metallic accents',
    gender: 'men',
    category: 'sherwanis',
    occasion: 'sangeet',
    fabric: 'Pure Raw Silk with Satin Trims',
    weaveType: 'Bespoke Modern Tailoring',
    originRegion: 'Delhi Craft Atelier',
    weavesDays: 22,
    price: 32000,
    originalPrice: 38500,
    badge: 'Modern Classic',
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', 'Custom Fit'],
    description: 'Where centuries-old silk weaving meets modern contemporary tailoring. This asymmetrical front-overlap achkan is crafted from rich charcoal slate raw silk with hand-turned fabric buttons and an internal concealed zip for flawless contouring.',
    artisan: {
      name: 'Master Cutter Farooq Mirza',
      region: 'Nizamuddin, New Delhi',
      generation: 'Bespoke Tailoring Master',
      experienceYears: 27,
      specialty: 'Asymmetrical drape engineering & structural canvas',
      story: 'We wanted modern grooms to move freely during Sangeet dance performances without losing the majesty of Indian ethnic wear.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'High-grade handloom Raw Silk with structured fall',
      'Concealed magnetic and zip closure beneath asymmetrical flap',
      'Includes tailored narrow-leg silk blend trousers',
      'Interior silk chest pocket with pen holder slot'
    ],
    craftTechnique: 'High-precision pattern cutting combined with artisan hand-stitched hem.',
    careInstructions: [
      'Dry clean only',
      'Steam iron on reverse with damp cloth'
    ],
    stylingTips: 'Pair with black Chelsea boots or handcrafted leather juttis for high-fashion Sangeet evenings.',
    reviews: [
      {
        id: 'r-14',
        author: 'Samarth Kapoor',
        location: 'Bengaluru, Karnataka',
        rating: 5,
        date: '1 month ago',
        comment: 'Wore this for my engagement party. The asymmetrical cut is clean and sharp. Everyone asked where I had it custom tailored!',
        verified: true,
        outfitBought: 'Indo-Western Silk Achkan with Asymmetrical Placket'
      }
    ]
  },
  {
    id: 'vexo-w-07',
    title: 'Gulmarg Meenakari Katan Silk Saree',
    subtitle: 'Hand-dyed in rani pink with five-color resham flora & antique gold zari',
    gender: 'women',
    category: 'sarees',
    occasion: 'wedding',
    fabric: 'Pure Mulberry Katan Silk',
    weaveType: 'Meenakari Kadwa Pit-Loom',
    originRegion: 'Varanasi, Uttar Pradesh',
    weavesDays: 38,
    price: 38500,
    originalPrice: 46000,
    badge: 'Masterpiece Handloom',
    rating: 4.9,
    reviewCount: 28,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['Free Size (Includes 1m Unstitched Blouse Piece)', 'Custom Tailored Blouse'],
    description: 'A botanical symphony woven across 38 intense days on a heritage wooden pit-loom. Features five-colored spun silk threads embedded into gold zari bouquets using the ancient Persian Meenakari technique revived in Varanasi.',
    artisan: {
      name: 'Mohammad Rais Ansari',
      region: 'Madanpura, Varanasi',
      generation: '4th Generation Weaver',
      experienceYears: 34,
      specialty: 'Kadwa Meenakari & Dual-Tone Zari Weave',
      story: 'Each flower is shaded by hand-swapping miniature colored spools in the loom weft.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Government Silk Mark Certified 100% Pure Katan Mulberry Silk',
      'Tested pure silver electroplated antique gold zari border',
      'Elaborate peacock and lotus medallion pallu drape',
      'Dense Kadwa body without floating threads on reverse'
    ],
    craftTechnique: 'Authentic Handloom Kadwa Meenakari with zero mechanical intervention.',
    careInstructions: [
      'Dry clean only by certified handloom silk specialists',
      'Wrap in pure muslin cloth and store away from dampness'
    ],
    stylingTips: 'Pair with heritage Jadau polki choker and fresh tuberoses pinned into an elegant low bun.',
    reviews: [
      {
        id: 'r-15',
        author: 'Suniti Mathur',
        location: 'Jaipur, Rajasthan',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The five colors in the flowers shine like real enameling. This is true museum quality craft.',
        verified: true,
        outfitBought: 'Gulmarg Meenakari Katan Silk Saree'
      }
    ]
  },
  {
    id: 'vexo-w-08',
    title: 'Zeenat Awadhi Kalidar Peshwas Gown',
    subtitle: 'Floor-length pure silk organza with hand zardozi and pearl marori work',
    gender: 'women',
    category: 'anarkalis',
    occasion: 'festive',
    fabric: 'Pure Silk Organza & Bemberg Satin',
    weaveType: '32-Kali Flare Hand Cut & Embroidered',
    originRegion: 'Lucknow, Uttar Pradesh',
    weavesDays: 24,
    price: 36000,
    originalPrice: 42500,
    badge: 'Royal Heirloom',
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
    images: [
      zeenatPeshwasGownImg,
      peshwasZardoziDetailImg
    ],
    sizes: ['XS (34)', 'S (36)', 'M (38)', 'L (40)', 'XL (42)', 'Custom Made-to-Measure'],
    description: 'Inspired by the regal court attire of Awadh. This dramatic 32-panel kalidar peshwas gown features delicate floral trellises rendered in champagne micro-pearls, dabka coils, and antique copper salma along the ghera.',
    artisan: {
      name: 'Begum Shabana Bano',
      region: 'Kakori, Lucknow',
      generation: '4th Generation Zardozi Master',
      experienceYears: 28,
      specialty: 'Marori & Seed-Pearl Needle Embroidery',
      story: 'The 32 panels flow like mist when the wearer spins. It takes two craftswomen 18 days just for the neckline borders.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure Silk Sheer Organza over unblemished Bemberg satin lining',
      'Hand-sewn micro seed pearls and French knot resham threads',
      'Includes 2.75m scalloped organza dupatta with zardozi borders',
      'Matching tailored pure churidar trousers with cuff pearl buttons'
    ],
    craftTechnique: 'Adda frame tambour embroidery and hand-pleated kalidar construction.',
    careInstructions: [
      'Delicate dry clean only',
      'Never spray perfumes directly on metallic threadwork'
    ],
    stylingTips: 'Style with antique pearls, a delicate passa in hair, and subtle nude-rose makeup.',
    reviews: [
      {
        id: 'r-16',
        author: 'Dr. Fatima Rizvi',
        location: 'Hyderabad, Telangana',
        rating: 5,
        date: '3 weeks ago',
        comment: 'The flair of the 32 kalis is breathtaking when walking into a ballroom. Truly regal craftsmanship.',
        verified: true,
        outfitBought: 'Zeenat Awadhi Kalidar Peshwas Gown'
      }
    ]
  },
  {
    id: 'vexo-m-07',
    title: 'Badshahi Zari Jamawar Groom Sherwani',
    subtitle: 'Woven in pure ivory and champagne gold silk brocade with antique buttons',
    gender: 'men',
    category: 'sherwanis',
    occasion: 'wedding',
    fabric: 'Pure Mulberry Silk Jamawar Brocade',
    weaveType: 'Brocade Jaal Hand Weave',
    originRegion: 'Varanasi, Uttar Pradesh',
    weavesDays: 35,
    price: 48000,
    originalPrice: 58000,
    badge: 'Groom Edition',
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)', 'Custom Bespoke Tailoring'],
    description: 'An emperor’s silhouette tailored from heavyweight handloomed Jamawar silk. The fabric is woven on specialized Jacquard pit-looms with thousands of punch cards forming an uninterrupted royal shikargah and paisley jaal in subtle champagne gold.',
    artisan: {
      name: 'Master Cutter Farooq Mirza',
      region: 'Nizamuddin, New Delhi',
      generation: 'Bespoke Tailoring Master',
      experienceYears: 27,
      specialty: 'Hand-canvassed chest structure & heirloom sherwanis',
      story: 'We use full-floating horsehair canvas interlining so the sherwani moulds naturally to the groom’s posture.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Handloom Mulberry Silk Jamawar with spun silver-gold zari',
      'Full floating horsehair canvas for structural crease resistance',
      'Handcrafted antique brass buttons with meenakari detailing',
      'Includes tailored cotton-silk churidar and matching pocket square'
    ],
    craftTechnique: 'Master handloom brocade weaving with bespoke Savile Row-inspired canvas construction.',
    careInstructions: [
      'Strictly dry clean only',
      'Store on wide-shoulder wooden hanger in breathable garment bag'
    ],
    stylingTips: 'Drape with an emerald safa and a multi-strand Basra pearl mala for the royal wedding entry.',
    reviews: [
      {
        id: 'r-17',
        author: 'Arjun Vikramaditya',
        location: 'New Delhi',
        rating: 5,
        date: '1 month ago',
        comment: 'The sherwani fit me like a second skin. It felt grand without being heavy or rigid. Complete royal look.',
        verified: true,
        outfitBought: 'Badshahi Zari Jamawar Groom Sherwani'
      }
    ]
  },
  {
    id: 'vexo-m-08',
    title: 'Amber Meenakari Brocade Nehru Bundi',
    subtitle: 'Woven in honey amber raw silk with antique floral buttis and silk pocket square',
    gender: 'men',
    category: 'nehru-jackets',
    occasion: 'festive',
    fabric: 'Matka Raw Silk Brocade',
    weaveType: 'Pit-Loom Butti Weave',
    originRegion: 'Chanderi, Madhya Pradesh',
    weavesDays: 14,
    price: 16500,
    originalPrice: 21000,
    badge: 'Artisanal Essential',
    rating: 4.9,
    reviewCount: 23,
    inStock: true,
    images: [
      amberNehruBundiImg,
      amberBundiDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'A versatile ceremonial waistcoat handloomed in textured honey amber raw silk. Accented with subtle metallic floral motifs, a tailored mandarin collar, welt pockets, and real mother-of-pearl buttons.',
    artisan: {
      name: 'Mohammad Rais Ansari',
      region: 'Madanpura, Varanasi',
      generation: '4th Generation Weaver',
      experienceYears: 34,
      specialty: 'Brocade Bundis & Textured Raw Silk',
      story: 'Raw silk has an organic, grainy luster that catches festive chandelier lights like nothing else.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Pure Matka Raw Silk with natural slub texture',
      'Pure brass buttons coated in antique gold lacquer',
      'Breathable bemberg lining for cool comfort through festive hours',
      'Hand-finished chest welt pocket with complimentary silk pocket square'
    ],
    craftTechnique: 'Handloom pit-loom weaving with handcrafted button loops and bound buttonholes.',
    careInstructions: [
      'Dry clean only',
      'Cool iron with pressing cloth'
    ],
    stylingTips: 'Layer over a crisp ivory or sand-gold mulmul kurta for Haldi, Mehendi, or Diwali festivities.',
    reviews: [
      {
        id: 'r-18',
        author: 'Nikhil Kashyap',
        location: 'Chandigarh',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Color is stunning in daylight and under warm evening lighting. High quality raw silk with rich feel.',
        verified: true,
        outfitBought: 'Amber Meenakari Brocade Nehru Bundi'
      }
    ]
  },
  // --- ADDITIONAL CURATED DRESSES FOR CORE SIGNATURE TYPES ---
  // 1. Banarasi & Kanjivaram Sarees
  {
    id: 'vexo-w-09',
    title: 'Kanjivaram Mayil Real Zari Bridal Silk Saree',
    subtitle: 'Woven in vermillion red with Korvai pure gold zari temple borders',
    gender: 'women',
    category: 'sarees',
    occasion: 'wedding',
    fabric: 'Pure Mulberry Silk (Silk Mark Certified)',
    weaveType: 'Interlocked Korvai Handloom Weave',
    originRegion: 'Kanchipuram, Tamil Nadu',
    weavesDays: 30,
    price: 48500,
    originalPrice: 56000,
    badge: 'Silk Mark Certified',
    rating: 4.9,
    reviewCount: 37,
    inStock: true,
    images: [
      kanjivaramBridalSareeImg,
      kanchipuramDetailImg
    ],
    sizes: ['Free Size (6.2m including blouse piece)'],
    description: 'A breathtaking South Indian bridal heirloom. Three-ply pure mulberry silk handwoven with authentic silver zari dipped in 24k molten gold. Features the sacred Mayil (peacock) motif and sharp temple spikes along the interlocking border.',
    artisan: {
      name: 'V. Sundaramurthy',
      region: 'Pillayar Palayam, Kanchipuram',
      generation: '3rd Generation Master Korvai Weaver',
      experienceYears: 36,
      specialty: 'Traditional Petni & Korvai Border Interlocking',
      story: 'Two weavers sit opposite each other on the loom, guiding separate shuttles for hours to lock body and border perfectly together.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Certified Mulberry Silk with Government Silk Mark guarantee',
      'Tested pure silver and gold electroplated zari threads',
      'Heavy 850 grams heirloom silk weight ensuring majestic traditional fall',
      'Unstitched contrast golden tissue brocade blouse piece included'
    ],
    craftTechnique: 'Pure pit-loom Korvai weaving requiring dual weavers and manual temple shuttle insertion.',
    careInstructions: [
      'Dry clean only by heritage saree specialists',
      'Store wrapped in unbleached pure cotton muslin cloth',
      'Air drape twice a year in shade; do not spray perfume directly'
    ],
    stylingTips: 'Pair with antique temple gold jewelry, fresh jasmine gajra in hair, and a classic round red bindi.',
    reviews: [
      {
        id: 'r-19',
        author: 'Meenakshi Ramanathan',
        location: 'Chennai, Tamil Nadu',
        rating: 5,
        date: '1 week ago',
        comment: 'Wore this for my Muhurtham ceremony. The weight, the luster of the pure gold zari, and the vivid vermillion silk received endless compliments from all our relatives.',
        verified: true,
        outfitBought: 'Kanjivaram Mayil Real Zari Bridal Silk Saree'
      }
    ]
  },
  // 2. Bridal Lehengas
  {
    id: 'vexo-w-10',
    title: 'Gulab Shahi Heritage Velvet Bridal Lehenga',
    subtitle: 'Crimson velvet with bullion zardozi, hand-cut sequins, and dabka flora',
    gender: 'women',
    category: 'lehengas',
    occasion: 'wedding',
    fabric: 'Pure Micro Velvet & Silk Brocade Ghera',
    weaveType: 'Hand-Cut Kalidar with Bullion Zardozi',
    originRegion: 'Old Delhi & Lucknow',
    weavesDays: 45,
    price: 92000,
    originalPrice: 110000,
    badge: 'Couture Bridal',
    rating: 5.0,
    reviewCount: 28,
    inStock: true,
    images: [
      gulabBridalLehengaImg,
      sherwaniZardoziDetailImg
    ],
    sizes: ['XS (34)', 'S (36)', 'M (38)', 'L (40)', 'XL (42)', 'Custom Made-to-Measure'],
    description: 'An architectural masterpiece of bridal craftsmanship. 16 voluminous kalis hand-embroidered by three senior karigars using antique copper dabka, seed pearls, and real zardozi salma. Accented with double dupattas—one heavy velvet shoulder drape and one ethereal organza veil.',
    artisan: {
      name: 'Ustad Sharafat Ali',
      region: 'Ballimaran, Chandni Chowk',
      generation: '5th Generation Zardozi Master',
      experienceYears: 42,
      specialty: 'Imperial Mughal Bullion Zari & French Knots',
      story: 'Bridal velvet must hold thousands of metallic stitches without puckering. It is a lifelong science of needle tension.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure heavy micro-velvet shell lined with soft silk satin',
      'Dual dupatta set: 1 handloom velvet trail drape + 1 gossamer organza head veil',
      'Full 5.5-meter circular flare with can-can structural petticoat',
      'Includes padded blouse with deep square back and latkan cords'
    ],
    craftTechnique: 'Stretched karchob wooden frame hand zardozi with bullion wire and needle-tucked pearl beads.',
    careInstructions: [
      'Professional specialized wedding couture dry clean only',
      'Store in provided cedarwood-lined luxury garment trunk'
    ],
    stylingTips: 'Style with uncut Polki diamond choker, emerald drop earrings, and a traditional matha patti.',
    reviews: [
      {
        id: 'r-20',
        author: 'Ananya Malhotra',
        location: 'New Delhi',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Truly royal! The zardozi work has breathtaking depth and isn’t stiff. The double dupatta made walking down the aisle unforgettable.',
        verified: true,
        outfitBought: 'Gulab Shahi Heritage Velvet Bridal Lehenga'
      }
    ]
  },
  // 3. Chanderi Anarkalis
  {
    id: 'vexo-w-11',
    title: 'Gota Patti Sage Green Chanderi Silk Anarkali',
    subtitle: 'Hand-dyed sheer Chanderi silk with authentic Jaipur marodi gota embellishment',
    gender: 'women',
    category: 'anarkalis',
    occasion: 'festive',
    fabric: 'Pure Silk Cotton Handloom Chanderi',
    weaveType: 'Handloom Eknal Weave with Gota Patti',
    originRegion: 'Chanderi, Madhya Pradesh & Jaipur',
    weavesDays: 16,
    price: 24500,
    originalPrice: 29000,
    badge: 'Artisanal Guild',
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    images: [
      chanderiGotaAnarkaliImg,
      chanderiDetailImg
    ],
    sizes: ['XS (34)', 'S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    description: 'Weightless poetry in motion. Woven from whisper-light translucent Chanderi silk yarn with delicate golden zari bootis throughout the 24-kali ghera. Adorned with heritage Jaipur Gota Patti ribbon work and mirror highlights along the hem.',
    artisan: {
      name: 'Mohini Devi & Group',
      region: 'Pranpur Village, Chanderi',
      generation: 'Women’s Handloom Weaving Collective',
      experienceYears: 22,
      specialty: 'Fine Count Silk Warp & Zari Extrusion',
      story: 'Real Chanderi has a cool airy touch that breathes through humid monsoon festivities without losing its crisp grace.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Original Chanderi silk-cotton yarn with characteristic sheer translucence',
      'Real hammered silver-gilt ribbon (Gota Patti) stitched by hand',
      'Includes 2.6m gossamer Chanderi dupatta with kiran fringe borders',
      'Tonal churidar in soft cotton silk with snug ankle stretch'
    ],
    craftTechnique: 'Pit loom weaving with hand-pinched and appliquéd metallic Gota ribbons.',
    careInstructions: [
      'Dry clean only',
      'Store folded in tissue inside breathable garment cover'
    ],
    stylingTips: 'Pair with antique chaandbali earrings and gold mojaris for Mehendi celebrations or day wedding rituals.',
    reviews: [
      {
        id: 'r-21',
        author: 'Rhea Sen',
        location: 'Kolkata, West Bengal',
        rating: 5,
        date: '3 weeks ago',
        comment: 'So soft and feather-light! The sage green shade with gold gota borders looks very regal in daytime photographs.',
        verified: true,
        outfitBought: 'Gota Patti Sage Green Chanderi Silk Anarkali'
      }
    ]
  },
  // 4. Raw Silk Bandhgalas
  {
    id: 'vexo-m-11',
    title: 'Midnight Royal Matka Raw Silk Bandhgala',
    subtitle: 'Bespoke Jodhpuri cut in slub-textured raw silk with antique brass crest buttons',
    gender: 'men',
    category: 'bandhgalas',
    occasion: 'festive',
    fabric: '100% Handspun Matka Raw Silk',
    weaveType: 'Textured Slub Weft Handloom',
    originRegion: 'Murshidabad & Jodhpur',
    weavesDays: 18,
    price: 31000,
    originalPrice: 36500,
    badge: 'Master Tailored',
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
    images: [
      rawSilkBandhgalaMenImg,
      tussarDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)', 'Custom Bespoke'],
    description: 'The pinnacle of masculine royalty. Handspun from indigenous Matka raw silk characterized by its rich, uneven textural slub and matte sheen. Tailored with a sharp high mandarin collar, canvassed chest construction, and custom hand-engraved regal lion crest buttons.',
    artisan: {
      name: 'Master Tailor Narendra Singh',
      region: 'Jodhpur, Rajasthan',
      generation: 'Royal Bespoke Atelier',
      experienceYears: 31,
      specialty: 'Hand-Canvassed Structured Bandhgalas',
      story: 'A Bandhgala must sit like armor yet move like silk. We hand-stitch the floating chest canvas so it molds to the body over time.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure organic Matka raw silk from West Bengal handlooms',
      'Floating horsehair canvas interlining for sharp shoulder structure',
      'Hand-cast brass shank buttons with vintage royal coat of arms',
      'Complete with bespoke tailored midnight charcoal trousers'
    ],
    craftTechnique: 'Savile Row inspired hand-canvassed tailoring applied to handloom Indian raw silk.',
    careInstructions: [
      'Dry clean only',
      'Always hang on shaped broad wooden hanger to preserve shoulder pad form'
    ],
    stylingTips: 'Pair with an antique pocket watch or enameled pocket square, paired with polished oxford shoes for formal sangeets.',
    reviews: [
      {
        id: 'r-22',
        author: 'Vikramaditya Rao',
        location: 'Jaipur, Rajasthan',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Exceptional tailoring! The raw silk slub has incredible texture and the midnight navy shade looks commanding.',
        verified: true,
        outfitBought: 'Midnight Royal Matka Raw Silk Bandhgala'
      }
    ]
  },
  // 5. Velvet Sherwanis
  {
    id: 'vexo-m-12',
    title: 'Emerald Crown Zardozi Royal Velvet Sherwani',
    subtitle: 'Deep emerald micro-velvet with bullion gold threadwork, paired with ivory stole',
    gender: 'men',
    category: 'sherwanis',
    occasion: 'wedding',
    fabric: 'Imperial Silk Micro Velvet & Raw Silk Churidar',
    weaveType: 'Needle Bullion & Dabka Zardozi',
    originRegion: 'Awadh & Varanasi',
    weavesDays: 38,
    price: 68000,
    originalPrice: 82000,
    badge: 'Royal Heirloom',
    rating: 5.0,
    reviewCount: 24,
    inStock: true,
    images: [
      velvetSherwaniMenImg,
      sherwaniZardoziDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)', 'Custom Made-to-Measure'],
    description: 'Bespoke regal groom attire. Crafted in rare deep emerald green imperial micro-velvet that absorbs and reflects ambient lights with subtle richness. Hand-embroidered along the placket, mandarin collar, and cuffs with antique gold bullion zardozi and kundan crystals.',
    artisan: {
      name: 'Mohammad Rais Ansari',
      region: 'Madanpura, Varanasi',
      generation: '4th Generation Weaver & Karigar',
      experienceYears: 34,
      specialty: 'Royal Sherwani Zari and Brocade Stoles',
      story: 'A groom’s sherwani is the crown of the family on his wedding day. Every button loop is hand-rolled and anchored.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      'Pure dense micro-velvet with rich jewel-toned luster',
      'Hand-crafted gold plated brooch & antique metallic buttons included',
      'Accompanied by a 2.75m pure woven tissue ivory and gold stole',
      'Tailored matching raw silk churidar trousers with buttoned calf hem'
    ],
    craftTechnique: 'Imperial Awadhi zardozi with raised metallic coils and seed crystal setting.',
    careInstructions: [
      'Specialist dry clean only',
      'Never press directly on velvet pile; steam from reverse side only'
    ],
    stylingTips: 'Wear with a multi-strand pearl kantha necklace, matching emerald safa turban, and velvet juttis.',
    reviews: [
      {
        id: 'r-23',
        author: 'Arjun Singhania',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        date: '1 week ago',
        comment: 'Ordered this for my royal palace wedding in Udaipur. The velvet quality and bullion embroidery made me feel like an emperor.',
        verified: true,
        outfitBought: 'Emerald Crown Zardozi Royal Velvet Sherwani'
      }
    ]
  },
  // 6. Tussar Kurta Sets
  {
    id: 'vexo-m-13',
    title: 'Mustard Amber Wild Tussar Silk Kurta Set',
    subtitle: 'Handloomed Bhagalpur tussar silk with tonal kantha placket and dhoti trousers',
    gender: 'men',
    category: 'kurta-sets',
    occasion: 'festive',
    fabric: '100% Pure Organic Wild Tussar Silk Handloom',
    weaveType: 'Natural Handloom Slub Weave',
    originRegion: 'Bhagalpur, Bihar',
    weavesDays: 14,
    price: 14800,
    originalPrice: 17500,
    badge: 'Artisanal Guild',
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    images: [
      tussarKurtaMustardImg,
      tussarDetailImg
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)', '46 (XXL)'],
    description: 'Celebrated for its rustic texture and golden glow. Woven from indigenous wild tussar silk cocoons in Bhagalpur. Hand-stitched with geometric Kantha needlework on the collar and hidden button placket, keeping the aesthetic minimal and heritage-rich.',
    artisan: {
      name: 'Rameshwar Tanti',
      region: 'Champanagar, Bhagalpur',
      generation: '3rd Generation Tussar Silk Weaver',
      experienceYears: 27,
      specialty: 'Organic Wild Silk Spinning & Slub Weaving',
      story: 'Tussar silk breathes with the weather. It keeps you cool during day rituals and comfortably warm under the evening sky.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    fabricDetails: [
      '100% Wild Tussar Silk Handloom certified under Handloom Mark',
      'Naturally rich mustard amber dye extracted from marigold and turmeric',
      'Includes tailored off-white raw silk blend dhoti trousers',
      'Concealed placket with natural shell buttons'
    ],
    craftTechnique: 'Manual hand-reeled tussar yarn woven on traditional pit looms with Kantha needlework.',
    careInstructions: [
      'Dry clean recommended; or gentle hand wash in cold water with silk detergent',
      'Dry in shade; warm iron on reverse'
    ],
    stylingTips: 'Pair with tan leather kolhapuris or mojris and a woven silk pocket square for festive rituals and Haldi functions.',
    reviews: [
      {
        id: 'r-24',
        author: 'Kunal Deshmukh',
        location: 'Pune, Maharashtra',
        rating: 5,
        date: '4 days ago',
        comment: 'Incredible texture and natural drape! The mustard shade has a warm golden undertone that looks extraordinary in daylight.',
        verified: true,
        outfitBought: 'Mustard Amber Wild Tussar Silk Kurta Set'
      }
    ]
  }
];

