import React from 'react';

interface FoxTechLogoProps {
  className?: string;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ className = '' }) => (
  <img
    src="/fox-tech-wordmark.png"
    alt="Fox Tech Solutions"
    className={`h-[4.5rem] w-[6.75rem] object-contain sm:h-20 sm:w-[7.5rem] ${className}`}
  />
);
