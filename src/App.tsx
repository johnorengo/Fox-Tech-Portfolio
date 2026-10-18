import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { LaunchSystemDemo } from './components/LaunchSystemDemo.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { About } from './components/About.tsx';
import { ContactScoping } from './components/ContactScoping.tsx';
import { Footer } from './components/Footer.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ScrollProgress } from './components/ScrollProgress.tsx';
import { BackToTop } from './components/BackToTop';
import { clearSectionHash, scrollToSection } from './scrollToSection';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'security' | null>(null);

  useEffect(() => {
    // Existing shared section links still reach their destination, then show a clean URL.
    const handleSectionHash = () => {
      const fragment = window.location.hash.slice(1);
      if (!fragment) return;
      let id = '';
      try { id = decodeURIComponent(fragment); } catch { /* Ignore malformed fragments. */ }
      clearSectionHash();
      if (document.getElementById(id)) scrollToSection(id);
    };
    handleSectionHash();
    window.addEventListener('hashchange', handleSectionHash);
    return () => window.removeEventListener('hashchange', handleSectionHash);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('is-revealed');
        } else if (!target.contains(document.activeElement)) {
          // Reset only outside the screen, so reading and interacting never flickers.
          target.style.setProperty('--reveal-offset', entry.boundingClientRect.bottom <= 0 ? '-16px' : '16px');
          target.classList.remove('is-revealed');
        }
      });
    }, { threshold: 0, rootMargin: '0px' });

    const observeNode = (node: Node) => {
      if (!(node instanceof HTMLElement)) return;
      const targets = [
        ...(node.matches('[data-reveal]') ? [node] : []),
        ...node.querySelectorAll<HTMLElement>('[data-reveal]'),
      ];
      targets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) target.classList.add('is-revealed');
        observer.observe(target);
      });
    };

    observeNode(document.getElementById('root') ?? document.body);
    document.documentElement.classList.add('scroll-reveals-ready');
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach(observeNode));
    });
    mutationObserver.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove('scroll-reveals-ready');
    };
  }, []);
  const scrollToContact = () => {
    scrollToSection('contact');
  };

  const handleSelectService = () => {
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#140905] text-[#fdf8f5] selection:bg-[#ff6a00]/30 selection:text-white">
      <ScrollProgress />
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus({ preventScroll: true });
          scrollToSection('hero');
        }}
        className="sr-only z-[100] rounded-md bg-[#140905] px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2 focus:ring-[#00d2b4]"
      >
        Skip to main content
      </a>
      {/* Navigation */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Main Page Flow */}
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero Section with foxtechsolution.com authentic tagline */}
        <Hero onBookScoping={scrollToContact} />

        {/* 2. Core Services (Branding & UI/UX, Web Dev, Growth Marketing, Support) */}
        <Services onSelectService={handleSelectService} />

        {/* 3. The Launch System Interactive Comparison & Workflow */}
        <LaunchSystemDemo />

        {/* 4. Case Studies & Measurable Growth Impact */}
        <CaseStudies />

        {/* 5. About & Philosophy (Calm Systems, Design-to-Code) */}
        <About />

        {/* 6. Contact & Estimated Engagement Pod */}
        <ContactScoping />
      </main>

      {/* Footer with official contact coordinates */}
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Legal & Compliance Modal */}
      <LegalModal 
        type={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
