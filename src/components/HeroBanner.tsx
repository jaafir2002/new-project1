import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Scissors, Crown } from 'lucide-react';
import { Gender } from '../types';
import { VexoLogo } from './VexoLogo';

interface HeroBannerProps {
  onSelectGender: (g: Gender) => void;
  onOpenStory: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectGender, onOpenStory }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] border-b border-[#E7DFD5]">
      {/* Subtle organic warm gold & imperial ruby glow */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-[#C89D56]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 rounded-full bg-[#7A1D1D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Human Storytelling & Brand Voice */}
          <div className="lg:col-span-6 space-y-6">
            {/* Luxury Seal Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A1412] text-[#E5C178] text-xs font-semibold tracking-[0.15em] uppercase border border-[#C89D56]/50 shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#C89D56]" />
              <span>Vexo Haute Atelier · Master Weaves</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1412] font-normal tracking-tight leading-[1.12]">
                Woven by <span className="italic font-medium text-[#7A1D1D] font-serif">master karigars</span>, sanctified by timeless royalty.
              </h1>
            </div>

            {/* Luxury Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectGender('women');
                  const el = document.getElementById('catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-[#7A1D1D] hover:bg-[#661616] text-[#FAF7F2] text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2 shadow-[0_4px_16px_rgba(122,29,29,0.25)] border border-[#C89D56]/40 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Women’s Haute Collection</span>
                <ArrowRight className="w-4 h-4 text-[#E5C178]" />
              </button>

              <button
                onClick={() => {
                  onSelectGender('men');
                  const el = document.getElementById('catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-[#1A1412] hover:bg-[#2A201D] text-[#FAF7F2] text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2 shadow-[0_4px_16px_rgba(26,20,18,0.2)] border border-[#C89D56]/50 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Men’s Royal Heritage</span>
                <ArrowRight className="w-4 h-4 text-[#C89D56]" />
              </button>

              <button
                onClick={onOpenStory}
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/80 text-[#1A1412] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#D9C4A5] transition-all cursor-pointer shadow-2xs hover:border-[#C89D56]"
              >
                The Artisan Guild
              </button>
            </div>

            {/* Craftsmanship Guarantees with Gold Medallion Styling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D9C4A5]/60">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#C89D56]/40 text-[#7A1D1D] mt-0.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1412] uppercase tracking-wide">Silk Mark Gold</h4>
                  <p className="text-[11px] text-[#78695E]">100% genuine certified fiber</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#C89D56]/40 text-[#C89D56] mt-0.5 shadow-2xs">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1412] uppercase tracking-wide">Direct From Loom</h4>
                  <p className="text-[11px] text-[#78695E]">Hereditary weaver prosperity</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#C89D56]/40 text-[#1A1412] mt-0.5 shadow-2xs">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1412] uppercase tracking-wide">Bespoke Fit</h4>
                  <p className="text-[11px] text-[#78695E]">Custom made-to-measure tailoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
              {/* Main Bridal / Silk Saree Portrait */}
              <div className="col-span-7 space-y-3">
                <div className="relative group overflow-hidden rounded-2xl border-2 border-[#D9C4A5]/70 shadow-[0_8px_30px_rgba(26,20,18,0.12)] bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85"
                    alt="Varanasi Katan Silk Handloom Saree"
                    className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#1A1412]/80 backdrop-blur-md border border-[#C89D56]/60 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#E5C178] font-semibold">
                    <Crown className="w-3 h-3 text-[#C89D56]" />
                    <span>Haute Bridal</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-semibold tracking-wider bg-[#7A1D1D] px-2.5 py-0.5 rounded-full inline-block mb-1 border border-[#C89D56]/40">
                      Varanasi Kadwa Katan
                    </span>
                    <p className="font-serif text-sm sm:text-base font-medium leading-tight text-[#FAF7F2]">
                      Pure Kadwa weave handloomed with antique gold zari
                    </p>
                  </div>
                </div>
              </div>

              {/* Men's Royal Groom & Loom Detail Portraits */}
              <div className="col-span-5 space-y-3 sm:space-y-4">
                {/* Men's Sherwani / Bandhgala Portrait */}
                <div className="relative group overflow-hidden rounded-xl border border-[#D9C4A5]/70 shadow-sm bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=85"
                    alt="Royal Raw Silk Bandhgala"
                    className="w-full h-36 sm:h-48 object-cover object-top group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[9px] uppercase font-semibold tracking-wider bg-[#1A1412] px-2 py-0.5 rounded inline-block mb-0.5 border border-[#C89D56]/40 text-[#E5C178]">
                      Men's Heritage
                    </span>
                    <p className="font-serif text-xs font-normal truncate text-[#FAF7F2]">
                      Matka Raw Silk Bandhgala
                    </p>
                  </div>
                </div>

                {/* Artisan Loom close-up */}
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#D9C4A5] shadow-xs">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                      alt="Master Weaver Mohammad Rais" 
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#C89D56]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1412] leading-none">Rais Ansari</h4>
                      <span className="text-[10px] text-[#8C7A6B]">4th Gen Loom Master, Varanasi</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5D5049] italic leading-tight">
                    "Every warp thread is tensioned by hand. You can feel the heartbeat of the loom in the drape."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
