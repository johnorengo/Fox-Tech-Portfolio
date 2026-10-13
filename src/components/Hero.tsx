import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Layers,
  CheckCircle2,
} from 'lucide-react';

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
    caption: 'Digital products built by people who care about the details',
  },
  {
    src: productDesigner,
    alt: 'Kenyan product designer reviewing a digital interface at her workstation',
    caption: 'Thoughtful design that makes technology easier to use',
  },
  {
    src: infrastructureEngineer,
    alt: 'Kenyan infrastructure engineer inspecting servers with a tablet',
    caption: 'Reliable infrastructure for the systems your business depends on',
  },
  {
    src: clientReview,
    alt: 'Kenyan business owner and technology consultant reviewing a platform together',
    caption: 'Technology shaped around the people and businesses it serves',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookScoping }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % carouselImages.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setCurrentImageIndex((index) => (index - 1 + carouselImages.length) % carouselImages.length);
  };

  const showNext = () => {
    setCurrentImageIndex((index) => (index + 1) % carouselImages.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#140905] pt-3 pb-20 md:pt-5 md:pb-24"
      aria-label="Fox Tech Solutions introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
      }}
    >
      <div className="relative isolate min-h-[650px] overflow-hidden border-y border-[#3d2216] sm:min-h-[700px] lg:min-h-[690px]">
        {carouselImages.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={index === currentImageIndex ? slide.alt : ''}
            aria-hidden={index !== currentImageIndex}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover object-[68%_center] transition-opacity duration-500 md:object-center ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#100805]/95 via-[#100805]/75 to-[#100805]/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140905]/80 via-transparent to-[#140905]/15" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-4 pb-24 pt-16 sm:min-h-[700px] sm:px-6 sm:pb-28 lg:min-h-[690px] lg:px-8">
          <div className="max-w-3xl">
            <h1 data-reveal="left" className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl md:text-6xl lg:text-7xl">
              Simple Systems That Help Creative &amp; Tech Teams Launch Faster
            </h1>

            <p data-reveal="rise" data-reveal-delay="1" className="mt-6 max-w-2xl text-base leading-relaxed text-[#f0e5df] sm:text-lg md:text-xl">
              From your first website to custom business software, we turn ideas and everyday business challenges into reliable digital solutions. We help businesses in Kenya, across Africa, and around the world work smarter, serve customers better, and grow with confidence.
            </p>

            <div data-reveal="rise" data-reveal-delay="2" className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                onClick={onBookScoping}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#f25c05] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff6a00]/25 transition-all hover:from-[#ff7a1a] hover:to-[#ff6a00] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4] sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-white/90">Nairobi-based team · Clients everywhere</span>
            </div>

            <div data-reveal="rise" data-reveal-delay="3" className="mt-10 flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs text-[#f0e5df] sm:text-sm">
              <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-[#ff8a32]" /><span>Pixel-Perfect Implementation</span></div>
              <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-[#00d2b4]" /><span>Modular Design Systems</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#ff8a32]" /><span>Clear, Reliable Delivery</span></div>
            </div>
          </div>

          <div className="absolute bottom-5 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-7 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
            <p aria-live="polite" className="max-w-xl text-xs font-medium text-white/90 drop-shadow sm:text-sm">{carouselImages[currentImageIndex].caption}</p>
            <div className="flex shrink-0 items-center gap-2">
              <div className="mr-1 hidden items-center gap-1.5 sm:flex" aria-label={`Slide ${currentImageIndex + 1} of ${carouselImages.length}`}>
                {carouselImages.map((slide, index) => (
                  <button
                    key={slide.src}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={currentImageIndex === index ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all ${currentImageIndex === index ? 'w-7 bg-[#ff6a00]' : 'w-2 bg-white/55 hover:bg-white'}`}
                  />
                ))}
              </div>
              <button onClick={showPrevious} aria-label="Previous hero image" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={showNext} aria-label="Next hero image" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-14 lg:grid-cols-4 lg:px-8">
        <div data-reveal="rise" data-reveal-delay="1" className="rounded-xl border border-[#3d2216] bg-[#1e100a] p-4">
          <div className="font-mono text-2xl font-bold tracking-tight text-[#ff6a00] sm:text-3xl">180+</div>
          <div className="mt-1 text-xs font-medium text-[#e5d8cf] sm:text-sm">Digital Projects Delivered</div>
          <div className="mt-1 text-[11px] font-mono text-[#00d2b4]">Web platforms &amp; brand systems</div>
        </div>
        <div data-reveal="rise" data-reveal-delay="2" className="rounded-xl border border-[#3d2216] bg-[#1e100a] p-4">
          <div className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">3.4x</div>
          <div className="mt-1 text-xs font-medium text-[#e5d8cf] sm:text-sm">Faster Launch Velocity</div>
          <div className="mt-1 text-[11px] font-mono text-[#ff6a00]">Via reusable components</div>
        </div>
        <div data-reveal="rise" data-reveal-delay="3" className="rounded-xl border border-[#3d2216] bg-[#1e100a] p-4">
          <div className="font-mono text-2xl font-bold tracking-tight text-[#00d2b4] sm:text-3xl">99.98%</div>
          <div className="mt-1 text-xs font-medium text-[#e5d8cf] sm:text-sm">Managed System Uptime</div>
          <div className="mt-1 text-[11px] font-mono text-[#d6c7be]">Proactive monitoring &amp; care</div>
        </div>
        <div data-reveal="rise" data-reveal-delay="4" className="rounded-xl border border-[#3d2216] bg-[#1e100a] p-4">
          <div className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">&lt; 4 Hours</div>
          <div className="mt-1 text-xs font-medium text-[#e5d8cf] sm:text-sm">Average Support Response</div>
          <div className="mt-1 text-[11px] font-mono text-[#ff6a00]">Direct engineering desk in Nairobi</div>
        </div>
      </div>
    </section>
  );
};
