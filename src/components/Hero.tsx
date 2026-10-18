import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import engineeringTeam from '../assets/images/hero-engineering-team.webp';
import productDesigner from '../assets/images/hero-product-designer.webp';
import infrastructureEngineer from '../assets/images/hero-infrastructure-engineer.webp';
import clientReview from '../assets/images/hero-client-review.webp';

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
      className="hero-section relative overflow-hidden bg-[#140905]"
      aria-label="Fox Tech Solutions introduction"
    >
      <div className="hero-stage relative isolate overflow-hidden">
        <div className="hero-photography absolute inset-x-0 top-0" aria-hidden="true">
          {carouselImages.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              className={`hero-photo w-full transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="hero-shade absolute inset-0" aria-hidden="true" />
        <div className="hero-content relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
          <h1 className="max-w-4xl text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white [text-wrap:balance] sm:text-4xl lg:text-[2.65rem]">
            Simple Systems That Help Creative &amp; Tech Teams Launch Faster
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#f0e5df] sm:text-base">
            From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
          </p>
          <button
            onClick={onBookScoping}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 self-start rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff6a00]/25 transition hover:from-[#ff7a1a] hover:to-[#ff6a00] focus-visible:ring-2 focus-visible:ring-[#00d2b4] sm:w-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </section>
  );
};
