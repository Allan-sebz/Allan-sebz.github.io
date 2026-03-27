export class AnimationController {
  constructor(options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.ScrollTrigger = options.ScrollTrigger || window.ScrollTrigger;
    this.lenis = options.lenis || window.lenis;

    this.init();
  }

  init() {
    this._runHeroIntro();
    this._bindSplitAnimations();
    this._bindFadeAnimations();
    this._bindAboutAnimations();
    this._bindSkillBars();
    this._bindServiceStagger();
    this._bindTimelineAnimations();
    this._bindCertAnimations();
    this._bindHeroParallax();
    this._bindChipTilt();
    this._bindStatsCounters();
  }

  _splitWords(el) {
    const text = el.innerHTML;
    const parts = text.split(/<br\s*\/?>/i);
    el.innerHTML = parts
      .map((part) => {
        const words = part.split(' ').filter(Boolean);
        return words
          .map((word) => `<span class="split-word"><span class="split-word-inner">${word}</span></span>`)
          .join(' ');
      })
      .join('<br>');

    return el.querySelectorAll('.split-word-inner');
  }

  _runHeroIntro() {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return;

    const heroWords = this._splitWords(heroTitle);

    this.gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7, delay: 0.05, ease: 'power2.out' });
    this.gsap.to('.hero-eyebrow', { opacity: 1, duration: 0.7, delay: 0.1 });
    this.gsap.to(heroWords, { y: 0, duration: 0.9, stagger: 0.055, delay: 0.2, ease: 'power3.out' });
    this.gsap.to('.hero-sub', { opacity: 1, y: 0, duration: 0.9, delay: 0.55, ease: 'power2.out' });
    this.gsap.to('.hero-cta', { opacity: 1, duration: 0.8, delay: 0.75 });
    this.gsap.to('.hero-stats', { opacity: 1, duration: 0.8, delay: 0.95 });
    this.gsap.to('.hero-scroll', { opacity: 1, duration: 1, delay: 1.5 });
  }

  _bindStatsCounters() {
    document.querySelectorAll('.stat-n[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const state = { val: 0 };

      this.gsap.to(state, {
        val: target,
        duration: 2,
        delay: 1.1,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = `${Math.round(state.val)}+`;
        }
      });
    });
  }

  _bindSplitAnimations() {
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (el.id === 'hero-title') return;
      const words = this._splitWords(el);
      this.gsap.fromTo(
        words,
        { y: '105%' },
        {
          y: 0,
          duration: 0.85,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  _bindFadeAnimations() {
    document.querySelectorAll('[data-fade]').forEach((el) => {
      this.gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 87%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  _bindAboutAnimations() {
    const frame = document.getElementById('aboutImgFrame');
    if (frame) {
      this.gsap.to(frame, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: frame,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }

    const floatingCard = document.getElementById('floatCard');
    if (floatingCard) {
      this.gsap.to(floatingCard, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: floatingCard,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  }

  _bindSkillBars() {
    document.querySelectorAll('.skbar-fill').forEach((bar) => {
      this.ScrollTrigger.create({
        trigger: bar,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          bar.style.width = `${bar.dataset.w}%`;
        }
      });
    });
  }

  _bindServiceStagger() {
    this.gsap.utils.toArray('.serv-card').forEach((card, i) => {
      this.gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: card,
            start: 'top 89%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  _bindTimelineAnimations() {
    document.querySelectorAll('.tl-item').forEach((item) => {
      this.gsap.fromTo(
        item,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  _bindCertAnimations() {
    document.querySelectorAll('.cert-item').forEach((item, i) => {
      this.gsap.fromTo(
        item,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  _bindHeroParallax() {
    this.gsap.to('.hero-grid-lines', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  _bindChipTilt() {
    document.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('mousemove', (e) => {
        const r = chip.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const nx = x / r.width - 0.5;
        const ny = y / r.height - 0.5;

        this.gsap.to(chip, {
          rotateX: ny * 12,
          rotateY: -nx * 12,
          scale: 1.08,
          duration: 0.3,
          transformPerspective: 500
        });
      });

      chip.addEventListener('mouseleave', () => {
        this.gsap.to(chip, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1,.5)'
        });
      });
    });
  }

  destroy() {
    this.ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars && trigger.vars.id === 'hscroll') return;
      trigger.kill();
    });
  }
}
