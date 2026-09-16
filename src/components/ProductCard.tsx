import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Clock, MapPin, Check, Sparkles } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  onQuickAdd
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [showSizePicker, setShowSizePicker] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes.length > 1 && !showSizePicker) {
      setShowSizePicker(true);
      return;
    }

    onQuickAdd(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      setShowSizePicker(false);
    }, 1200);
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative bg-white rounded-2xl border border-[#E7DFD5] hover:border-[#C89D56]/70 overflow-hidden shadow-xs hover:shadow-[0_12px_32px_rgba(26,20,18,0.08)] transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4EFEA]">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-[#7A1D1D] text-[#FAF7F2] border border-[#C89D56]/40 shadow-xs">
              {product.badge}
            </span>
          )}
          <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#1A1412]/80 backdrop-blur-xs text-[#E5C178] border border-[#C89D56]/30">
            {product.fabric.split(' ')[0]} Silk
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute bottom-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm cursor-pointer ${
            isWishlisted
              ? 'bg-[#7A1D1D] text-white border border-[#C89D56]/40'
              : 'bg-white/90 text-[#1A1412] hover:bg-white hover:text-[#7A1D1D] hover:border-[#C89D56]/40'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Loom Days & Provenance Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1412]/85 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium border border-[#C89D56]/30">
          <Clock className="w-3 h-3 text-[#C89D56]" />
          <span>{product.weavesDays} days handloom</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white space-y-3">
        <div>
          {/* Artisan Credit & Origin */}
          <div className="flex items-center justify-between text-[11px] text-[#8C7A6B] font-medium mb-1">
            <span className="flex items-center gap-1 text-[#655750]">
              <MapPin className="w-3 h-3 text-[#C89D56]" />
              {product.originRegion.split(',')[0]}
            </span>
            <span className="flex items-center gap-1 text-[#7A1D1D] font-semibold">
              <Star className="w-3 h-3 fill-current text-[#C89D56]" />
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-semibold text-[#1A1412] leading-snug group-hover:text-[#7A1D1D] transition-colors line-clamp-1">
            {product.title}
          </h3>

          {/* Subtitle / Weave Type */}
          <p className="text-xs text-[#6B5E57] line-clamp-1 mt-0.5 font-normal">
            {product.subtitle}
          </p>
        </div>

        {/* Artisan Hand signature */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#F5EFEB]">
          <img 
            src={product.artisan.avatar} 
            alt={product.artisan.name}
            className="w-6 h-6 rounded-full object-cover border border-[#C89D56]/50"
          />
          <div className="text-[11px] text-[#78695E] truncate">
            Crafted by <strong className="text-[#1A1412] font-semibold">{product.artisan.name}</strong>
          </div>
        </div>

        {/* Size Selection Drawer / Pill Popover if trigger clicked */}
        {showSizePicker && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 bg-[#FAF8F5] rounded-xl border border-[#D9C4A5] space-y-2 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center justify-between text-[10px] text-[#78695E] font-semibold uppercase tracking-wider">
              <span>Choose Size:</span>
              <button 
                onClick={() => setShowSizePicker(false)}
                className="text-[#7A1D1D] hover:underline cursor-pointer"
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-2 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-[#1A1412] text-[#E5C178] border border-[#C89D56]/50'
                      : 'bg-white border border-[#D9C4A5] text-[#1A1412] hover:border-[#7A1D1D]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price and Add to Bag Button */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-[#1A1412] font-serif tracking-tight">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#9E8E81] line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#78695E] font-medium block">
              Inclusive of insured white-glove packaging
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              addedAnimation
                ? 'bg-[#1A1412] text-[#E5C178] border border-[#C89D56]'
                : 'bg-[#FAF8F5] hover:bg-[#1A1412] text-[#1A1412] hover:text-[#E5C178] border border-[#D9C4A5] hover:border-[#C89D56]'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4 text-[#C89D56]" />
                <span className="hidden sm:inline">In Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
