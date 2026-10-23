// Progressive UI enhancements. Study functionality remains in app.js.
'use strict';
(() => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('#readingProgress');
  const nav = document.querySelector('#navigation');
  const menu = document.querySelector('#menuToggle');
  const updateScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, window.scrollY / max * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();

  // Close the mobile menu with Escape or after clicking outside it.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
  function closeMenu() {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }

  if (!('IntersectionObserver' in window)) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const activeObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        const current = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => activeObserver.observe(section));

  // Do not hide content for visitors who prefer reduced motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const revealItems = document.querySelectorAll('.feature-card, .step-card, .section-heading, .bottom-cta');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.09 });
  revealItems.forEach(item => { item.classList.add('reveal'); revealObserver.observe(item); });
})();
