import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`inline-flex flex-col items-center ${className}`}>
    <img
      src="/fox-tech-wordmark.png"
      alt="Fox Tech Solutions"
      className="h-[4.5rem] w-[6.75rem] object-contain sm:h-20 sm:w-[7.5rem]"
    />
    <span className="mt-1 whitespace-nowrap text-[10px] font-semibold leading-tight tracking-wide text-[#ff8a3d] sm:text-[11px]">
      Smart Tech. Limitless Possibilities
    </span>
  </span>
);
