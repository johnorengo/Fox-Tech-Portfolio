import React, { useEffect, useRef } from 'react';

export const ScrollProgress: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.max(0, Math.min(progress, 1))})`;
        }
        const header = document.querySelector<HTMLElement>('.site-header');
        if (header) header.dataset.scrolled = String(window.scrollY > 16);
      });
    };

    const header = document.querySelector<HTMLElement>('.site-header');
    const updateHeaderHeight = () => {
      if (!header) return;
      const navigationHeight = Array.from(header.children).slice(0, 2)
        .reduce((height, row) => height + row.getBoundingClientRect().height, 0);
      document.documentElement.style.setProperty('--header-height', `${navigationHeight}px`);
    };
    const headerObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateHeaderHeight) : null;
    if (header) headerObserver?.observe(header);
    updateHeaderHeight();
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      headerObserver?.disconnect();
      document.documentElement.style.removeProperty('--header-height');
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-white/5">
      <div
        ref={progressRef}
        className="h-full origin-left bg-gradient-to-r from-[#ff6a00] via-[#ffad42] to-[#00d2b4] shadow-[0_0_12px_rgba(255,106,0,0.55)]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
