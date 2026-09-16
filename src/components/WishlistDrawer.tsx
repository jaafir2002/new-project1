import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: Product[];
  currency: Currency;
  onToggleWishlist: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onMoveToBag: (p: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  currency,
  onToggleWishlist,
  onSelectProduct,
  onMoveToBag
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col border-l border-[#E7DFD5] animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E7DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#8E2827] fill-current" />
            <h2 className="font-serif text-xl font-bold text-[#241E1C]">Saved Handlooms</h2>
            <span className="bg-[#FAF7F2] text-[#8E2827] text-xs font-bold px-2 py-0.5 rounded-full border border-[#E7DFD5]">
              {wishlistedProducts.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F4EFEA] text-[#241E1C] transition-colors cursor-pointer"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] flex items-center justify-center mx-auto text-[#8C7A6B]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#241E1C]">Your Wishlist is Empty</h3>
              <p className="text-xs text-[#78695E] max-w-xs mx-auto">
                Save your favorite handloomed sarees, bridal lehengas, and royal bandhgalas to review anytime.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 bg-white rounded-2xl border border-[#E7DFD5] flex gap-3 shadow-2xs"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-18 h-22 rounded-xl object-cover border border-[#E7DFD5] shrink-0 cursor-pointer"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="font-serif text-sm font-bold text-[#241E1C] hover:text-[#8E2827] cursor-pointer line-clamp-1"
                        >
                          {product.title}
                        </h4>
                        <button
                          onClick={() => onToggleWishlist(product.id)}
                          className="text-[#8C7A6B] hover:text-[#8E2827] p-1"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#78695E]">{product.fabric}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-[#241E1C]">
                        {formatPrice(product.price, currency)}
                      </span>

                      <button
                        onClick={() => {
                          onMoveToBag(product);
                          onToggleWishlist(product.id);
                        }}
                        className="px-3 py-1.5 bg-[#8E2827] hover:bg-[#782221] text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
