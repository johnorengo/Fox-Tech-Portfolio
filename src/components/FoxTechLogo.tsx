import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`fox-brand inline-flex items-center gap-2 sm:gap-4 ${className}`}>
    <img src="/fox-tech-symbol.png?v=transparent" alt="" className="fox-brand-symbol" />
    <span className="flex flex-col items-start gap-1">
      <span className="text-xs min-[380px]:text-sm font-bold tracking-[0.04em] text-[#ff6a00] sm:text-xl">FOX TECH SOLUTIONS</span>
      <span className="fox-brand-tagline whitespace-nowrap text-[10px] font-bold leading-snug tracking-wide text-[#ff9a57] min-[380px]:text-[11px] sm:text-sm">
        Smart Tech. Limitless Possibilities
      </span>
    </span>
  </span>
);
