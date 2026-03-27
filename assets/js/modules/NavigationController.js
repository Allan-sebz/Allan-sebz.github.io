export class NavigationController {
  constructor(options = {}) {
    this.lenis = options.lenis;
    this.gsap = options.gsap || window.gsap;

    this.navbar = document.getElementById('navbar');
    this.sections = document.querySelectorAll('section[id]');
    this.navLinks = document.querySelectorAll('.nav-links a[data-nav]');
    this.sideDots = document.querySelectorAll('.side-dot');
    this.ham = document.getElementById('ham');
    this.mobMenu = document.getElementById('mobMenu');
    this.mobOpen = false;
    this.io = null;

    this._boundScroll = this._handleScroll.bind(this);

    this.init();
  }

  init() {
    this._bindScrollState();
    this._bindIntersectionState();
    this._bindSideDots();
    this._bindAnchorSmoothScroll();
    this._bindHamburger();
  }

  _bindScrollState() {
    window.addEventListener('scroll', this._boundScroll, { passive: true });
  }

  _handleScroll() {
    if (!this.navbar) return;
    this.navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  _bindIntersectionState() {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          this.navLinks.forEach((link) => link.classList.toggle('active', link.dataset.nav === id));
          this.sideDots.forEach((dot) => dot.classList.toggle('active', dot.dataset.sec === id));
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    this.sections.forEach((section) => this.io.observe(section));
  }

  _bindSideDots() {
    this.sideDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.sec);
        if (target && this.lenis) {
          this.lenis.scrollTo(target, { offset: -60, duration: 1.4 });
        }
      });
    });
  }

  _bindAnchorSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        if (this.lenis) {
          this.lenis.scrollTo(target, { offset: -60, duration: 1.4 });
        }

        if (this.mobMenu && this.mobMenu.classList.contains('open')) {
          this._toggleMobileMenu();
        }
      });
    });
  }

  _bindHamburger() {
    if (!this.ham) return;
    this.ham.addEventListener('click', () => this._toggleMobileMenu());
  }

  _toggleMobileMenu() {
    if (!this.mobMenu || !this.ham) return;

    this.mobOpen = !this.mobOpen;
    this.mobMenu.classList.toggle('open', this.mobOpen);

    const spans = this.ham.querySelectorAll('span');
    if (this.mobOpen) {
      this.gsap.to(spans[0], { rotation: 45, y: 6, duration: 0.4, ease: 'power2.out' });
      this.gsap.to(spans[1], { opacity: 0, duration: 0.25 });
      this.gsap.to(spans[2], { rotation: -45, y: -6, duration: 0.4, ease: 'power2.out' });
      return;
    }

    this.gsap.to(spans, { rotation: 0, y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
  }

  destroy() {
    window.removeEventListener('scroll', this._boundScroll);
    if (this.io) this.io.disconnect();
  }
}
