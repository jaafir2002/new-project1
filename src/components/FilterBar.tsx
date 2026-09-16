import React from 'react';
import { Filter, SlidersHorizontal, X, Sparkles } from 'lucide-react';
import { Gender } from '../types';

interface FilterBarProps {
  activeGender: Gender;
  onSelectGender: (g: Gender) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  activeOccasion: string;
  onSelectOccasion: (occ: string) => void;
  activeFabric: string;
  onSelectFabric: (fab: string) => void;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  onSelectSortBy: (sort: 'featured' | 'price-asc' | 'price-desc' | 'rating') => void;
  searchQuery: string;
  onClearSearch: () => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeGender,
  onSelectGender,
  activeCategory,
  onSelectCategory,
  activeOccasion,
  onSelectOccasion,
  activeFabric,
  onSelectFabric,
  sortBy,
  onSelectSortBy,
  searchQuery,
  onClearSearch,
  totalCount
}) => {
  const womenCategories = [
    { id: 'all', label: 'All Women’s' },
    { id: 'sarees', label: 'Silk Sarees' },
    { id: 'lehengas', label: 'Bridal Lehengas' },
    { id: 'anarkalis', label: 'Chanderi Anarkalis' },
    { id: 'kurta-sets', label: 'Sharara & Kurta Sets' }
  ];

  const menCategories = [
    { id: 'all', label: 'All Men’s' },
    { id: 'bandhgalas', label: 'Royal Bandhgalas' },
    { id: 'sherwanis', label: 'Velvet & Silk Sherwanis' },
    { id: 'kurta-sets', label: 'Tussar Kurta Sets' },
    { id: 'nehru-jackets', label: 'Brocade Nehru Bundis' }
  ];

  const allCategories = [
    { id: 'all', label: 'All Silks & Weaves' },
    { id: 'sarees', label: 'Sarees' },
    { id: 'lehengas', label: 'Lehengas' },
    { id: 'bandhgalas', label: 'Bandhgalas' },
    { id: 'sherwanis', label: 'Sherwanis' },
    { id: 'anarkalis', label: 'Anarkalis' },
    { id: 'kurta-sets', label: 'Kurta Sets' },
    { id: 'nehru-jackets', label: 'Nehru Bundis' }
  ];

  const categories = activeGender === 'women' 
    ? womenCategories 
    : activeGender === 'men' 
      ? menCategories 
      : allCategories;

  const occasions = [
    { id: 'all', label: 'All Occasions' },
    { id: 'wedding', label: 'Wedding & Bridal' },
    { id: 'festive', label: 'Diwali & Festive' },
    { id: 'sangeet', label: 'Sangeet & Evening' },
    { id: 'haldi', label: 'Haldi & Mehendi' },
    { id: 'everyday', label: 'Everyday Heritage' }
  ];

  const fabrics = [
    { id: 'all', label: 'All Fabrics' },
    { id: 'Varanasi', label: 'Pure Varanasi Katan' },
    { id: 'Chanderi', label: 'Chanderi Silk Cotton' },
    { id: 'Kanchipuram', label: 'Kanchipuram Mulberry Silk' },
    { id: 'Tussar', label: 'Wild Tussar Silk' },
    { id: 'Raw Silk', label: 'Matka Raw Silk' },
    { id: 'Georgette', label: 'Lucknowi Georgette' },
    { id: 'Cotton', label: 'Egyptian Mulmul Cotton' }
  ];

  const hasActiveFilters = activeCategory !== 'all' || activeOccasion !== 'all' || activeFabric !== 'all' || searchQuery !== '';

  const resetAllFilters = () => {
    onSelectCategory('all');
    onSelectOccasion('all');
    onSelectFabric('all');
    onClearSearch();
  };

  return (
    <div id="catalog-section" className="bg-[#FAF8F5] border-b border-[#E7DFD5] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Filter Controls: Gender Realm Selector & Count */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Gender Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5EFEB] rounded-xl border border-[#D9C4A5]/70 max-w-fit shadow-2xs">
            <button
              onClick={() => onSelectGender('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeGender === 'all'
                  ? 'bg-[#1A1412] text-[#FAF7F2] shadow-xs'
                  : 'text-[#5D5049] hover:text-[#1A1412]'
              }`}
            >
              Complete Atelier
            </button>
            <button
              onClick={() => onSelectGender('women')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeGender === 'women'
                  ? 'bg-[#7A1D1D] text-[#FAF7F2] shadow-xs border border-[#C89D56]/40'
                  : 'text-[#5D5049] hover:text-[#7A1D1D]'
              }`}
            >
              Women's Haute
            </button>
            <button
              onClick={() => onSelectGender('men')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeGender === 'men'
                  ? 'bg-[#1A1412] text-[#E5C178] shadow-xs border border-[#C89D56]/40'
                  : 'text-[#5D5049] hover:text-[#C89D56]'
              }`}
            >
              Men's Heritage
            </button>
          </div>

          {/* Right Side: Sorting & Count */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-[#78695E] font-medium tracking-wide">
              Showing <strong className="text-[#1A1412] font-serif text-sm">{totalCount}</strong> authenticated creations
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#D9C4A5] text-xs font-semibold text-[#1A1412] shadow-2xs">
              <span className="text-[#8C7A6B] uppercase tracking-wider text-[10px]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => onSelectSortBy(e.target.value as any)}
                aria-label="Sort products by"
                className="bg-transparent text-[#1A1412] font-semibold focus:outline-none cursor-pointer"
              >
                <option value="featured">Royal Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Guild Rating</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#7A1D1D] bg-[#7A1D1D]/10 hover:bg-[#7A1D1D]/15 transition-colors cursor-pointer border border-[#7A1D1D]/20"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Search Query Notice */}
        {searchQuery && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF0E6] border border-[#C89D56]/40 text-xs text-[#7A1D1D]">
            <span>Searching Atelier for: <strong>"{searchQuery}"</strong></span>
            <button 
              onClick={onClearSearch}
              className="text-[#8C7A6B] hover:text-[#7A1D1D] ml-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Horizontal Category Scrollable Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#7A1D1D] text-[#FAF7F2] border-[#7A1D1D] shadow-xs'
                  : 'bg-white text-[#5D5049] border-[#D9C4A5] hover:border-[#7A1D1D]/50 hover:text-[#1A1412]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Occasions & Fabric Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <div className="flex items-center gap-1 text-[#8C7A6B] font-semibold mr-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C89D56]" />
            <span className="uppercase tracking-wider text-[10px]">Occasion:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {occasions.map((occ) => (
              <button
                key={occ.id}
                onClick={() => onSelectOccasion(occ.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeOccasion === occ.id
                    ? 'bg-[#1A1412] text-[#E5C178] border border-[#C89D56]/50 shadow-2xs font-semibold'
                    : 'bg-[#F5EFEB] text-[#655750] hover:text-[#1A1412]'
                }`}
              >
                {occ.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 ml-auto">
            <span className="text-[#8C7A6B] font-semibold uppercase tracking-wider text-[10px]">Fabric:</span>
            <select
              value={activeFabric}
              onChange={(e) => onSelectFabric(e.target.value)}
              aria-label="Filter by fabric"
              className="bg-white border border-[#D9C4A5] text-[#1A1412] rounded-lg px-2.5 py-1 text-xs font-semibold focus:outline-none focus:border-[#C89D56] shadow-2xs cursor-pointer"
            >
              {fabrics.map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
