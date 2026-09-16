import React, { useState } from 'react';
import { X, ShieldCheck, Sparkles, Feather, Flame, Award, BookOpen } from 'lucide-react';

interface FabricGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreHandlooms?: () => void;
}

export const FabricGuideModal: React.FC<FabricGuideModalProps> = ({ isOpen, onClose, onExploreHandlooms }) => {
  if (!isOpen) return null;

  const [selectedFabric, setSelectedFabric] = useState<string>('katan');

  const fabrics = [
    {
      id: 'katan',
      name: 'Varanasi Katan Silk',
      origin: 'Varanasi, Uttar Pradesh',
      loom: 'Traditional Pit-Loom',
      desc: 'Formed by twisting together multiple fine mulberry silk filaments into a durable, lustrous yarn. It has an incomparable liquid drape, rich metallic resonance with zari, and does not pill or wrinkle easily.',
      features: ['100% Pure Mulberry Silk', 'Kadwa & Konia Weave Compatible', 'Heavy natural luster', 'Silk Mark Certified'],
      touchFeel: 'Smooth, firm, and weighty with subtle sheen.'
    },
    {
      id: 'kanchipuram',
      name: 'Kanchipuram Silk',
      origin: 'Kanchipuram, Tamil Nadu',
      loom: 'Korvai Double-Shuttle Loom',
      desc: 'Woven with three-ply silk yarn twisted together and dipped in rice-starch water. The contrast temple border is interlocked by hand using the ancient Korvai method where two weavers throw shuttles from both sides simultaneously.',
      features: ['Extremely dense 800g+ drape', 'Pure gold & silver dipped zari', 'Geometric temple border motifs', 'GI Tagged Heritage'],
      touchFeel: 'Substantial, crisp, and structured.'
    },
    {
      id: 'chanderi',
      name: 'Chanderi Silk Cotton',
      origin: 'Chanderi, Madhya Pradesh',
      loom: 'Gossamer Pit-Loom',
      desc: 'Celebrated as "woven air." Hand-spun raw silk warp combined with high-count desi cotton weft creates an ultra-breathable, sheer fabric that shimmers in candlelight. Famous for delicate booti motifs.',
      features: ['Translucent gossamer texture', 'Featherweight for hot climates', 'Real metallic zari border', 'Natural river water wash'],
      touchFeel: 'Ethereal, whisper-soft, and featherlight.'
    },
    {
      id: 'tussar',
      name: 'Wild Tussar Silk',
      origin: 'Bhagalpur, Bihar',
      loom: 'Tribal Handloom',
      desc: 'Known as the "golden thread of India." Produced from wild silkworms living in deep sal and asan forests. Its distinctive rich natural honey-gold tint requires zero harsh chemical bleaches.',
      features: ['Natural honey-beige color', 'Distinctive slub yarn texture', 'Thermal regulating (cool in day, warm at night)', 'Eco-friendly wild harvest'],
      touchFeel: 'Textured, organic, and earth-rich.'
    },
    {
      id: 'chikankari',
      name: 'Lucknowi Chikankari',
      origin: 'Lucknow, Uttar Pradesh',
      loom: 'Handheld Needlework',
      desc: 'A 400-year-old Nawabi embroidery craft featuring 32 distinct hand stitches like Bakhiya (shadow work), Phanda (millet seed knots), and Keel Kangan. Every motif is embroidered entirely by village women karigars.',
      features: ['100% manual needlework', 'Shadow embroidery on fine georgette & mulmul', 'Tone-on-tone regal subtlety', 'Takes up to 25 days per kurta'],
      touchFeel: 'Delicate, dimensional, and poetic.'
    }
  ];

  const current = fabrics.find(f => f.id === selectedFabric) || fabrics[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl border border-[#E7DFD5] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E7DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#8E2827]" />
            <h3 className="font-serif text-xl font-bold text-[#241E1C]">Vexo Master Fabric Guide</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F4EFEA] text-[#241E1C] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-xs">
          {/* Intro */}
          <div className="p-4 bg-[#F5EFEB] rounded-2xl border border-[#E7DFD5] space-y-1">
            <div className="flex items-center gap-2 text-[#8E2827] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>The 100% Pure Handloom Guarantee</span>
            </div>
            <p className="text-[#655750] leading-relaxed">
              Every garment sold on Vexo is crafted exclusively from natural, unadulterated plant and silkworm fibers. We never use synthetic nylon or polyester mixtures. Each order includes a verified Silk Mark hologram tag.
            </p>
          </div>

          {/* Fabric Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {fabrics.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFabric(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedFabric === f.id
                    ? 'bg-[#8E2827] text-white border-[#8E2827] shadow-xs'
                    : 'bg-white text-[#5D5049] border-[#E7DFD5] hover:border-[#8E2827]'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Active Fabric Deep Dive */}
          <div className="p-5 bg-white rounded-2xl border border-[#E7DFD5] space-y-4 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7DFD5] pb-3">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#241E1C]">{current.name}</h4>
                <p className="text-[#8C7A6B]">Origin: <strong>{current.origin}</strong> · Loom: <strong>{current.loom}</strong></p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E7DFD5] text-[#8E2827] font-semibold text-xs max-w-fit">
                {current.touchFeel}
              </span>
            </div>

            <p className="text-sm text-[#4A3E39] leading-relaxed">
              {current.desc}
            </p>

            <div>
              <h5 className="font-bold text-[#241E1C] mb-2">Hallmarks of Authenticity:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-[#FAF7F2] rounded-lg text-[#5D5049]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9822B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to test pure silk at home */}
          <div className="p-4 bg-white rounded-2xl border border-[#E7DFD5] space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#241E1C] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#8E2827]" />
              <span>The Ancient Handloom Burn Test</span>
            </h4>
            <p className="text-[#655750] leading-relaxed">
              Genuine silk burns slowly, smells like singed hair (due to natural keratin protein), and leaves behind a soft, crushable black ash. Synthetic polyester melts rapidly with a hard chemical bead and black toxic smoke. Vexo welcomes you to test any spare fringe thread from your parcel!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#655750]">
            Every Vexo weave carries a verified Silk Mark hologram and GI certification card.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onExploreHandlooms && (
              <button
                onClick={() => {
                  onClose();
                  onExploreHandlooms();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#7A1D1D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#5E1414] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Explore Certified Handlooms</span>
                <span>→</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-[#241E1C] text-white text-xs font-semibold hover:bg-[#3D332F] transition-colors cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
