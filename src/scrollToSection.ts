/** Align the section label 24px below the persistent navigation. */
export function scrollToSection(id: string, updateHash = false) {
  // Let React close the mobile menu before measuring and starting the scroll.
  requestAnimationFrame(() => {
    const section = document.getElementById(id);
    if (!section) return;
    const header = document.querySelector<HTMLElement>('.site-header');
    const headerHeight = header
      ? Array.from(header.children).slice(0, 2).reduce((height, row) => height + row.getBoundingClientRect().height, 0)
      : 0;
    const style = getComputedStyle(section);
    const contentInset = parseFloat(style.paddingTop) + parseFloat(style.borderTopWidth);
    const top = window.scrollY + section.getBoundingClientRect().top + contentInset - headerHeight - 24;
    if (updateHash && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`);
    }
    window.scrollTo({
      top: id === 'hero' ? 0 : Math.max(0, top),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  });
}
