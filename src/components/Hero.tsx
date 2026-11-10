import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import engineeringTeam from '../assets/images/hero-v2-engineering-team-desktop.webp';
import engineeringTeamMobile from '../assets/images/hero-v2-engineering-team-mobile.webp';
import productDesigner from '../assets/images/hero-v4-product-designer-desktop.webp';
import productDesignerMobile from '../assets/images/hero-v4-product-designer-mobile.webp';
import infrastructureEngineer from '../assets/images/hero-v2-infrastructure-engineer-desktop.webp';
import infrastructureEngineerMobile from '../assets/images/hero-v2-infrastructure-engineer-mobile.webp';
import clientReview from '../assets/images/hero-v3-client-kicc-desktop.webp';
import clientReviewMobile from '../assets/images/hero-v3-client-kicc-mobile.webp';
import engineeringTeamTablet from '../assets/images/hero-tablet-team.webp';
import productDesignerTablet from '../assets/images/hero-v4-product-designer-tablet.webp';
import infrastructureEngineerTablet from '../assets/images/hero-tablet-infrastructure.webp';
import clientReviewTablet from '../assets/images/hero-tablet-kicc.webp';

interface HeroProps {
  onBookScoping: () => void;
}

const carouselImages = [
  {
    src: clientReview,
    mobileSrc: clientReviewMobile,
    tabletSrc: clientReviewTablet,
    alt: 'Kenyan business owner and technology consultant with the KICC tower clearly visible through the Nairobi office windows',
  },
  {
    src: engineeringTeam,
    mobileSrc: engineeringTeamMobile,
    tabletSrc: engineeringTeamTablet,
    alt: 'Kenyan technology team collaborating around a laptop in a Nairobi office',
  },
  {
    src: productDesigner,
    mobileSrc: productDesignerMobile,
    tabletSrc: productDesignerTablet,
    alt: 'Kenyan product designer reviewing a digital interface at her workstation',
  },
  {
    src: infrastructureEngineer,
    mobileSrc: infrastructureEngineerMobile,
    tabletSrc: infrastructureEngineerTablet,
    alt: 'Kenyan infrastructure engineer inspecting servers with a tablet',
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
      id="hero"
      className="hero-section relative overflow-hidden bg-[#140905]"
      aria-label="Fox Tech Solutions introduction"
    >
      <div className="hero-stage relative isolate overflow-hidden">
        <div className="hero-photography absolute inset-0" aria-hidden="true">
          {carouselImages.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <picture className="hero-image-frame absolute inset-x-0 bottom-0">
              <source media="(min-width: 768px) and (orientation: portrait)" srcSet={slide.tabletSrc} />
              <source media="(orientation: portrait)" srcSet={slide.mobileSrc} />
              <img
                src={slide.src}
                alt=""
                width={1672}
                height={941}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding="async"
                className="hero-photo h-full w-full object-cover"
              />
              </picture>
            </div>
          ))}
        </div>
        <div className="hero-shade absolute inset-0" aria-hidden="true" />
        <div className="hero-content relative mx-auto flex max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white [text-wrap:balance] sm:text-4xl lg:text-[2.65rem]">
            Simple Systems That Help Creative &amp; Tech Teams Launch Faster
          </h1>
          <div className="hero-action-row mt-5 grid gap-5 border-t border-white/15 pt-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10 lg:pr-20">
            <p className="max-w-3xl text-sm leading-relaxed text-[#f0e5df] sm:text-base">
              From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
            </p>
            <button
              onClick={onBookScoping}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 justify-self-start whitespace-nowrap rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#ff6a00]/25 transition hover:from-[#ff7a1a] hover:to-[#ff6a00] focus-visible:ring-2 focus-visible:ring-[#00d2b4] sm:w-auto"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
