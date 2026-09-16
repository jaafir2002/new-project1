import React from 'react';
import { ARTISAN_PROFILES, BRAND_VALUES } from '../data/brandStory';
import { HeartHandshake, ShieldCheck, Clock, Award, Sparkles, MapPin } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-[#F5EFEB] border-t border-b border-[#E7DFD5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header: Warm Human Tone */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8E2827]/10 text-[#8E2827] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Soul of Vexo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241E1C] font-normal tracking-tight">
            We do not mass-produce fashion. We keep <span className="italic font-medium text-[#8E2827]">living heritage</span> alive.
          </h2>
          <p className="text-base text-[#655750] leading-relaxed font-normal">
            In an era of synthetic polyester fast-fashion, Vexo was established as a sanctuary for authentic Indian handlooms. We partner directly with more than 140 generational weaver families across India's most storied weaving capitals.
          </p>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="p-6 bg-white rounded-2xl border border-[#E7DFD5] space-y-3 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E7DFD5] flex items-center justify-center text-[#8E2827] font-serif font-bold text-base">
                0{idx + 1}
              </div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#8E2827] block">
                {val.tagline}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#241E1C]">
                {val.title}
              </h3>
              <p className="text-xs text-[#655750] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Meet the Master Artisans Behind the Loom */}
        <div id="master-karigars" className="space-y-8 pt-8 border-t border-[#E7DFD5] scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#8C7A6B]">
                Generational Karigars
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1C]">
                The Artisans Weaving Your Memories
              </h3>
            </div>
            <p className="text-xs text-[#78695E] max-w-sm">
              Every outfit arrives with a signed card noting the exact family guild and pit-loom number where it was crafted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTISAN_PROFILES.map((artisan) => (
              <div
                key={artisan.id}
                className="bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col shadow-xs"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-semibold uppercase bg-[#8E2827] px-2 py-0.5 rounded-full inline-block mb-0.5">
                      {artisan.experience} Craftsmanship
                    </span>
                    <h4 className="font-serif text-base font-bold">{artisan.name}</h4>
                    <p className="text-xs text-white/85 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D9822B]" />
                      <span>{artisan.region}</span>
                    </p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#8E2827]">
                      {artisan.craft}
                    </div>
                    <div className="text-[11px] text-[#78695E]">
                      Loom: <strong className="text-[#241E1C]">{artisan.loomType}</strong>
                    </div>
                    <p className="text-xs text-[#4A3E39] italic pt-1 leading-relaxed border-t border-[#F0EAE1]">
                      "{artisan.quote}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#3F4E3E] font-medium">
                    <span className="flex items-center gap-1">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      100% Fair Living Wage
                    </span>
                    <span className="text-[#8C7A6B]">Vexo Co-op</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Handloom Pledge Card */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8CEBF] p-8 sm:p-12 relative overflow-hidden shadow-xs">
          <div className="max-w-2xl space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8E2827]">
              A Note from the Vexo Atelier
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#241E1C] font-normal leading-snug">
              "Indian clothing is not just meant for a photograph. It carries sacred rituals, laughter at sangeets, and quiet warmth across lifetimes."
            </h3>
            <p className="text-xs sm:text-sm text-[#655750] leading-relaxed">
              When you wear Vexo, you are holding the quiet dedication of families who wake before dawn to hand-spin raw silk yarns, align warp threads on pit-looms, and set delicate gold zardozi wires with generational intuition. Thank you for choosing slow, authentic handcraft.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8E2827] text-white flex items-center justify-center font-serif text-base font-bold">
                V
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-[#241E1C]">The Vexo Weaving Guild Collective</p>
                <p className="text-[11px] text-[#8C7A6B]">Varanasi · Chanderi · Kanchipuram · Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
