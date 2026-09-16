import React, { useState } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currency: Currency;
  onSelectProduct: (p: Product) => void;
  onApplySearchFilter: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  currency,
  onSelectProduct,
  onApplySearchFilter
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const trendingSearches = [
    'Banarasi Silk Saree',
    'Raw Silk Bandhgala',
    'Chanderi Anarkali',
    'Bridal Lehenga',
    'Tussar Kurta Set',
    'Velvet Sherwani'
  ];

  const filtered = query.trim() === ''
    ? []
    : products.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.fabric.toLowerCase().includes(query.toLowerCase()) ||
        p.originRegion.toLowerCase().includes(query.toLowerCase()) ||
        p.artisan.name.toLowerCase().includes(query.toLowerCase()) ||
        p.occasion.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelectQuery = (term: string) => {
    setQuery(term);
    onApplySearchFilter(term);
    onClose();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onApplySearchFilter(query.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs pt-16 sm:pt-24">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#E7DFD5] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="p-4 bg-white border-b border-[#E7DFD5] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8E2827] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sarees, sherwanis, weavers, fabrics (e.g., Banarasi, Tussar, Velvet)..."
            className="flex-1 text-sm bg-transparent text-[#241E1C] placeholder-[#8C7A6B] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#8C7A6B] hover:text-[#241E1C] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#E7DFD5] text-xs font-semibold text-[#241E1C]"
          >
            Esc
          </button>
        </form>

        {/* Results / Suggestions */}
        <div className="p-6 max-h-96 overflow-y-auto space-y-4 text-xs">
          {query.trim() === '' ? (
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-[#8C7A6B] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#D9822B]" />
                <span>Trending Handloom Curations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSelectQuery(term)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-[#E7DFD5] hover:border-[#8E2827] hover:text-[#8E2827] text-[#4A3E39] font-medium transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-[#78695E] space-y-2">
              <p>No handloom pieces matching "{query}"</p>
              <p className="text-[11px]">Try searching by fabric like "Silk", "Chanderi", or occasion like "Wedding".</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] text-[#8C7A6B] font-semibold uppercase">
                {filtered.length} Handcrafted Pieces Found
              </p>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="p-2.5 bg-white rounded-xl border border-[#E7DFD5] hover:border-[#8E2827] flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-10 h-12 rounded-lg object-cover border border-[#E7DFD5]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-[#241E1C]">{item.title}</h4>
                      <p className="text-[#78695E]">{item.fabric} · {item.originRegion.split(',')[0]}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-[#241E1C]">
                      {formatPrice(item.price, currency)}
                    </span>
                    <span className="text-[10px] text-[#8E2827] block">View Details →</span>
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
