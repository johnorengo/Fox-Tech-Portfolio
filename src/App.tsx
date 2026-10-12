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

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'security' | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!revealTargets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    const observeNode = (node: Node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches('[data-reveal]')) observer.observe(node);
      node.querySelectorAll<HTMLElement>('[data-reveal]').forEach((target) => observer.observe(target));
    };
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach(observeNode));
    });

    document.documentElement.classList.add('scroll-reveals-ready');
    revealTargets.forEach((target) => observer.observe(target));
    mutationObserver.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove('scroll-reveals-ready');
    };
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = () => {
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#140905] text-[#fdf8f5] selection:bg-[#ff6a00]/30 selection:text-white">
      <ScrollProgress />
      <a
        href="#main-content"
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
    </div>
  );
}
