import React from 'react';

interface FoxTechLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const FoxTechLogo: React.FC<FoxTechLogoProps> = ({ 
  className = '', 
  showWordmark = true,
  size = 'md',
  showTagline = true
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl'
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Leaping Fox Icon with Organic Forebody & Polygonal Teal Tail */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <svg 
          viewBox="0 0 100 65" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(255,106,0,0.25)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="fox-gradient-body" x1="10" y1="25" x2="55" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="40%" stopColor="#FF6A00" />
              <stop offset="80%" stopColor="#FFA000" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>

            <linearGradient id="fox-mesh-gradient" x1="45" y1="25" x2="98" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#00D2B4" />
            </linearGradient>
          </defs>

          {/* Organic Front Body */}
          <path 
            d="M5 22 C12 18 20 12 26 8 C27 4 28 1 30 0 C32 2 32 8 34 10 C40 13 49 16 55 17 L48 30 C41 29 33 29 29 31 C25 33 22 40 19 43 C17 44 15 44 14 42 C13 39 17 35 20 32 C15 33 11 31 8 24 L5 22 Z" 
            fill="url(#fox-gradient-body)" 
          />

          {/* Bright White Chest and Jaw Streak */}
          <path 
            d="M5 22 C12 20 19 19 24 16 C22 20 19 24 24 25 C30 26 39 21 45 22 L42 27 C36 28 28 29 24 33 C21 36 19 39 16 40 C15 37 17 34 21 30 C16 30 12 28 5 22 Z" 
            fill="#FFFFFF" 
          />

          {/* Dark Snout & Ear Accent */}
          <circle cx="5" cy="22" r="1.3" fill="#2A0E05" />
          <path d="M29 3 L30 8 L28 7 Z" fill="#E64A19" />

          {/* Polygonal Wireframe Mesh (Tail & Hindquarters) */}
          <g stroke="url(#fox-mesh-gradient)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="48" y1="17" x2="56" y2="10" />
            <line x1="56" y1="10" x2="65" y2="13" />
            <line x1="65" y1="13" x2="75" y2="20" />
            <line x1="75" y1="20" x2="85" y2="26" />
            <line x1="85" y1="26" x2="96" y2="32" />

            <line x1="48" y1="30" x2="58" y2="30" />
            <line x1="58" y1="30" x2="68" y2="33" />
            <line x1="68" y1="33" x2="79" y2="34" />
            <line x1="79" y1="34" x2="96" y2="32" />

            <line x1="48" y1="17" x2="58" y2="30" />
            <line x1="56" y1="10" x2="58" y2="30" />
            <line x1="56" y1="10" x2="68" y2="22" />
            <line x1="65" y1="13" x2="68" y2="22" />
            <line x1="58" y1="30" x2="68" y2="22" />
            <line x1="58" y1="30" x2="68" y2="33" />

            <line x1="68" y1="22" x2="75" y2="20" />
            <line x1="68" y1="22" x2="77" y2="28" />
            <line x1="68" y1="33" x2="77" y2="28" />
            <line x1="68" y1="33" x2="79" y2="34" />

            <line x1="75" y1="20" x2="85" y2="26" />
            <line x1="75" y1="20" x2="77" y2="28" />
            <line x1="77" y1="28" x2="85" y2="26" />
            <line x1="77" y1="28" x2="86" y2="33" />
            <line x1="79" y1="34" x2="86" y2="33" />

            <line x1="85" y1="26" x2="96" y2="32" />
            <line x1="86" y1="33" x2="96" y2="32" />
            <line x1="85" y1="26" x2="86" y2="33" />

            <line x1="58" y1="30" x2="61" y2="39" />
            <line x1="61" y1="39" x2="69" y2="37" />
            <line x1="69" y1="37" x2="68" y2="33" />
            <line x1="58" y1="30" x2="69" y2="37" />
          </g>

          {/* Glowing Constellation Vertex Points */}
          <g fill="#FF8F00">
            <circle cx="48" cy="17" r="1.3" />
            <circle cx="56" cy="10" r="1.4" />
            <circle cx="48" cy="30" r="1.3" />
            <circle cx="58" cy="30" r="1.4" />
            <circle cx="61" cy="39" r="1.2" />
          </g>
          <g fill="#F59E0B">
            <circle cx="65" cy="13" r="1.4" />
            <circle cx="68" cy="22" r="1.5" />
            <circle cx="68" cy="33" r="1.4" />
            <circle cx="69" cy="37" r="1.2" />
          </g>
          <g fill="#10B981">
            <circle cx="75" cy="20" r="1.4" />
            <circle cx="77" cy="28" r="1.5" />
            <circle cx="79" cy="34" r="1.4" />
          </g>
          <g fill="#00D2B4">
            <circle cx="85" cy="26" r="1.5" />
            <circle cx="86" cy="33" r="1.4" />
            <circle cx="96" cy="32" r="1.8" />
          </g>
        </svg>
      </div>

      {/* Brand Typography & Captivating Tagline underneath */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className={`font-extrabold text-[#FF6A00] tracking-tight uppercase ${textSizes[size]}`}>
              Fox Tech
            </span>
            <span className={`font-semibold text-[#D6C7BE] uppercase ${subtextSizes[size]}`}>
              Solutions
            </span>
          </div>
          {showTagline && (
            <span className="text-[10px] sm:text-[11px] font-medium text-[#00d2b4] tracking-normal mt-1 leading-tight">
              Smart Technology. Limitless Possibilities.
            </span>
          )}
        </div>
      )}
    </div>
  );
};
