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
          progressRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
        }
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
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
