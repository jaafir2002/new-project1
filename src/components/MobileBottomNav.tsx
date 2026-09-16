import React from 'react';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';
import { Gender } from '../types';

interface MobileBottomNavProps {
  cartCount: number;
  wishlistCount: number;
  activeGender: Gender;
  onSelectGender: (g: Gender) => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenStory: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  wishlistCount,
  onSelectGender,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenStory
}) => {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#E7DFD5] z-30 py-1.5 px-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around">
        {/* Curated Home */}
        <button
          onClick={() => {
            onSelectGender('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center p-1.5 text-[#4A3E39] hover:text-[#8E2827] transition-colors focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Atelier</span>
        </button>

        {/* Explore Heritage */}
        <button
          onClick={onOpenStory}
          className="flex flex-col items-center justify-center p-1.5 text-[#4A3E39] hover:text-[#8E2827] transition-colors focus:outline-none"
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Weavers</span>
        </button>

        {/* Quick Search */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center p-1.5 text-[#4A3E39] hover:text-[#8E2827] transition-colors focus:outline-none"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Search</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="relative flex flex-col items-center justify-center p-1.5 text-[#4A3E39] hover:text-[#8E2827] transition-colors focus:outline-none"
        >
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-2 bg-[#8E2827] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Saved</span>
        </button>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center p-1.5 text-[#8E2827] font-semibold focus:outline-none"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#241E1C]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8E2827] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium tracking-tight mt-0.5 text-[#241E1C]">Bag</span>
        </button>
      </div>
    </nav>
  );
};
