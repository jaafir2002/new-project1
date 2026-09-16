import React from 'react';
import { motion } from 'motion/react';

interface BouncingNavButtonProps {
  id?: string;
  onClick: () => void;
  isActive?: boolean;
  activeVariant?: 'ruby' | 'noir' | 'gold';
  variant?: 'default' | 'karigar' | 'guide';
  layout?: 'pill' | 'block';
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  badge?: string;
  className?: string;
}

export const BouncingNavButton: React.FC<BouncingNavButtonProps> = ({
  id,
  onClick,
  isActive = false,
  activeVariant = 'ruby',
  variant = 'default',
  layout = 'pill',
  children,
  icon,
  title,
  badge,
  className = ''
}) => {
  // Styling logic for pill (horizontal sub-nav) vs block (mobile drawer)
  let styleClasses = '';
  
  if (layout === 'pill') {
    if (variant === 'karigar') {
      styleClasses = 'bg-[#1A1412] text-[#E5C178] border-[#C89D56]/60 hover:bg-[#2A201D] shadow-2xs';
    } else if (variant === 'guide') {
      styleClasses = 'bg-[#FAF8F5] text-[#7A1D1D] border-[#C89D56]/60 hover:bg-[#F5EFEB] shadow-2xs';
    } else if (isActive) {
      if (activeVariant === 'ruby') {
        styleClasses = 'bg-[#7A1D1D] text-[#FAF7F2] border-[#C89D56]/70 shadow-xs font-bold';
      } else {
        styleClasses = 'bg-[#1A1412] text-[#E5C178] border-[#C89D56]/70 shadow-xs font-bold';
      }
    } else {
      styleClasses = 'text-[#4A3E39] hover:text-[#7A1D1D] hover:bg-[#F5EFEB] border-transparent';
    }
  } else {
    // Block style for mobile drawer
    if (variant === 'karigar') {
      styleClasses = 'bg-[#1A1412] text-[#E5C178] border-[#C89D56]/60 font-semibold';
    } else if (variant === 'guide') {
      styleClasses = 'bg-[#FAF8F5] text-[#7A1D1D] border-[#C89D56]/60 font-semibold';
    } else if (isActive) {
      styleClasses = activeVariant === 'ruby' 
        ? 'bg-[#7A1D1D] text-[#FAF7F2] border-[#C89D56]/70 font-bold'
        : 'bg-[#1A1412] text-[#E5C178] border-[#C89D56]/70 font-bold';
    } else {
      styleClasses = 'bg-white text-[#1A1412] border-[#E7DFD5] hover:border-[#7A1D1D] font-medium';
    }
  }

  const basePadding = layout === 'pill' 
    ? 'px-3 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs' 
    : 'px-3.5 py-2.5 rounded-xl text-xs w-full justify-between';

  return (
    <motion.button
      id={id}
      onClick={onClick}
      title={title}
      // Physics-based spring bounce on hover and tap
      whileHover={{ 
        scale: layout === 'pill' ? 1.05 : 1.02, 
        y: -2.5,
        transition: { type: 'spring', stiffness: 450, damping: 14 } 
      }}
      whileTap={{ 
        scale: 0.93, 
        y: 1.5,
        transition: { type: 'spring', stiffness: 550, damping: 10 } 
      }}
      animate={isActive ? {
        scale: [1, 1.07, 0.98, 1.02, 1],
        y: [0, -3, 1, -0.5, 0],
        transition: { 
          duration: 0.5, 
          type: 'spring', 
          stiffness: 400, 
          damping: 12 
        }
      } : {
        scale: 1,
        y: 0
      }}
      className={`relative whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 border select-none ${basePadding} ${styleClasses} ${className}`}
    >
      <span className="flex items-center gap-1.5">
        {/* Optional Icon with bouncy rotational physics */}
        {icon && (
          <motion.span
            animate={isActive ? { rotate: [0, -10, 10, -5, 0] } : { rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0"
          >
            {icon}
          </motion.span>
        )}

        {/* Button Label */}
        <span className="tracking-wider uppercase font-semibold">
          {children}
        </span>
      </span>

      {/* Active Golden Bouncing Star/Spark */}
      {isActive && (
        <motion.span
          animate={{ 
            scale: [1, 1.35, 1],
            rotate: [0, 45, 0],
            y: [0, -1.5, 0]
          }}
          transition={{ 
            duration: 1.6, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="text-[#E5C178] text-[10px] shrink-0 font-bold ml-1"
        >
          ✦
        </motion.span>
      )}

      {/* Optional micro bounce badge */}
      {badge && (
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="ml-1 px-1.5 py-0.2 rounded-full text-[8px] uppercase tracking-wider bg-[#C89D56] text-[#1A1412] font-extrabold"
        >
          {badge}
        </motion.span>
      )}

      {/* Trailing arrow for mobile block layouts */}
      {layout === 'block' && !isActive && (
        <motion.span 
          whileHover={{ x: 2 }}
          className="text-[#C89D56] text-[11px] font-bold"
        >
          →
        </motion.span>
      )}
    </motion.button>
  );
};
