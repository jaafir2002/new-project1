import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Scissors, PhoneCall, Mail, CheckCircle2 } from 'lucide-react';
import { Gender } from '../types';
import { VexoLogo } from './VexoLogo';

interface FooterProps {
  onSelectGender: (g: Gender) => void;
  onOpenStory: () => void;
  onOpenFabricGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectGender, onOpenStory, onOpenFabricGuide }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#140F0D] text-[#FAF7F2] border-t border-[#2D2420] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 3 Royal Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#2D2420] text-xs">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1412] border border-[#C89D56]/25 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#7A1D1D] text-[#FAF7F2] shrink-0 border border-[#C89D56]/40">
              <ShieldCheck className="w-5 h-5 text-[#E5C178]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FAF7F2] tracking-wide">Silk Mark Gold Certified</h4>
              <p className="text-[#A8988B] mt-1 leading-relaxed">
                100% natural pure handloom fibers verified by Central Silk Board protocols. Pure gold zari electroplating.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1412] border border-[#C89D56]/25 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#1A1412] text-[#C89D56] shrink-0 border border-[#C89D56]/50">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FAF7F2] tracking-wide">Direct Hereditary Guilds</h4>
              <p className="text-[#A8988B] mt-1 leading-relaxed">
                Empowering 140+ generational master weaving households across Varanasi, Kanchipuram, and Chanderi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1A1412] border border-[#C89D56]/25 shadow-xs">
            <div className="p-2.5 rounded-xl bg-[#7A1D1D]/40 text-[#FAF7F2] shrink-0 border border-[#C89D56]/40">
              <Scissors className="w-5 h-5 text-[#E5C178]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FAF7F2] tracking-wide">Made-to-Measure Darzi</h4>
              <p className="text-[#A8988B] mt-1 leading-relaxed">
                Bespoke made-to-measure tailoring, personal neckline adjustments, and padded bridal blouses.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <VexoLogo variant="footer" />
            <p className="text-[#A8988B] leading-relaxed max-w-sm pt-2">
              Vexo is a luxury Indian ethnic atelier devoted to the preservation of master pit-loom handlooms, raw silks, and royal embroidery traditions for royal brides, grooms, and heritage connoisseurs.
            </p>
            <div className="pt-2 text-[11px] text-[#D5C8BA] space-y-1.5">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#C89D56]" />
                <span>Haute Concierge & Video Darzi: +91 (80) 4122-VEXO</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89D56]" />
                <span>Private Salon: atelier@vexoheritage.com</span>
              </div>
            </div>
          </div>

          {/* Women's Weaves */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#E5C178] uppercase tracking-widest">
              Women’s Haute
            </h5>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={() => onSelectGender('women')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Banarasi Katan Silk
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('women')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Kanchipuram Silk Sarees
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('women')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Chanderi Anarkali Sets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('women')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Heritage Bridal Lehengas
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('women')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Awadhi Chikankari Shararas
                </button>
              </li>
            </ul>
          </div>

          {/* Men's Heritage */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#E5C178] uppercase tracking-widest">
              Men’s Heritage
            </h5>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={() => onSelectGender('men')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Raw Silk Bandhgalas
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('men')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Velvet Groom Sherwanis
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('men')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Tussar Silk Kurta Pajama
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('men')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Banarasi Brocade Bundis
                </button>
              </li>
              <li>
                <button onClick={() => onSelectGender('men')} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Mulmul Pathani Suits
                </button>
              </li>
            </ul>
          </div>

          {/* Artisan & Heritage */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#E5C178] uppercase tracking-widest">
              The Living Handloom
            </h5>
            <ul className="space-y-2 text-[#A8988B]">
              <li>
                <button onClick={onOpenStory} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  The Master Weaver Guilds (140+ Families)
                </button>
              </li>
              <li>
                <button onClick={onOpenFabricGuide} className="hover:text-[#E5C178] transition-colors cursor-pointer">
                  Silk Mark & 24K Zari Authenticity Guide
                </button>
              </li>
              <li>
                <span className="text-[#8C7A6B]">Weaving Looms: Varanasi, Chanderi, Kanchipuram, Awadh, Bhagalpur</span>
              </li>
            </ul>

            {/* Slow batch newsletter */}
            <div className="pt-2">
              <p className="text-[11px] text-[#D5C8BA] mb-1.5 font-medium">
                Privé Postal Ledger for limited pit-loom batch releases:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1A1412] border border-[#C89D56]/60 text-xs text-[#E5C178]">
                  <CheckCircle2 className="w-4 h-4 text-[#C89D56]" />
                  <span>Welcome to the Vexo Privé Circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter royal postal email"
                    className="bg-[#1D1614] border border-[#3A2E28] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8C7A6B] focus:outline-none focus:border-[#C89D56] flex-1 shadow-inner"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#7A1D1D] hover:bg-[#661616] text-[#FAF7F2] px-4 py-2 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer border border-[#C89D56]/40"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#2D2420] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78695E]">
          <p>© {new Date().getFullYear()} VEXO Haute Heritage Atelier. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#C89D56]/80">Central Silk Board Certified</span>
            <span>·</span>
            <span>Slow Handloom Couture</span>
            <span>·</span>
            <span>Direct Hereditary Prosperity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
