import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../scrollToSection';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 240);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => scrollToSection('hero', true)}
      aria-label="Back to top, return to the hero section"
      title="Back to top"
      className="fixed bottom-24 right-7 z-40 grid h-12 w-12 place-items-center rounded-full border border-[#ff9a57]/50 bg-[#ff6a00] text-white shadow-lg shadow-black/30 transition-colors hover:bg-[#ff8129] focus-visible:ring-2 focus-visible:ring-[#00d2b4]"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};
