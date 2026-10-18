import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`fox-brand inline-flex items-center gap-2 sm:gap-4 ${className}`}>
    <img src="/fox-tech-symbol.png?v=transparent" alt="" className="fox-brand-symbol" />
    <span className="flex flex-col items-start gap-1">
      <span className="text-xs min-[380px]:text-sm font-bold tracking-[0.04em] text-[#ff8a32] bg-gradient-to-r from-[#ff8a32] via-[#ffb15c] to-[#36ddcf] bg-clip-text [-webkit-text-fill-color:transparent] sm:text-xl">FOX TECH SOLUTIONS</span>
      <span className="fox-brand-tagline inline-flex max-w-[10rem] flex-wrap gap-x-1 text-[11px] font-bold leading-snug tracking-wide text-[#ffe0a3] min-[380px]:text-xs sm:max-w-none sm:text-sm">
        <span>Smart Tech.</span><span className="whitespace-nowrap">Limitless Possibilities</span>
      </span>
    </span>
  </span>
);
