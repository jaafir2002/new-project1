import React from 'react';
import vexoLuxuryLogoImg from '../assets/images/vexo_luxury_logo_1789487962589.jpg';

interface VexoLogoProps {
  variant?: 'header' | 'hero' | 'footer' | 'compact' | 'modal';
  className?: string;
  showTagline?: boolean;
  lightMode?: boolean;
}

export const VexoLogo: React.FC<VexoLogoProps> = ({
  variant = 'header',
  className = '',
  showTagline = true,
  lightMode = false
}) => {
  // If variant is compact, show a luxury circular monogram medallion
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#C89D56]/60 shadow-[0_2px_8px_rgba(200,157,86,0.2)] bg-[#1A1412] shrink-0">
          <img
            src={vexoLuxuryLogoImg}
            alt="Vexo Royal Monogram"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-serif text-lg tracking-[0.25em] font-semibold text-[#1A1412]">
          VEXO
        </span>
      </div>
    );
  }

  // Footer / Dark variant
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-start gap-3 ${className}`}>
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C89D56]/80 shadow-[0_0_15px_rgba(200,157,86,0.35)] bg-[#151110] p-0.5 shrink-0">
            <img
              src={vexoLuxuryLogoImg}
              alt="Vexo Royal Insignia"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.28em] text-[#FAF7F2]">
                VEXO
              </span>
              <span className="text-[#C89D56] text-[10px] tracking-widest uppercase font-medium px-1.5 py-0.5 border border-[#C89D56]/40 rounded">
                Atelier
              </span>
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium mt-0.5">
              Haute Indian Handlooms
            </p>
          </div>
        </div>
        {showTagline && (
          <div className="flex items-center gap-2 text-[10px] text-[#A8988B] tracking-wider uppercase">
            <span>Varanasi</span>
            <span className="text-[#C89D56]">◆</span>
            <span>Kanchipuram</span>
            <span className="text-[#C89D56]">◆</span>
            <span>Chanderi</span>
          </div>
        )}
      </div>
    );
  }

  // Hero / Grand Emblem variant
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative mb-3 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#C89D56]/30 via-[#E5C178]/40 to-[#C89D56]/30 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C89D56] p-1 bg-[#1A1412] shadow-[0_4px_25px_rgba(200,157,86,0.35)] overflow-hidden">
            <img
              src={vexoLuxuryLogoImg}
              alt="Vexo Imperial Emblem"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C89D56]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C89D56] font-semibold">
            Bespoke Indian Heritage
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#C89D56]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.24em] font-bold text-[#1A1412] mt-1">
          VEXO
        </h2>

        {showTagline && (
          <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#7A6455] mt-1 font-medium">
            Royal Handloom Atelier · Estd. 1988
          </p>
        )}
      </div>
    );
  }

  // Header / Default variant (Balanced luxury lockup)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Luxury Medallion Crest */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C89D56]/80 p-0.5 bg-[#1A1412] shadow-[0_2px_12px_rgba(200,157,86,0.28)] shrink-0 transition-transform hover:scale-105">
        <img
          src={vexoLuxuryLogoImg}
          alt="Vexo Brand Crest"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.26em] font-bold text-[#1A1412] transition-colors leading-none">
            VEXO
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-semibold px-1 py-0.2 text-[#C89D56] border border-[#C89D56]/40 rounded-xs bg-[#C89D56]/5">
            HAUTE
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-[0.32em] text-[#8C7A6B] font-medium mt-1">
            Indian Ethnic Atelier
          </span>
        )}
      </div>
    </div>
  );
};
