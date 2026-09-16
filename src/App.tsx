import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, Currency, Gender, OrderConfirmation } from './types';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { BrandStorySection } from './components/BrandStorySection';
import { FabricGuideModal } from './components/FabricGuideModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ReviewsPage } from './components/ReviewsPage';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

export default function App() {
  // --- STATE PERSISTENCE ---
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vexo_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vexo_wishlist');
      return saved ? JSON.parse(saved) : ['vexo-w-01', 'vexo-m-01'];
    } catch {
      return ['vexo-w-01', 'vexo-m-01'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vexo_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('vexo_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  // --- FILTER & SORT STATE ---
  const [activeGender, setActiveGender] = useState<Gender>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeOccasion, setActiveOccasion] = useState<string>('all');
  const [activeFabric, setActiveFabric] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<Currency>('INR');

  // --- PROMO CODE STATE ---
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // --- MODAL / OVERLAY STATES ---
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFabricGuideOpen, setIsFabricGuideOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmation | null>(null);

  // --- FILTERED PRODUCTS CALCULATION ---
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Gender check
      if (activeGender !== 'all' && p.gender !== activeGender) return false;

      // Category check
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;

      // Occasion check
      if (activeOccasion !== 'all' && p.occasion !== activeOccasion) return false;

      // Fabric check
      if (activeFabric !== 'all' && !p.fabric.toLowerCase().includes(activeFabric.toLowerCase())) return false;

      // Search Query check
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesFabric = p.fabric.toLowerCase().includes(q);
        const matchesOrigin = p.originRegion.toLowerCase().includes(q);
        const matchesArtisan = p.artisan.name.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesFabric && !matchesOrigin && !matchesArtisan && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [activeGender, activeCategory, activeOccasion, activeFabric, searchQuery, sortBy]);

  // --- CART ACTIONS ---
  const handleAddToCart = (product: Product, size: string, customTailoring: boolean = false, tailoringNotes: string = '') => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.customTailoring === customTailoring
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}-${Date.now()}`,
          product,
          size,
          quantity: 1,
          customTailoring,
          tailoringNotes
        }
      ];
    });
  };

  const handleQuickAdd = (product: Product, size: string) => {
    handleAddToCart(product, size);
    setIsCartOpen(true);
  };

  const handleDirectCheckout = (product: Product, size: string, customTailoring: boolean = false, tailoringNotes: string = '') => {
    handleAddToCart(product, size, customTailoring, tailoringNotes);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyDiscount = (code: string): boolean => {
    if (code === 'HERITAGE10') {
      setDiscountCode('HERITAGE10');
      const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
      setDiscountAmount(Math.round(subtotal * 0.10));
      return true;
    }
    return false;
  };

  // Recalculate discount whenever cart items change
  useEffect(() => {
    if (discountCode === 'HERITAGE10') {
      const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
      setDiscountAmount(Math.round(subtotal * 0.10));
    }
  }, [cartItems, discountCode]);

  // --- WISHLIST ACTIONS ---
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // --- CHECKOUT ACTIONS ---
  const handleOrderSuccess = (order: OrderConfirmation) => {
    setCartItems([]);
    setDiscountAmount(0);
    setDiscountCode('');
    setIsCheckoutOpen(false);
    setConfirmedOrder(order);
  };

  const handleOpenStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuickCategory = (gender: Gender, category: string) => {
    setActiveGender(gender);
    setActiveCategory(category);
    setActiveOccasion('all');
    setActiveFabric('all');
    setSearchQuery('');

    // Smoothly scroll to the catalog filter and collection
    setTimeout(() => {
      const el = document.getElementById('catalog-section');
      if (el) {
        const headerOffset = 110;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  const handleOpenMasterKarigars = () => {
    const el = document.getElementById('master-karigars') || document.getElementById('our-story');
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Flash a subtle golden outline on the artisans section to draw focus
      el.classList.add('ring-2', 'ring-[#C89D56]/60', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-[#C89D56]/60');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] selection:bg-[#8E2827]/15 selection:text-[#8E2827]">
      {/* 1. Header Navigation */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStory={handleOpenStory}
        onOpenFabricGuide={() => setIsFabricGuideOpen(true)}
        activeGender={activeGender}
        onSelectGender={setActiveGender}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onSelectQuickCategory={handleSelectQuickCategory}
        onOpenMasterKarigars={handleOpenMasterKarigars}
      />

      {/* Conditional View: Reviews Page vs Main Atelier Catalog */}
      {isReviewsOpen ? (
        <ReviewsPage
          products={PRODUCTS}
          currency={currency}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onBackToAtelier={() => {
            setIsReviewsOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          {/* 2. Hero Banner with Authentic Photography & Human Story */}
          <HeroBanner
            onSelectGender={setActiveGender}
            onOpenStory={handleOpenStory}
          />

          {/* 3. Catalog Filter & Realm Controller */}
          <FilterBar
            activeGender={activeGender}
            onSelectGender={setActiveGender}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            activeOccasion={activeOccasion}
            onSelectOccasion={setActiveOccasion}
            activeFabric={activeFabric}
            onSelectFabric={setActiveFabric}
            sortBy={sortBy}
            onSelectSortBy={setSortBy}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
            totalCount={filteredProducts.length}
          />

          {/* 4. Main Product Catalog Grid */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] flex items-center justify-center mx-auto text-[#8E2827]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#241E1C]">No Handlooms Found</h3>
                <p className="text-xs text-[#78695E] leading-relaxed">
                  We couldn’t find any garments matching your current filter criteria. Our weavers are constantly adding fresh pieces from the loom.
                </p>
                <button
                  onClick={() => {
                    setActiveGender('all');
                    setActiveCategory('all');
                    setActiveOccasion('all');
                    setActiveFabric('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#8E2827] text-white text-xs font-semibold hover:bg-[#782221] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onSelectProduct={setSelectedProduct}
                    onQuickAdd={handleQuickAdd}
                  />
                ))}
              </div>
            )}
          </main>

          {/* 5. Brand Storytelling Section (The Living Handloom & Artisans) */}
          <BrandStorySection />
        </>
      )}

      {/* 6. Footer */}
      <Footer
        onSelectGender={(g) => {
          setIsReviewsOpen(false);
          setActiveGender(g);
        }}
        onOpenStory={handleOpenStory}
        onOpenFabricGuide={() => setIsFabricGuideOpen(true)}
        onOpenReviews={() => {
          setIsReviewsOpen(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 7. Mobile Bottom Navigation Bar (Sticky Thumb-friendly) */}
      <MobileBottomNav
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        activeGender={activeGender}
        onSelectGender={(g) => {
          setIsReviewsOpen(false);
          setActiveGender(g);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStory={handleOpenStory}
        onOpenReviews={() => {
          setIsReviewsOpen((prev) => !prev);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 8. Garment Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        currency={currency}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectCheckout={handleDirectCheckout}
      />

      {/* 9. Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        onApplyDiscount={handleApplyDiscount}
        discountAmount={discountAmount}
      />

      {/* 10. Seamless Multi-Step Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        currency={currency}
        discountAmount={discountAmount}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* 11. Order Confirmation & Heirloom Invoice Modal */}
      <OrderConfirmationModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />

      {/* 12. Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        products={PRODUCTS}
        currency={currency}
        onToggleWishlist={handleToggleWishlist}
        onSelectProduct={setSelectedProduct}
        onMoveToBag={(product) => handleAddToCart(product, product.sizes[0] || 'Standard')}
      />

      {/* 13. Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        currency={currency}
        onSelectProduct={setSelectedProduct}
        onApplySearchFilter={setSearchQuery}
      />

      {/* 14. Fabric Guide Modal */}
      <FabricGuideModal
        isOpen={isFabricGuideOpen}
        onClose={() => setIsFabricGuideOpen(false)}
        onExploreHandlooms={() => handleSelectQuickCategory('women', 'sarees')}
      />
    </div>
  );
}
