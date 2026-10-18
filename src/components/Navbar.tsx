import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { FoxTechLogo } from './FoxTechLogo.tsx';
import { scrollToSection } from '../scrollToSection';
import { findActiveSection } from '../activeSection';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(href.slice(1), true);
  };

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const header = document.querySelector<HTMLElement>('.site-header');
        const headerHeight = header
          ? Array.from(header.children).slice(0, 2).reduce((height, row) => height + row.getBoundingClientRect().height, 0)
          : 0;
        const sections = ['services', 'system', 'case-studies', 'about', 'contact'].flatMap((id) => {
          const section = document.getElementById(id);
          return section ? [{ id, top: section.getBoundingClientRect().top }] : [];
        });
        setActiveSection(findActiveSection(sections, headerHeight + 32));
      });
    };
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateActiveSection) : null;
    const main = document.getElementById('main-content');
    const header = document.querySelector('.site-header');
    if (main) observer?.observe(main);
    if (header) observer?.observe(header);
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const directPhone = '+254797697319';
  const displayPhone = '+254 797 697 319';
  const directEmail = 'info@foxtechsolution.com';

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#system' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 w-full">
      {/* Top Utility Bar with Email in Full */}
      <div className="bg-black/35 border-b border-[#3d2216]/90 text-[11px] sm:text-xs text-[#d6c7be]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
          
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <div className="flex items-center gap-1.5 text-[#d6c7be]">
              <MapPin className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
              <span>Nairobi, Kenya</span>
            </div>
            <a href={`tel:${directPhone}`} className="flex items-center gap-1.5 hover:text-[#00d2b4] transition-colors font-mono">
              <Phone className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
              <span className="font-medium">{displayPhone}</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href={`mailto:${directEmail}`} className="flex items-center gap-1.5 hover:text-[#ff6a00] transition-colors font-mono">
              <Mail className="w-3.5 h-3.5 text-[#00d2b4] shrink-0" />
              <span className="font-medium">{directEmail}</span>
            </a>
            <span className="hidden whitespace-nowrap font-medium text-[#00d2b4] md:inline">East Africa Tech Hub</span>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#140905]/95 backdrop-blur-md border-b border-[#ff6a00]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-24 py-3 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark with Tagline Underneath */}
          <a 
            href="#hero"
            onClick={(event) => navigateToSection(event, '#hero')}
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] rounded-lg shrink-0"
            aria-label="Fox Tech Solutions Home"
          >
            <FoxTechLogo />
          </a>

          {/* Clean Nav Links */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#d6c7be]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#ff6a00] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Single Primary Action: Get a Quote (No WhatsApp button here) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] hover:from-[#ff7a1a] hover:to-[#ff6a00] active:scale-[0.98] transition-all rounded-lg shadow-md shadow-[#ff6a00]/25 whitespace-nowrap flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2b4]"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d6c7be] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a00] rounded-md"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile"
        hidden={!mobileMenuOpen}
        className="lg:hidden border-b border-[#3d2216] bg-[#1a0d07] px-4 pt-3 pb-6 space-y-3"
      >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                onClick={(event) => navigateToSection(event, link.href)}
                className="text-[#d6c7be] hover:text-white px-3 py-2 text-base font-medium rounded-md hover:bg-[#28150d]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#3d2216]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#ff6a00] to-[#f25c05] rounded-lg shadow-sm"
              >
                Get a Quote
              </button>
            </div>
          </div>
      </nav>
    </header>
  );
};
