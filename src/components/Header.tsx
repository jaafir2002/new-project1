import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Compass,
  BookOpen,
  Users,
  ShieldCheck,
  Check,
  Crown,
  ChevronLeft,
  ChevronRight,
  BadgeCheck
} from 'lucide-react';
import { Currency, Gender } from '../types';
import { CURRENCY_RATES } from '../utils/currency';
import { VexoLogo } from './VexoLogo';
import { BouncingNavButton } from './BouncingNavButton';

const AUTHENTIC_ANNOUNCEMENTS = [
  {
    tag: 'GI-TAGGED HANDLOOMS',
    title: 'Pure Pit-Loom Weaves of Varanasi, Kanchipuram & Chanderi',
    subtext: 'Woven on hereditary wooden looms · 100% natural mulberry & katan silks'
  },
  {
    tag: 'SILK MARK INDIA CERTIFIED',
    title: 'Central Silk Board Lab Tested · Real Electroplated Gold & Silver Zari',
    subtext: 'Zero polyester or powerloom compromises · Guaranteed generational heirloom quality'
  },
  {
    tag: 'DIRECT WEAVER PROSPERITY',
    title: 'Fair Living Wages Transferred Directly to 140+ Hereditary Karigar Families',
    subtext: 'Eliminating intermediaries · Empowering artisan clusters in Awadh & Pranpur'
  },
  {
    tag: 'HAUTE ATELIER SERVICES',
    title: 'Complimentary Bespoke Blouse Tailoring & Insured Worldwide White-Glove Shipping',
    subtext: 'Personal darzi video consultations · Real-time garment customization'
  }
];

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenStory: () => void;
  onOpenFabricGuide: () => void;
  activeGender: Gender;
  onSelectGender: (g: Gender) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectQuickCategory?: (gender: Gender, category: string) => void;
  onOpenMasterKarigars?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  currency,
  onCurrencyChange,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenStory,
  onOpenFabricGuide,
  activeGender,
  onSelectGender,
  activeCategory,
  onSelectCategory,
  onSelectQuickCategory,
  onOpenMasterKarigars
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto cycle authentic announcements every 4.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % AUTHENTIC_ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev + 1) % AUTHENTIC_ANNOUNCEMENTS.length);
  };

  const prevAnnouncement = () => {
    setAnnouncementIndex((prev) => (prev - 1 + AUTHENTIC_ANNOUNCEMENTS.length) % AUTHENTIC_ANNOUNCEMENTS.length);
  };

  const currentAnnouncement = AUTHENTIC_ANNOUNCEMENTS[announcementIndex];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-all shadow-[0_4px_25px_rgba(26,20,18,0.03)]">
      {/* Top Luxury Authentic Announcement Bar ("First Bar") */}
      <div 
        className="bg-[#120E0C] text-[#FAF7F2] py-2 px-3 sm:px-6 border-b border-[#C89D56]/25 select-none relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 min-h-[30px]">
          
          {/* Left: Authentic Government & Guild Verification Pill */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenFabricGuide}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1F1715] hover:bg-[#2A1F1C] border border-[#C89D56]/40 text-[#E5C178] text-[10px] font-semibold tracking-wider uppercase transition-colors cursor-pointer group shadow-2xs"
              title="Click to view Silk Mark & Central Silk Board Authenticity Guide"
            >
              <BadgeCheck className="w-3.5 h-3.5 text-[#C89D56] group-hover:scale-110 transition-transform" />
              <span>Silk Mark India™ Certified</span>
            </button>
            <span className="text-[#C89D56]/40 text-[10px]">✦</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#A8988B] font-medium">
              100% Pit-Loom Artisanal
            </span>
          </div>

          {/* Center: Dynamic Authentic Craft Assurance Carousel */}
          <div className="flex-1 flex items-center justify-center gap-2 overflow-hidden px-1">
            <button 
              onClick={prevAnnouncement}
              className="text-[#8C7A6B] hover:text-[#E5C178] p-0.5 rounded transition-colors hidden sm:inline-flex cursor-pointer"
              aria-label="Previous authentic guarantee"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2 text-center truncate max-w-full">
              <span className="hidden md:inline-block px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase bg-[#C89D56]/20 text-[#E5C178] border border-[#C89D56]/40 shrink-0">
                {currentAnnouncement.tag}
              </span>
              <p className="text-[11px] sm:text-xs text-[#EFE8DE] font-medium tracking-wide truncate transition-opacity duration-300">
                <span className="text-[#E5C178] font-semibold mr-1">✦</span>
                {currentAnnouncement.title}
              </p>
            </div>

            <button 
              onClick={nextAnnouncement}
              className="text-[#8C7A6B] hover:text-[#E5C178] p-0.5 rounded transition-colors hidden sm:inline-flex cursor-pointer"
              aria-label="Next authentic guarantee"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Micro Carousel Progress Dots */}
            <div className="hidden xl:flex items-center gap-1 ml-1">
              {AUTHENTIC_ANNOUNCEMENTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setAnnouncementIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === announcementIndex 
                      ? 'w-4 bg-[#C89D56]' 
                      : 'bg-[#4A3E39] hover:bg-[#8C7A6B]'
                  }`}
                  aria-label={`Go to announcement ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Authentic Direct Verification Triggers */}
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <button
              onClick={onOpenFabricGuide}
              className="hidden sm:inline-flex items-center gap-1.5 text-[#C89D56] hover:text-[#F3DC9B] transition-colors cursor-pointer font-medium tracking-wide"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="underline underline-offset-4 decoration-[#C89D56]/40 hover:decoration-[#C89D56]">
                Verify Purity
              </span>
            </button>

            <span className="text-[#C89D56]/30 hidden sm:inline">|</span>

            <button
              onClick={onOpenStory}
              className="hidden md:inline-flex items-center gap-1.5 text-[#D5C8BA] hover:text-white transition-colors cursor-pointer font-medium tracking-wide"
            >
              <Users className="w-3.5 h-3.5 text-[#C89D56]" />
              <span>Weaver Guilds</span>
            </button>

            <span className="text-[#C89D56]/30 hidden md:inline">|</span>

            <span className="text-[10px] uppercase tracking-[0.12em] text-[#C5B7A8] font-medium hidden lg:inline">
              ✈ Worldwide White-Glove
            </span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Mobile Hamburger & Desktop Quick Categories */}
          <div className="flex items-center gap-4">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-[#1A1412] hover:text-[#C89D56] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Gender Quick Switches */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#F5EFEB] p-1 rounded-full border border-[#D9C4A5]/60 shadow-2xs">
              <button
                onClick={() => onSelectGender('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeGender === 'all'
                    ? 'bg-[#1A1412] text-[#FAF7F2] shadow-sm'
                    : 'text-[#655750] hover:text-[#1A1412]'
                }`}
              >
                All Curations
              </button>
              <button
                onClick={() => onSelectGender('women')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeGender === 'women'
                    ? 'bg-[#7A1D1D] text-white shadow-sm border border-[#C89D56]/40'
                    : 'text-[#655750] hover:text-[#7A1D1D]'
                }`}
              >
                Women’s Haute
              </button>
              <button
                onClick={() => onSelectGender('men')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeGender === 'men'
                    ? 'bg-[#1A1412] text-[#E5C178] shadow-sm border border-[#C89D56]/40'
                    : 'text-[#655750] hover:text-[#C89D56]'
                }`}
              >
                Men’s Heritage
              </button>
            </nav>
          </div>

          {/* Center: Prestige Brand Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onSelectGender('all');
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer"
            >
              <VexoLogo variant="header" showTagline={true} />
            </a>
          </div>

          {/* Right: Search, Currency, Wishlist, Bag */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <button
              id="search-open-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#1A1412] hover:text-[#C89D56] hover:bg-[#F5EFEB] rounded-full transition-all border border-transparent hover:border-[#C89D56]/30 cursor-pointer"
              aria-label="Search Collection"
              title="Search Atelier"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1A1412] hover:text-[#C89D56] bg-[#F5EFEB] border border-[#D9C4A5]/70 rounded-full transition-all cursor-pointer shadow-2xs hover:border-[#C89D56]"
                aria-label="Select Currency"
              >
                <span>{currency} ({CURRENCY_RATES[currency].symbol})</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C89D56]" />
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-[#FAF8F5] rounded-xl shadow-xl border border-[#D9C4A5] py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  <div className="px-3 py-1 border-b border-[#E7DFD5] text-[10px] uppercase font-bold tracking-wider text-[#8C7A6B]">
                    Select Currency
                  </div>
                  {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        currency === curr 
                          ? 'bg-[#1A1412] text-[#E5C178] font-semibold' 
                          : 'text-[#4A3E39] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      <span>{curr} ({CURRENCY_RATES[curr].symbol})</span>
                      {currency === curr && <Check className="w-3.5 h-3.5 text-[#C89D56]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              id="wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2 text-[#1A1412] hover:text-[#C89D56] hover:bg-[#F5EFEB] rounded-full transition-all border border-transparent hover:border-[#C89D56]/30 cursor-pointer"
              aria-label="View Wishlist"
              title="Saved Keepsakes"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#7A1D1D] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FAF8F5] shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag / Checkout Drawer Trigger */}
            <button
              id="cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#1A1412] hover:bg-[#2A201D] text-[#FAF7F2] rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_2px_10px_rgba(26,20,18,0.2)] border border-[#C89D56]/50 hover:border-[#C89D56] cursor-pointer"
              aria-label="View Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#E5C178]" />
              <span className="hidden sm:inline">Atelier Bag</span>
              <span className="bg-[#C89D56] text-[#1A1412] px-1.5 py-0.2 rounded-full text-[10px] font-bold min-w-[18px] text-center shadow-xs">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Secondary Editorial Sub-Navigation (Accessible across all screens: Desktop, Tablet, and Mobile) */}
        <div className="flex items-center justify-start xl:justify-center gap-1.5 sm:gap-2 lg:gap-3 py-2 px-2 sm:px-6 overflow-x-auto no-scrollbar scroll-smooth border-t border-[#D9C4A5]/40 text-xs tracking-wider uppercase font-semibold text-[#5D5049] bg-[#FAF8F5]/95">
          {/* 1. Banarasi & Kanjivaram Sarees */}
          <BouncingNavButton 
            id="nav-sarees"
            layout="pill"
            isActive={activeGender === 'women' && activeCategory === 'sarees'}
            activeVariant="ruby"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('women', 'sarees');
              } else {
                onSelectGender('women');
                onSelectCategory('sarees');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Banarasi & Kanjivaram Sarees
          </BouncingNavButton>

          {/* 2. Bridal Lehengas */}
          <BouncingNavButton 
            id="nav-lehengas"
            layout="pill"
            isActive={activeGender === 'women' && activeCategory === 'lehengas'}
            activeVariant="ruby"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('women', 'lehengas');
              } else {
                onSelectGender('women');
                onSelectCategory('lehengas');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Bridal Lehengas
          </BouncingNavButton>

          {/* 3. Chanderi Anarkalis */}
          <BouncingNavButton 
            id="nav-anarkalis"
            layout="pill"
            isActive={activeGender === 'women' && activeCategory === 'anarkalis'}
            activeVariant="ruby"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('women', 'anarkalis');
              } else {
                onSelectGender('women');
                onSelectCategory('anarkalis');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Chanderi Anarkalis
          </BouncingNavButton>

          {/* 4. Raw Silk Bandhgalas */}
          <BouncingNavButton 
            id="nav-bandhgalas"
            layout="pill"
            isActive={activeGender === 'men' && activeCategory === 'bandhgalas'}
            activeVariant="noir"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('men', 'bandhgalas');
              } else {
                onSelectGender('men');
                onSelectCategory('bandhgalas');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Raw Silk Bandhgalas
          </BouncingNavButton>

          {/* 5. Velvet Sherwanis */}
          <BouncingNavButton 
            id="nav-sherwanis"
            layout="pill"
            isActive={activeGender === 'men' && activeCategory === 'sherwanis'}
            activeVariant="noir"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('men', 'sherwanis');
              } else {
                onSelectGender('men');
                onSelectCategory('sherwanis');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Velvet Sherwanis
          </BouncingNavButton>

          {/* 6. Tussar Kurta Sets */}
          <BouncingNavButton 
            id="nav-kurta-sets"
            layout="pill"
            isActive={activeGender === 'men' && activeCategory === 'kurta-sets'}
            activeVariant="noir"
            onClick={() => {
              if (onSelectQuickCategory) {
                onSelectQuickCategory('men', 'kurta-sets');
              } else {
                onSelectGender('men');
                onSelectCategory('kurta-sets');
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Tussar Kurta Sets
          </BouncingNavButton>

          <span className="h-4 w-px bg-[#D9C4A5]/70 shrink-0 mx-1" />

          {/* 7. Master Karigars */}
          <BouncingNavButton 
            id="nav-master-karigars"
            layout="pill"
            variant="karigar"
            icon={<Users className="w-3.5 h-3.5 text-[#C89D56]" />}
            onClick={() => {
              if (onOpenMasterKarigars) {
                onOpenMasterKarigars();
              } else {
                onOpenStory();
              }
            }}
            title="Explore hereditary master weavers of Varanasi & Kanchipuram"
          >
            Master Karigars
          </BouncingNavButton>

          {/* 8. Silk Mark Guide */}
          <BouncingNavButton 
            id="nav-silk-mark-guide"
            layout="pill"
            variant="guide"
            icon={<BookOpen className="w-3.5 h-3.5 text-[#C89D56]" />}
            onClick={onOpenFabricGuide}
            title="Verify 100% natural silk and handloom authenticity"
          >
            Silk Mark Guide
          </BouncingNavButton>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#E7DFD5] shadow-xl max-h-[85vh] overflow-y-auto z-50 p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            {/* Quick Access to the 8 Core Collections & Guides */}
            <div className="bg-[#FAF8F5] p-3 rounded-2xl border border-[#C89D56]/30">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#7A1D1D] font-bold mb-2.5 flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#C89D56]" />
                <span>Haute Collections & Artisan Guides</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'women' && activeCategory === 'sarees'}
                  activeVariant="ruby"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('women', 'sarees');
                    } else {
                      onSelectGender('women');
                      onSelectCategory('sarees');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Banarasi & Kanjivaram Sarees
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'women' && activeCategory === 'lehengas'}
                  activeVariant="ruby"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('women', 'lehengas');
                    } else {
                      onSelectGender('women');
                      onSelectCategory('lehengas');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Bridal Lehengas
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'women' && activeCategory === 'anarkalis'}
                  activeVariant="ruby"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('women', 'anarkalis');
                    } else {
                      onSelectGender('women');
                      onSelectCategory('anarkalis');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Chanderi Anarkalis
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'men' && activeCategory === 'bandhgalas'}
                  activeVariant="noir"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('men', 'bandhgalas');
                    } else {
                      onSelectGender('men');
                      onSelectCategory('bandhgalas');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Raw Silk Bandhgalas
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'men' && activeCategory === 'sherwanis'}
                  activeVariant="noir"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('men', 'sherwanis');
                    } else {
                      onSelectGender('men');
                      onSelectCategory('sherwanis');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Velvet Sherwanis
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  isActive={activeGender === 'men' && activeCategory === 'kurta-sets'}
                  activeVariant="noir"
                  onClick={() => {
                    if (onSelectQuickCategory) {
                      onSelectQuickCategory('men', 'kurta-sets');
                    } else {
                      onSelectGender('men');
                      onSelectCategory('kurta-sets');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Tussar Kurta Sets
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  variant="karigar"
                  icon={<Users className="w-3.5 h-3.5 text-[#C89D56]" />}
                  onClick={() => {
                    if (onOpenMasterKarigars) {
                      onOpenMasterKarigars();
                    } else {
                      onOpenStory();
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  Master Karigars
                </BouncingNavButton>
                <BouncingNavButton 
                  layout="block"
                  variant="guide"
                  icon={<BookOpen className="w-3.5 h-3.5 text-[#C89D56]" />}
                  onClick={() => {
                    onOpenFabricGuide();
                    setMobileMenuOpen(false);
                  }}
                >
                  Silk Mark Guide
                </BouncingNavButton>
              </div>
            </div>
            {/* Gender Switch for Mobile */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2">Shop By Realm</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => { onSelectGender('all'); setMobileMenuOpen(false); }}
                  className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeGender === 'all'
                      ? 'bg-[#241E1C] text-white'
                      : 'bg-[#F4EFEA] text-[#4A3E39] hover:bg-[#EFE8DE]'
                  }`}
                >
                  All Curations
                </button>
                <button
                  onClick={() => { onSelectGender('women'); setMobileMenuOpen(false); }}
                  className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeGender === 'women'
                      ? 'bg-[#8E2827] text-white'
                      : 'bg-[#F4EFEA] text-[#4A3E39] hover:bg-[#EFE8DE]'
                  }`}
                >
                  Women
                </button>
                <button
                  onClick={() => { onSelectGender('men'); setMobileMenuOpen(false); }}
                  className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeGender === 'men'
                      ? 'bg-[#8E2827] text-white'
                      : 'bg-[#F4EFEA] text-[#4A3E39] hover:bg-[#EFE8DE]'
                  }`}
                >
                  Men
                </button>
              </div>
            </div>

            {/* Women's Categories */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2">Women’s Ethnic Wear</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button 
                  onClick={() => { onSelectGender('women'); onSelectCategory('sarees'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Pure Silk Sarees
                </button>
                <button 
                  onClick={() => { onSelectGender('women'); onSelectCategory('lehengas'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Bridal Lehengas
                </button>
                <button 
                  onClick={() => { onSelectGender('women'); onSelectCategory('anarkalis'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Chanderi Anarkalis
                </button>
                <button 
                  onClick={() => { onSelectGender('women'); onSelectCategory('kurta-sets'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Chikankari Sets
                </button>
              </div>
            </div>

            {/* Men's Categories */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2">Men’s Heritage Wear</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button 
                  onClick={() => { onSelectGender('men'); onSelectCategory('bandhgalas'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Raw Silk Bandhgalas
                </button>
                <button 
                  onClick={() => { onSelectGender('men'); onSelectCategory('sherwanis'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Velvet Sherwanis
                </button>
                <button 
                  onClick={() => { onSelectGender('men'); onSelectCategory('kurta-sets'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Tussar Kurta Pajama
                </button>
                <button 
                  onClick={() => { onSelectGender('men'); onSelectCategory('nehru-jackets'); setMobileMenuOpen(false); }}
                  className="text-left px-3 py-2 bg-white rounded-lg border border-[#E7DFD5] hover:border-[#8E2827]"
                >
                  Brocade Nehru Bundis
                </button>
              </div>
            </div>

            {/* Brand Story & Fabric Guide Quick Links */}
            <div className="pt-2 border-t border-[#E7DFD5] flex flex-col gap-2">
              <button
                onClick={() => { onOpenStory(); setMobileMenuOpen(false); }}
                className="flex items-center justify-between p-3 bg-[#F4EFEA] rounded-xl text-xs font-semibold text-[#241E1C]"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#8E2827]" />
                  <span>The Story of Vexo & 140+ Weavers</span>
                </div>
                <span className="text-[#8E2827]">Explore →</span>
              </button>
              <button
                onClick={() => { onOpenFabricGuide(); setMobileMenuOpen(false); }}
                className="flex items-center justify-between p-3 bg-[#F4EFEA] rounded-xl text-xs font-semibold text-[#241E1C]"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#D9822B]" />
                  <span>Pure Fabric & Silk Mark Guide</span>
                </div>
                <span className="text-[#D9822B]">Read →</span>
              </button>
            </div>

            {/* Currency switcher in mobile menu */}
            <div className="pt-2 border-t border-[#E7DFD5]">
              <p className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold mb-2">Select Currency</p>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => { onCurrencyChange(curr); setMobileMenuOpen(false); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                      currency === curr
                        ? 'bg-[#241E1C] text-white border-[#241E1C]'
                        : 'bg-white text-[#4A3E39] border-[#E7DFD5]'
                    }`}
                  >
                    {curr} ({CURRENCY_RATES[curr].symbol})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
