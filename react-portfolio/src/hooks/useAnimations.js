import { useEffect, useRef } from 'react';

export const useAnimations = (gsap, ScrollTrigger) => {
  const initAnimations = () => {
    if (!gsap || !ScrollTrigger) return;

    // Hero intro animations
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
      gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7, delay: 0.05, ease: 'power2.out' });
      gsap.to('.hero-eyebrow', { opacity: 1, duration: 0.7, delay: 0.1 });
      gsap.to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, delay: 0.55, ease: 'power2.out' });
      gsap.to('.hero-cta', { opacity: 1, duration: 0.8, delay: 0.75 });
      gsap.to('.hero-stats', { opacity: 1, duration: 0.8, delay: 0.95 });
      gsap.to('.hero-scroll', { opacity: 1, duration: 1, delay: 1.5 });
    }

    // Stats counters
    document.querySelectorAll('.stat-n[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const state = { val: 0 };
      gsap.to(state, {
        val: target,
        duration: 2,
        delay: 1.1,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = `${Math.round(state.val)}+`;
        }
      });
    });

    // Fade animations
    document.querySelectorAll('[data-fade]').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Split text animations
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (el.id === 'hero-title') return;
      const text = el.textContent;
      const words = text.split(' ');
      el.innerHTML = words.map(word => `<span class="split-word"><span class="split-word-inner">${word}</span></span>`).join(' ');
      
      const wordInners = el.querySelectorAll('.split-word-inner');
      gsap.fromTo(
        wordInners,
        { y: '105%' },
        {
          y: 0,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Skill bars
    document.querySelectorAll('.skbar-fill').forEach((fill) => {
      const width = fill.dataset.w;
      gsap.fromTo(
        fill,
        { width: '0%' },
        {
          width: `${width}%`,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: fill.closest('.skbar'),
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Scroll progress bar
    gsap.fromTo('#scroll-prog', { scaleX: 0 }, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set('#scroll-prog', { scaleX: self.getVelocity() > 0 ? 1 : 0 })
        }
      }
    });
  };

  return { initAnimations };
};
