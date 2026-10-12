import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <span className={`inline-flex flex-col items-start ${className}`}>
    <img
      src="/fox-tech-wordmark.png"
      alt="Fox Tech Solutions"
      className="h-12 w-36 object-contain object-left sm:h-14"
    />
    <span className="mt-0.5 whitespace-nowrap text-[8px] font-medium leading-tight tracking-wide text-[#ff6a00] sm:text-[9px]">
      Smart Technology. Limitless Possibilities.
    </span>
  </span>
);
