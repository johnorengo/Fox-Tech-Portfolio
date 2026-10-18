import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`fox-brand inline-flex items-center gap-2 sm:gap-4 ${className}`}>
    <img src="/fox-tech-symbol.png" alt="" className="fox-brand-symbol" />
    <span className="flex flex-col items-start gap-1">
      <span className="text-xs min-[380px]:text-sm font-bold tracking-[0.04em] text-white sm:text-xl">FOX TECH SOLUTIONS</span>
      <span className="text-[8px] min-[380px]:text-[9px] font-medium leading-relaxed text-[#ff9a57] sm:text-xs">
        Smart Tech. Limitless Possibilities
      </span>
    </span>
  </span>
);
