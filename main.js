class ScrollManager {
    constructor() {
      this.initLenis();
      this.initSmoothScroll();
    }
    initLenis() {
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href').slice(1);
          const target = document.getElementById(targetId);
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        });
      });
    }
  }
  document.addEventListener('DOMContentLoaded', () => new ScrollManager());





  document.querySelectorAll('[data-lenis-prevent]').forEach((el) => {
  el.addEventListener('wheel', (e) => {
    e.stopPropagation(); // Prevent body scroll
  }, { passive: false });
});
