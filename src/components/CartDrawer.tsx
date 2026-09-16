import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Scissors, 
  Gift, 
  Tag, 
  ShieldCheck,
  Truck
} from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  discountCode: string;
  onApplyDiscount: (code: string) => boolean;
  discountAmount: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  discountCode,
  onApplyDiscount,
  discountAmount
}) => {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(Boolean(discountCode));
  const [giftNoteOpen, setGiftNoteOpen] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;

    const success = onApplyDiscount(promoInput.trim().toUpperCase());
    if (success) {
      setPromoSuccess(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try HERITAGE10 for 10% off.');
      setPromoSuccess(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md sm:max-w-lg bg-[#FAF7F2] h-full shadow-2xl flex flex-col border-l border-[#E7DFD5] animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E7DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8E2827]" />
            <h2 className="font-serif text-xl font-bold text-[#241E1C]">Your Handloom Bag</h2>
            <span className="bg-[#FAF7F2] text-[#8E2827] text-xs font-bold px-2 py-0.5 rounded-full border border-[#E7DFD5]">
              {items.length} {items.length === 1 ? 'outfit' : 'outfits'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F4EFEA] text-[#241E1C] transition-colors cursor-pointer"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Heirloom Packaging Progress Bar */}
        <div className="px-6 py-2.5 bg-[#F5EFEB] border-b border-[#E7DFD5] text-xs text-[#5D5049] flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#3F4E3E] shrink-0" />
          <span>Complimentary Insured Dispatch & Silk Muslin Garment Box Included</span>
        </div>

        {/* Bag Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] flex items-center justify-center mx-auto text-[#8C7A6B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#241E1C]">Your Bag is Empty</h3>
              <p className="text-xs text-[#78695E] max-w-xs mx-auto">
                Explore our handwoven sarees, royal bandhgalas, and bespoke bridal lehengas crafted by master weavers.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#8E2827] text-white text-xs font-semibold hover:bg-[#782221] transition-colors"
              >
                Explore Handlooms
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-white rounded-2xl border border-[#E7DFD5] flex gap-3 shadow-2xs"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    className="w-20 h-24 rounded-xl object-cover border border-[#E7DFD5] shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm font-bold text-[#241E1C] line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#8C7A6B] hover:text-[#8E2827] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#78695E]">
                        Size: <strong className="text-[#241E1C]">{item.size}</strong>
                      </p>

                      {item.customTailoring && (
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-[#8E2827] bg-[#8E2827]/10 px-2 py-0.5 rounded-md max-w-fit">
                          <Scissors className="w-3 h-3" />
                          <span>Custom Tailoring Requested</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E7DFD5] rounded-lg bg-[#FAF7F2]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-[#4A3E39] hover:text-[#8E2827] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#241E1C]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-[#4A3E39] hover:text-[#8E2827] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#241E1C]">
                        {formatPrice(item.product.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon / Discount Box */}
              <div className="p-3 bg-white rounded-xl border border-[#E7DFD5] space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#241E1C]">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#8E2827]" />
                    <span>Artisan Promo Code</span>
                  </span>
                  {!promoSuccess && (
                    <button
                      type="button"
                      onClick={() => setPromoInput('HERITAGE10')}
                      className="text-[10px] text-[#8E2827] underline cursor-pointer"
                    >
                      Use HERITAGE10 (10% Off)
                    </button>
                  )}
                </div>

                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 text-xs px-3 py-1.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-lg uppercase tracking-wider focus:outline-none focus:border-[#8E2827]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#241E1C] hover:bg-[#8E2827] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {promoSuccess && (
                  <p className="text-[11px] text-[#3F4E3E] font-medium">
                    ✓ HERITAGE10 applied: 10% artisan discount applied to order.
                  </p>
                )}
                {promoError && (
                  <p className="text-[11px] text-[#8E2827]">{promoError}</p>
                )}
              </div>

              {/* Gift Note Toggle */}
              <div className="p-3 bg-white rounded-xl border border-[#E7DFD5]">
                <div 
                  onClick={() => setGiftNoteOpen(!giftNoteOpen)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#241E1C]">
                    <Gift className="w-3.5 h-3.5 text-[#D9822B]" />
                    <span>Add Handwritten Calligraphy Gift Note</span>
                  </span>
                  <span className="text-xs text-[#8E2827]">{giftNoteOpen ? '−' : '+'}</span>
                </div>

                {giftNoteOpen && (
                  <div className="pt-2">
                    <textarea
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      placeholder="Write your wedding or festive message to be penned on parchment..."
                      rows={2}
                      className="w-full text-xs p-2 bg-[#FAF7F2] border border-[#E7DFD5] rounded-lg focus:outline-none focus:border-[#8E2827]"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E7DFD5] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#78695E]">
                <span>Artisan Subtotal</span>
                <span>{formatPrice(subtotal, currency)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#3F4E3E] font-medium">
                  <span>Heritage Discount</span>
                  <span>−{formatPrice(discountAmount, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#78695E]">
                <span>Insured Handloom Packaging</span>
                <span className="text-[#3F4E3E] font-semibold">FREE</span>
              </div>

              <div className="flex justify-between text-base font-bold text-[#241E1C] pt-2 border-t border-[#E7DFD5]">
                <span>Total Amount</span>
                <span>{formatPrice(finalTotal, currency)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#8E2827] hover:bg-[#782221] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Proceed to Seamless Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7A6B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3F4E3E]" />
              <span>Safe 256-bit Encrypted Checkout · Silk Mark Certified</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
