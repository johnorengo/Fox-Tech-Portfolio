import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, ShieldCheck, Headphones } from 'lucide-react';

import engineeringTeam from '../assets/images/hero-engineering-team.png';
import productDesigner from '../assets/images/hero-product-designer.png';
import infrastructureEngineer from '../assets/images/hero-infrastructure-engineer.png';
import clientReview from '../assets/images/hero-client-review.png';

interface HeroProps {
  onBookScoping: () => void;
}

const carouselImages = [
  {
    src: engineeringTeam,
    alt: 'Kenyan technology team collaborating around a laptop in a Nairobi office',
  },
  {
    src: productDesigner,
    alt: 'Kenyan product designer reviewing a digital interface at her workstation',
  },
  {
    src: infrastructureEngineer,
    alt: 'Kenyan infrastructure engineer inspecting servers with a tablet',
  },
  {
    src: clientReview,
    alt: 'Kenyan business owner and technology consultant reviewing a platform together',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookScoping }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % carouselImages.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative overflow-hidden bg-[#140905] pt-3 pb-20 md:pt-5 md:pb-24 lg:pb-8"
      aria-label="Fox Tech Solutions introduction"
    >
      <div className="hero-desktop relative isolate hidden overflow-hidden border-y border-[#3d2216] sm:block">
        {carouselImages.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={index === currentImageIndex ? slide.alt : ''}
            aria-hidden={index !== currentImageIndex}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#100805]/90 via-[#100805]/75 to-[#100805]/35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140905]/80 via-transparent to-transparent" aria-hidden="true" />

        <div className="hero-desktop-content relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-8 lg:px-8 lg:py-6">
          <div className="flex w-full flex-col items-start gap-4">
            <h1 className="hero-desktop-title max-w-[820px] text-3xl font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance] lg:text-[2.65rem] xl:text-5xl">
              Simple Systems That Help Creative &amp; Tech Teams Launch Faster
            </h1>

            <div className="flex flex-col items-start">
              <p className="hero-desktop-description max-w-[820px] text-sm leading-relaxed text-[#f0e5df] lg:text-base">
                From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
              </p>
              <button
                onClick={onBookScoping}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff6a00]/25 transition-all hover:from-[#ff7a1a] hover:to-[#ff6a00] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>


          </div>

        </div>
      </div>

      <div className="relative isolate overflow-hidden border-y border-[#3d2216] bg-[#100805] sm:hidden">
        {carouselImages.map((slide, index) => (
          <React.Fragment key={slide.src}>
            <img
              src={slide.src}
              alt=""
              aria-hidden="true"
              fetchPriority={index === 0 ? 'high' : 'auto'}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className={`absolute inset-0 h-full w-full scale-110 object-cover blur-sm transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-45' : 'opacity-0'
              }`}
            />
            <img
              src={slide.src}
              alt={index === currentImageIndex ? slide.alt : ''}
              aria-hidden={index !== currentImageIndex}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-45' : 'opacity-0'
              }`}
            />
          </React.Fragment>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#100805]/90 via-[#100805]/70 to-[#100805]/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100805]/85 via-transparent to-[#100805]/30" aria-hidden="true" />

        <div className="relative z-10 px-4 py-7">
          <h1 data-reveal="left" className="max-w-[22rem] text-[1.8rem] font-bold leading-[1.04] tracking-tight text-white [text-wrap:balance]">
            Simple Systems That Help Creative &amp; Tech Teams Launch Faster
          </h1>
          <p data-reveal="rise" className="mt-4 max-w-xl text-sm leading-relaxed text-[#f0e5df]">
            From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
          </p>
          <button
            onClick={onBookScoping}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff6a00]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>

      <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:px-8" aria-label="Our performance at a glance">
        {[
          { value: '3.4', unit: 'x', label: 'Faster Launch Velocity', detail: 'Built with reusable components', icon: Zap, accent: '#ff8a32', glow: 'rgba(255,106,0,0.09)' },
          { value: '99.98', unit: '%', label: 'Managed System Uptime', detail: 'Proactive monitoring & care', icon: ShieldCheck, accent: '#00d2b4', glow: 'rgba(0,210,180,0.08)' },
          { value: '< 4', unit: 'hrs', label: 'Average Support Response', detail: 'Your engineering desk in Nairobi', icon: Headphones, accent: '#ffc28a', glow: 'rgba(255,194,138,0.07)' },
        ].map((stat, index) => (
          <div
            key={stat.label}
            data-reveal="rise"
            data-reveal-delay={String(index + 1)}
            className="relative overflow-hidden rounded-2xl border border-[#4a2c1d] px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[#79503a]"
            style={{ background: `radial-gradient(ellipse at top right, ${stat.glow}, transparent 75%), #1b0e08` }}
          >
            <div className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full" style={{ backgroundColor: stat.accent }} aria-hidden="true" />
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-[2rem] font-bold leading-none tracking-tight tabular-nums lg:text-4xl" style={{ color: stat.accent }}>
                {stat.value}<span className="ml-1 text-lg font-medium">{stat.unit}</span>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/5" style={{ color: stat.accent, backgroundColor: stat.glow }}>
                <stat.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-3 text-sm font-semibold text-[#f5e9e1]">{stat.label}</div>
            <div className="mt-1 text-xs leading-relaxed text-[#b9a69a]">{stat.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
