import React, { useState, useMemo } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ThumbsUp, 
  Sparkles, 
  Filter, 
  MessageSquarePlus, 
  CheckCircle2, 
  ArrowLeft, 
  SlidersHorizontal,
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Review, Currency } from '../types';
import { formatCurrency } from '../utils/currency';

interface ReviewsPageProps {
  products: Product[];
  currency: Currency;
  onSelectProduct: (product: Product) => void;
  onBackToAtelier: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  products,
  currency,
  onSelectProduct,
  onBackToAtelier
}) => {
  // Aggregate all reviews across all products
  const allInitialReviews = useMemo(() => {
    const list: Review[] = [];
    products.forEach((prod) => {
      if (prod.reviews && prod.reviews.length > 0) {
        prod.reviews.forEach((r) => {
          list.push({
            ...r,
            productId: prod.id,
            outfitBought: prod.title,
            helpfulCount: r.helpfulCount || Math.floor(Math.random() * 24) + 4,
            fitFeedback: r.fitFeedback || (prod.category === 'sarees' ? 'Perfect Drape' : 'True to Size'),
            occasion: r.occasion || (prod.occasion.charAt(0).toUpperCase() + prod.occasion.slice(1)),
            craftAppreciation: r.craftAppreciation || `${prod.weaveType} (${prod.originRegion.split(',')[0]})`
          });
        });
      }
    });
    return list;
  }, [products]);

  const [reviewsList, setReviewsList] = useState<Review[]>(allInitialReviews);
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');
  const [selectedGender, setSelectedGender] = useState<'all' | 'women' | 'men'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [helpfulVotedIds, setHelpfulVotedIds] = useState<string[]>([]);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form states
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newProductId, setNewProductId] = useState(products[0]?.id || '');
  const [newComment, setNewComment] = useState('');
  const [newOccasion, setNewOccasion] = useState('Wedding Gala');
  const [newFit, setNewFit] = useState<'True to Size' | 'Runs Slightly Small' | 'Runs Slightly Large' | 'Perfect Drape'>('True to Size');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Overall Statistics
  const totalReviewsCount = reviewsList.length;
  const averageRating = useMemo(() => {
    if (totalReviewsCount === 0) return 5.0;
    const sum = reviewsList.reduce((acc, r) => acc + r.rating, 0);
    return Number((sum / totalReviewsCount).toFixed(1));
  }, [reviewsList, totalReviewsCount]);

  const ratingBreakdown = useMemo(() => {
    const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsList.forEach((r) => {
      if (counts[r.rating] !== undefined) {
        counts[r.rating] += 1;
      }
    });
    return counts;
  }, [reviewsList]);

  // Handle helpful upvote
  const handleVoteHelpful = (reviewId: string) => {
    if (helpfulVotedIds.includes(reviewId)) return;
    setHelpfulVotedIds((prev) => [...prev, reviewId]);
    setReviewsList((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 } : r
      )
    );
  };

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    return reviewsList.filter((r) => {
      // Rating filter
      if (selectedRating !== 'all' && r.rating !== selectedRating) return false;

      // Product association
      const product = products.find((p) => p.id === r.productId || p.title === r.outfitBought);
      if (selectedGender !== 'all' && product && product.gender !== selectedGender) return false;
      if (selectedCategory !== 'all' && product && product.category !== selectedCategory) return false;

      return true;
    });
  }, [reviewsList, selectedRating, selectedGender, selectedCategory, products]);

  // Submit review handler
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim() || !newProductId) return;

    const matchedProduct = products.find((p) => p.id === newProductId);
    const createdReview: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      location: newLocation.trim() || 'Verified Connoisseur',
      rating: newRating,
      date: 'Just now',
      comment: newComment.trim(),
      verified: true,
      productId: newProductId,
      outfitBought: matchedProduct ? matchedProduct.title : 'Bespoke Couture',
      helpfulCount: 0,
      fitFeedback: newFit,
      occasion: newOccasion,
      craftAppreciation: matchedProduct ? `${matchedProduct.weaveType} (${matchedProduct.originRegion.split(',')[0]})` : 'Handloom Heritage'
    };

    setReviewsList((prev) => [createdReview, ...prev]);
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setIsWriteReviewOpen(false);
      setNewAuthor('');
      setNewLocation('');
      setNewComment('');
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1412] pb-24">
      {/* Top Breadcrumb & Return Bar */}
      <header className="bg-[#1A1412] text-[#FAF7F2] border-b border-[#C89D56]/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToAtelier}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5C178] hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Atelier Catalog</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#A8988B]">
            <span>Atelier</span>
            <ChevronRight className="w-3 h-3 text-[#C89D56]" />
            <span className="text-[#FAF7F2] font-semibold">Client Chronicles & Reviews</span>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#241C1A] to-[#1A1412] text-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#C89D56]/30 shadow-md">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A1D1D]/80 border border-[#C89D56]/50 text-[#E5C178] text-[11px] uppercase tracking-widest font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Heirloom Experiences</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Client Chronicles & Reviews
          </h1>

          <p className="text-sm sm:text-base text-[#D5C8BA] max-w-2xl mx-auto leading-relaxed">
            Real reflections from patrons, brides, grooms, and heritage collectors who have draped our pit-loom sarees, velvet sherwanis, and bespoke royal couture worldwide.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-6 py-3 rounded-xl bg-[#7A1D1D] hover:bg-[#5E1414] text-[#FAF7F2] font-semibold tracking-wider uppercase transition-all shadow-md flex items-center gap-2 border border-[#C89D56]/50 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#E5C178]" />
              <span>Share Your Atelier Experience</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Review Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Rating Scorecard Overview */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DFD5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Overall Score */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#FAF8F5] rounded-xl border border-[#D9C4A5]/60">
            <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#1A1412]">
              {averageRating}
            </span>
            <div className="flex items-center gap-1 my-2 text-[#C89D56]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-current text-[#C89D56]' : 'text-[#D9C4A5]'}`}
                />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#655750]">
              Overall Connoisseur Rating
            </p>
            <p className="text-[11px] text-[#8C7A6B] mt-1">
              Based on {totalReviewsCount} verified artisan client assessments
            </p>
          </div>

          {/* Star Breakdown Progress Bars */}
          <div className="lg:col-span-5 space-y-2.5">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingBreakdown[stars] || 0;
              const percentage = totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
              return (
                <button
                  key={stars}
                  onClick={() => setSelectedRating(selectedRating === stars ? 'all' : stars)}
                  className={`w-full flex items-center gap-3 text-xs group cursor-pointer transition-colors p-1 rounded-lg ${
                    selectedRating === stars ? 'bg-[#F5EFEB] font-bold text-[#7A1D1D]' : 'text-[#5D5049] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className="w-12 text-left flex items-center gap-1">
                    <span>{stars}</span>
                    <Star className="w-3 h-3 fill-current text-[#C89D56]" />
                  </span>
                  <div className="flex-1 h-2.5 bg-[#EFE9E2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7A1D1D] rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[11px] text-[#8C7A6B]">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Authenticity Guarantee Pillar */}
          <div className="lg:col-span-3 bg-[#FAF8F5] p-5 rounded-xl border border-[#D9C4A5]/60 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#7A1D1D] font-bold uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#C89D56]" />
              <span>Silk Mark Verified</span>
            </div>
            <p className="text-[#655750] leading-relaxed text-[11px]">
              100% of reviews are collected from buyers who received our registered GI tagged weave certificates and Silk Mark verification holograms.
            </p>
            <div className="pt-2 border-t border-[#E7DFD5] flex items-center gap-2 text-[11px] text-[#7A1D1D] font-semibold">
              <HeartHandshake className="w-4 h-4 text-[#C89D56]" />
              <span>Direct Karigar Benefit</span>
            </div>
          </div>
        </section>

        {/* Filter Toolbar */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#E7DFD5]">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-[#655750] flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C89D56]" />
              Filter Reviews:
            </span>

            {/* Gender Filters */}
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold tracking-wider uppercase transition-colors cursor-pointer text-[11px] border ${
                selectedGender === 'all'
                  ? 'bg-[#1A1412] text-[#FAF7F2] border-[#1A1412]'
                  : 'bg-white text-[#4A3E39] border-[#E7DFD5] hover:border-[#7A1D1D]'
              }`}
            >
              All Patrons
            </button>
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-3 py-1.5 rounded-lg font-semibold tracking-wider uppercase transition-colors cursor-pointer text-[11px] border ${
                selectedGender === 'women'
                  ? 'bg-[#7A1D1D] text-[#FAF7F2] border-[#7A1D1D]'
                  : 'bg-white text-[#4A3E39] border-[#E7DFD5] hover:border-[#7A1D1D]'
              }`}
            >
              Women's Haute
            </button>
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-3 py-1.5 rounded-lg font-semibold tracking-wider uppercase transition-colors cursor-pointer text-[11px] border ${
                selectedGender === 'men'
                  ? 'bg-[#1A1412] text-[#E5C178] border-[#1A1412]'
                  : 'bg-white text-[#4A3E39] border-[#E7DFD5] hover:border-[#C89D56]'
              }`}
            >
              Men's Heritage
            </button>

            {/* Rating Filter Pill */}
            {selectedRating !== 'all' && (
              <button
                onClick={() => setSelectedRating('all')}
                className="px-3 py-1.5 rounded-lg bg-[#FAF0E6] text-[#7A1D1D] border border-[#7A1D1D]/40 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
              >
                <span>{selectedRating} Stars Filter Active</span>
                <span className="ml-1 text-[10px]">✕</span>
              </button>
            )}
          </div>

          <div className="text-xs text-[#8C7A6B] font-medium">
            Showing <strong className="text-[#1A1412]">{filteredReviews.length}</strong> authenticated reflections
          </div>
        </section>

        {/* Reviews List Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.length === 0 ? (
            <div className="col-span-full py-16 text-center space-y-3 bg-white rounded-2xl border border-[#E7DFD5]">
              <Sparkles className="w-8 h-8 text-[#C89D56] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[#1A1412]">No Reviews Match Your Filter</h3>
              <p className="text-xs text-[#78695E]">Try resetting the rating or realm filter to view all chronicles.</p>
              <button
                onClick={() => {
                  setSelectedRating('all');
                  setSelectedGender('all');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2 rounded-xl bg-[#7A1D1D] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Review Filters
              </button>
            </div>
          ) : (
            filteredReviews.map((rev) => {
              const matchedProduct = products.find((p) => p.id === rev.productId || p.title === rev.outfitBought);
              const isHelpful = helpfulVotedIds.includes(rev.id);

              return (
                <motion.article
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7DFD5] shadow-xs flex flex-col justify-between hover:border-[#C89D56]/60 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Author & Verified Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#1A1412]">
                          {rev.author}
                        </h4>
                        <p className="text-[11px] text-[#8C7A6B]">
                          {rev.location} · <span className="italic">{rev.date}</span>
                        </p>
                      </div>

                      {rev.verified && (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF0E6] text-[#7A1D1D] text-[10px] font-bold uppercase tracking-wider border border-[#C89D56]/30">
                          <CheckCircle2 className="w-3 h-3 text-[#7A1D1D]" />
                          Verified
                        </span>
                      )}
                    </div>

                    {/* Star Rating & Occasion */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-0.5 text-[#C89D56]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-current' : 'text-[#E7DFD5]'}`}
                          />
                        ))}
                      </div>

                      {rev.occasion && (
                        <span className="text-[10px] font-medium text-[#655750] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E7DFD5]">
                          {rev.occasion}
                        </span>
                      )}
                    </div>

                    {/* Feedback comment */}
                    <p className="text-xs text-[#4A3E39] leading-relaxed italic pt-1">
                      "{rev.comment}"
                    </p>

                    {/* Craft & Fit Metrics */}
                    <div className="pt-2 border-t border-[#F5EFEB] grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-[#FAF8F5] p-2 rounded-lg">
                        <span className="text-[#8C7A6B] block font-semibold uppercase">Garment Drape/Fit:</span>
                        <span className="text-[#1A1412] font-medium">{rev.fitFeedback || 'True to Size'}</span>
                      </div>
                      <div className="bg-[#FAF8F5] p-2 rounded-lg">
                        <span className="text-[#8C7A6B] block font-semibold uppercase">Loom Craft:</span>
                        <span className="text-[#7A1D1D] font-medium truncate block">{rev.craftAppreciation || '100% Pure Silk'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Outfit Bought Link + Helpful button */}
                  <div className="pt-3 border-t border-[#F5EFEB] flex items-center justify-between text-xs">
                    {matchedProduct ? (
                      <button
                        onClick={() => onSelectProduct(matchedProduct)}
                        className="text-[11px] font-semibold text-[#7A1D1D] hover:underline flex items-center gap-1 truncate max-w-[65%] text-left cursor-pointer"
                        title={matchedProduct.title}
                      >
                        <span className="truncate">{matchedProduct.title}</span>
                        <span>→</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#655750] truncate">{rev.outfitBought}</span>
                    )}

                    <button
                      onClick={() => handleVoteHelpful(rev.id)}
                      disabled={isHelpful}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                        isHelpful
                          ? 'bg-[#FAF0E6] text-[#7A1D1D] font-bold'
                          : 'text-[#655750] hover:bg-[#F5EFEB] border border-[#E7DFD5]'
                      }`}
                    >
                      <ThumbsUp className={`w-3 h-3 ${isHelpful ? 'fill-current' : ''}`} />
                      <span>{rev.helpfulCount || 0}</span>
                    </button>
                  </div>
                </motion.article>
              );
            })
          )}
        </section>
      </main>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isWriteReviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#D9C4A5] overflow-hidden"
            >
              <div className="bg-[#1A1412] text-[#FAF7F2] p-5 flex items-center justify-between border-b border-[#C89D56]/40">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E5C178]" />
                  <h3 className="font-serif text-lg font-bold">Chronicle Your Atelier Garment</h3>
                </div>
                <button
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="text-[#D5C8BA] hover:text-white transition-colors cursor-pointer text-sm"
                >
                  ✕
                </button>
              </div>

              {submissionSuccess ? (
                <div className="p-10 text-center space-y-3 bg-[#FAF8F5]">
                  <CheckCircle2 className="w-12 h-12 text-[#7A1D1D] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#1A1412]">Thank You, Patron</h4>
                  <p className="text-xs text-[#655750]">
                    Your authentic craft review has been recorded and published to our royal ledger.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-[#1A1412] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="e.g. Meera Singhania"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#1A1412] mb-1">City / Region *</label>
                      <input
                        type="text"
                        required
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder="e.g. Mumbai, Maharashtra"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D]"
                      />
                    </div>
                  </div>

                  {/* Garment Selection */}
                  <div className="text-xs">
                    <label className="block font-semibold text-[#1A1412] mb-1">Garment Acquired *</label>
                    <select
                      value={newProductId}
                      onChange={(e) => setNewProductId(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D] text-xs cursor-pointer"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} — ({formatCurrency(p.price, currency)})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Star Rating selector */}
                  <div className="text-xs">
                    <label className="block font-semibold text-[#1A1412] mb-1">Rating *</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setNewRating(s)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 ${s <= newRating ? 'fill-current text-[#C89D56]' : 'text-[#D9C4A5]'}`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-[#7A1D1D] ml-2">
                        {newRating === 5 ? 'Masterpiece (5 Stars)' : `${newRating} Stars`}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-[#1A1412] mb-1">Occasion Worn</label>
                      <input
                        type="text"
                        value={newOccasion}
                        onChange={(e) => setNewOccasion(e.target.value)}
                        placeholder="e.g. Sangeet Evening, Wedding Drape"
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#1A1412] mb-1">Drape & Fit Quality</label>
                      <select
                        value={newFit}
                        onChange={(e) => setNewFit(e.target.value as any)}
                        className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D] text-xs cursor-pointer"
                      >
                        <option value="True to Size">True to Size</option>
                        <option value="Perfect Drape">Perfect Drape</option>
                        <option value="Runs Slightly Small">Runs Slightly Small</option>
                        <option value="Runs Slightly Large">Runs Slightly Large</option>
                      </select>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="text-xs">
                    <label className="block font-semibold text-[#1A1412] mb-1">Your Detailed Chronicle *</label>
                    <textarea
                      required
                      rows={4}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share notes on the silk weight, zari luster, loom texture, packaging, or wearer compliments..."
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9C4A5] rounded-xl focus:outline-none focus:border-[#7A1D1D] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#E7DFD5]">
                    <button
                      type="button"
                      onClick={() => setIsWriteReviewOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#655750] hover:bg-[#F5EFEB] transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#7A1D1D] hover:bg-[#5E1414] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-xs"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
