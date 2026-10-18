import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`fox-brand inline-flex items-center gap-2 sm:gap-3 ${className}`}>
    <img src="/fox-tech-symbol.png?v=transparent" alt="" className="fox-brand-symbol" />
    <span className="flex flex-col items-start gap-1.5">
      <span className="fox-brand-name whitespace-nowrap text-xs font-bold leading-none min-[380px]:text-sm sm:text-[1.4rem] xl:text-2xl">
        <span className="text-[#ff7900]">FOX TECH</span>{' '}<span className="text-[#ffc17a]">SOLUTIONS</span>
      </span>
      <span className="fox-brand-tagline whitespace-nowrap text-[10px] font-semibold leading-snug tracking-[0.015em] text-[#ffe0bb] min-[380px]:text-[11px] sm:text-sm">
        Smart Tech. Limitless Possibilities
      </span>
    </span>
  </span>
);
