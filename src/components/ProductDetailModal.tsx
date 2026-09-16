import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Scissors, 
  Sparkles, 
  Truck, 
  RotateCcw, 
  Check, 
  ChevronRight, 
  Info 
} from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, customTailoring: boolean, tailoringNotes: string) => void;
  onDirectCheckout: (product: Product, size: string, customTailoring: boolean, tailoringNotes: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onClose,
  onAddToCart,
  onDirectCheckout
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [customTailoring, setCustomTailoring] = useState(false);
  const [tailoringNotes, setTailoringNotes] = useState('');
  const [activeTab, setActiveTab] = useState<'craft' | 'fabric' | 'care' | 'reviews'>('craft');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, customTailoring, tailoringNotes);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1500);
  };

  const handleBuyNow = () => {
    onDirectCheckout(product, selectedSize, customTailoring, tailoringNotes);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-3xl border border-[#E7DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8E2827]">
              {product.gender === 'women' ? "Women's Ethnic Atelier" : "Men's Heritage Collection"}
            </span>
            <span className="text-[#8C7A6B]">·</span>
            <span className="text-xs text-[#78695E] font-medium">{product.originRegion}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#241E1C] transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F4EFEA] border border-[#E7DFD5] shadow-xs">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#8E2827] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all shadow-xs ${
                    isWishlisted
                      ? 'bg-[#8E2827] text-white'
                      : 'bg-white/90 text-[#4A3E39] hover:text-[#8E2827]'
                  }`}
                  aria-label="Toggle Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-xs text-white text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D9822B]" />
                    <span>{product.weavesDays} days manual handloom</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails if multiple images exist */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#8E2827] ring-2 ring-[#8E2827]/30' : 'border-[#E7DFD5] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Verified Artisan Spotlight Box */}
              <div className="p-4 bg-[#F4EFEA] rounded-2xl border border-[#E7DFD5] flex items-start gap-4">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#8E2827] shadow-xs"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-base font-bold text-[#241E1C]">
                      {product.artisan.name}
                    </h4>
                    <span className="text-[10px] bg-[#8E2827]/15 text-[#8E2827] font-semibold px-2 py-0.5 rounded-full">
                      {product.artisan.generation}
                    </span>
                  </div>
                  <p className="text-xs text-[#78695E] font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8E2827]" />
                    <span>{product.artisan.region} · {product.artisan.experienceYears} Years Crafting</span>
                  </p>
                  <p className="text-xs text-[#4A3E39] italic pt-1">
                    "{product.artisan.story}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Garment Details & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-[#D9822B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#241E1C]">{product.rating}</span>
                  <span className="text-xs text-[#8C7A6B]">({product.reviewCount} verified reviews)</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1C] leading-tight">
                  {product.title}
                </h1>
                <p className="text-sm text-[#78695E] mt-1 font-medium">{product.subtitle}</p>
              </div>

              {/* Pricing Box */}
              <div className="p-4 bg-white rounded-2xl border border-[#E7DFD5] flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#241E1C]">
                      {formatPrice(product.price, currency)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-[#8C7A6B] line-through">
                        {formatPrice(product.originalPrice, currency)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#3F4E3E] font-medium">
                    Fair-trade pricing · 100% direct remuneration to weaving collective
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#3F4E3E]/10 text-[#3F4E3E] text-xs font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    In Stock on Loom
                  </span>
                </div>
              </div>

              {/* Sizing Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#241E1C]">
                    Select Size & Fit
                  </label>
                  <span className="text-xs text-[#8E2827] font-semibold underline underline-offset-2 cursor-pointer">
                    View Indian Measurement Chart
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        selectedSize === sz
                          ? 'bg-[#8E2827] text-white border-[#8E2827] shadow-xs'
                          : 'bg-white text-[#241E1C] border-[#E7DFD5] hover:border-[#8E2827]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Tailoring Assistance Toggle */}
              <div className="p-4 bg-[#F4EFEA] rounded-2xl border border-[#E7DFD5] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#8E2827]" />
                    <span className="text-xs font-bold text-[#241E1C]">
                      Complimentary Master Tailoring & Sleeve/Blouse Customization
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={customTailoring}
                    onChange={(e) => setCustomTailoring(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8E2827] accent-[#8E2827] cursor-pointer"
                  />
                </div>
                {customTailoring && (
                  <div className="space-y-2 pt-2 border-t border-[#E7DFD5]/60 animate-in fade-in duration-150">
                    <p className="text-xs text-[#6B5E57]">
                      Provide your bust/chest, waist, hip, or sleeve length preferences. Our in-house master darzi will tailor before handloom dispatch:
                    </p>
                    <textarea
                      value={tailoringNotes}
                      onChange={(e) => setTailoringNotes(e.target.value)}
                      placeholder="e.g., Chest: 38 inches, Blouse length: 15 inches, Short elbow-length sleeves with back dori ties..."
                      rows={2}
                      className="w-full text-xs p-2.5 rounded-xl border border-[#D8CEBF] bg-white text-[#241E1C] focus:outline-none focus:border-[#8E2827]"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons: Add to Bag & Instant Checkout */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAdd}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer border ${
                      addedAnimation
                        ? 'bg-[#3F4E3E] text-white border-[#3F4E3E]'
                        : 'bg-[#FAF7F2] hover:bg-[#F4EFEA] text-[#241E1C] border-[#241E1C]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#8E2827] hover:bg-[#782221] text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Instant Checkout</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#78695E] pt-2 border-t border-[#E7DFD5]">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#3F4E3E]" />
                    <span>Free insured express transit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-[#8E2827]" />
                    <span>7-Day handloom inspection return</span>
                  </div>
                </div>
              </div>

              {/* Tabbed In-Depth Information */}
              <div className="pt-4 border-t border-[#E7DFD5]">
                <div className="flex items-center gap-4 border-b border-[#E7DFD5] pb-2 text-xs font-semibold text-[#8C7A6B]">
                  <button
                    onClick={() => setActiveTab('craft')}
                    className={`pb-1 transition-colors cursor-pointer ${
                      activeTab === 'craft' ? 'text-[#8E2827] border-b-2 border-[#8E2827]' : 'hover:text-[#241E1C]'
                    }`}
                  >
                    Craft & Lore
                  </button>
                  <button
                    onClick={() => setActiveTab('fabric')}
                    className={`pb-1 transition-colors cursor-pointer ${
                      activeTab === 'fabric' ? 'text-[#8E2827] border-b-2 border-[#8E2827]' : 'hover:text-[#241E1C]'
                    }`}
                  >
                    Fabric Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('care')}
                    className={`pb-1 transition-colors cursor-pointer ${
                      activeTab === 'care' ? 'text-[#8E2827] border-b-2 border-[#8E2827]' : 'hover:text-[#241E1C]'
                    }`}
                  >
                    Care & Styling
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-1 transition-colors cursor-pointer ${
                      activeTab === 'reviews' ? 'text-[#8E2827] border-b-2 border-[#8E2827]' : 'hover:text-[#241E1C]'
                    }`}
                  >
                    Buyer Reviews ({product.reviews.length})
                  </button>
                </div>

                <div className="pt-3 text-xs text-[#5D5049] leading-relaxed">
                  {activeTab === 'craft' && (
                    <div className="space-y-2">
                      <p>{product.description}</p>
                      <div className="p-3 bg-white rounded-xl border border-[#E7DFD5]">
                        <h5 className="font-bold text-[#241E1C] mb-1">Technique:</h5>
                        <p>{product.craftTechnique}</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'fabric' && (
                    <div className="space-y-2">
                      <p className="font-semibold text-[#241E1C]">Authenticity & Weaver Specifications:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {product.fabricDetails.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex items-center gap-2 p-2 bg-[#FAF0E6] rounded-lg text-[#8E2827]">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>Comes with official Silk Mark hologram guarantee card.</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-[#241E1C] mb-1">Preservation Guidelines:</h5>
                        <ul className="list-disc pl-4 space-y-1">
                          {product.careInstructions.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E7DFD5]">
                        <h5 className="font-bold text-[#8E2827] mb-1">Stylist Recommendation:</h5>
                        <p>{product.stylingTips}</p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-3">
                      {product.reviews.map((rev) => (
                        <div key={rev.id} className="p-3 bg-white rounded-xl border border-[#E7DFD5] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#241E1C]">{rev.author}</span>
                            <span className="text-[10px] text-[#8C7A6B]">{rev.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#D9822B]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                            <span className="text-[10px] text-[#3F4E3E] font-medium ml-1">Verified Purchase · {rev.location}</span>
                          </div>
                          <p className="italic text-[#4A3E39] pt-1">"{rev.comment}"</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
