import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Code2, 
  Layers, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

import slideImgPlatform from '../assets/images/hero_digital_platform_1791704954352.jpg';
import slideImgDesign from '../assets/images/hero_design_systems_1791704967141.jpg';
import slideImgInfra from '../assets/images/hero_tech_infrastructure_1791693843299.jpg';

interface HeroProps {
  onBookScoping: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookScoping, onExploreSolutions }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Carousel images that rotate, while the headline and text remain stable
  const carouselImages = [
    {
      src: slideImgPlatform,
      caption: 'Full-Stack Web Engineering & Fast Digital Platforms',
      badge: 'React 19 · Next.js · Modern APIs'
    },
    {
      src: slideImgDesign,
      caption: 'Design Systems & Cohesive Figma-to-Code Tokens',
      badge: 'Figma Tokens · 100% Visual Consistency'
    },
    {
      src: slideImgInfra,
      caption: 'Reliable Cloud Infrastructure & Managed Maintenance',
      badge: '99.98% Uptime · Proactive Backups'
    }
  ];

  // Auto-advance images every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const currentImg = carouselImages[currentImageIndex];

  return (
    <section 
      className="relative pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden bg-[#140905]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle warm ambient lighting */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[320px] bg-[#ff6a00]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-1/4 translate-x-1/3 w-[450px] h-[300px] bg-[#00d2b4]/08 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Stable, Humanized Headline & Copy (Does NOT change) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs text-[#00d2b4] font-medium tracking-wide uppercase mb-4">
              <span className="w-5 h-0.5 bg-[#ff6a00]" />
            </div>

            {/* Captivating Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-xs font-semibold text-[#ff6a00] mb-5 self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Technology. Limitless Possibilities.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.14] mb-6 [text-wrap:balance]">
              Simple Systems That Help Creative & Tech Teams Launch Faster
            </h1>

            {/* Humanized Value Proposition */}
            <p className="text-base sm:text-lg text-[#e5d8cf] leading-relaxed max-w-2xl mb-8">
              From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
            </p>

            {/* CTAs (ONLY Start Your Project & Explore The System - NO WhatsApp button here) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onBookScoping}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] active:scale-[0.98] transition-all rounded-lg shadow-lg shadow-[#ff6a00]/25 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#fdf8f5] hover:text-white bg-[#1e100a] hover:bg-[#28150d] border border-[#3d2216] transition-all rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]"
              >
                <span>Explore The System</span>
              </button>
            </div>

            {/* Authentic Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#d6c7be] pt-3 border-t border-[#3d2216]">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#ff6a00]" />
                <span>Pixel-Perfect Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00d2b4]" />
                <span>Modular Design Tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                <span>Zero Handoff Frustration</span>
              </div>
            </div>

          </div>

          {/* Right Column: Carousel where ONLY the image changes */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3d2216] bg-[#1e100a] shadow-2xl group">
              
              {/* Carousel Image Container */}
              <div className="relative h-80 sm:h-96 lg:h-[450px] w-full overflow-hidden">
                {carouselImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.caption}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      currentImageIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ))}

                {/* Subtle Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140905] via-[#140905]/30 to-transparent opacity-85" />

                {/* Caption Bar for the Active Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#140905]/95 border border-[#3d2216] backdrop-blur-md shadow-xl transition-all">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-[#00d2b4] font-semibold">{currentImg.badge}</span>
                    <span className="text-[#a89587]">0{currentImageIndex + 1} / 0{carouselImages.length}</span>
                  </div>
                  <div className="text-xs text-white font-medium">
                    {currentImg.caption}
                  </div>
                </div>

                {/* Previous / Next Arrow Controls */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20">
                  <button
                    onClick={prevImage}
                    className="w-8 h-8 rounded-lg bg-[#140905]/80 hover:bg-[#140905] border border-[#3d2216] text-[#d6c7be] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="w-8 h-8 rounded-lg bg-[#140905]/80 hover:bg-[#140905] border border-[#3d2216] text-[#d6c7be] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 z-20">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === idx ? 'w-6 bg-[#ff6a00]' : 'w-2 bg-[#ffffff]/40 hover:bg-white'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Humanized Metric Strip */}
        <div className="mt-14 pt-10 border-t border-[#3d2216] grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="p-4 rounded-xl bg-[#1e100a] border border-[#3d2216]">
            <div className="text-2xl sm:text-3xl font-bold text-[#ff6a00] font-mono tabular-nums tracking-tight">
              180+
            </div>
            <div className="text-xs sm:text-sm text-[#e5d8cf] mt-1 font-medium">
              Digital Projects Delivered
            </div>
            <div className="text-[11px] text-[#00d2b4] mt-1 font-mono">
              Web platforms & brand systems
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1e100a] border border-[#3d2216]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
              3.4x
            </div>
            <div className="text-xs sm:text-sm text-[#e5d8cf] mt-1 font-medium">
              Faster Launch Velocity
            </div>
            <div className="text-[11px] text-[#ff6a00] mt-1 font-mono">
              Via reusable component tokens
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1e100a] border border-[#3d2216]">
            <div className="text-2xl sm:text-3xl font-bold text-[#00d2b4] font-mono tabular-nums tracking-tight">
              99.98%
            </div>
            <div className="text-xs sm:text-sm text-[#e5d8cf] mt-1 font-medium">
              Managed System Uptime
            </div>
            <div className="text-[11px] text-[#d6c7be] mt-1 font-mono">
              Proactive monitoring & care
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1e100a] border border-[#3d2216]">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
              &lt; 4 Hours
            </div>
            <div className="text-xs sm:text-sm text-[#e5d8cf] mt-1 font-medium">
              Average Support Response
            </div>
            <div className="text-[11px] text-[#ff6a00] mt-1 font-mono">
              Direct engineering desk in Nairobi
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
