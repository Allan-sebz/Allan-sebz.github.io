export class ProjectGallery {
  constructor(options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.ScrollTrigger = options.ScrollTrigger || window.ScrollTrigger;

    this.pinEl = document.getElementById('projPin');
    this.projTrack = document.getElementById('projTrack');
    this.fallback = document.getElementById('projGridFallback');
    this.tabs = document.querySelectorAll('.ftab');
    this.cards = document.querySelectorAll('.proj-card');

    this.preview = document.getElementById('proj-preview');
    this.previewInner = document.getElementById('proj-preview-inner');

    this.pinScrollTrigger = null;
    this.previewX = 0;
    this.previewY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this._rafId = null;

    this._boundResize = this._handleResize.bind(this);

    this.init();
  }

  init() {
    this._bindPreview();
    this._bindFilters();
    this._buildHorizontalPin();
    this._tickPreview();
    window.addEventListener('resize', this._boundResize);
  }

  _bindPreview() {
    this.cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        this.previewInner.textContent = card.dataset.emoji || '💻';
        this.preview.classList.add('visible');
      });

      card.addEventListener('mouseleave', () => {
        this.preview.classList.remove('visible');
      });

      card.addEventListener('mousemove', (e) => {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
      });
    });
  }

  _tickPreview() {
    this.previewX += (this.targetX - this.previewX) * 0.12;
    this.previewY += (this.targetY - this.previewY) * 0.12;

    this.preview.style.left = `${this.previewX}px`;
    this.preview.style.top = `${this.previewY}px`;

    this._rafId = window.requestAnimationFrame(() => this._tickPreview());
  }

  _bindFilters() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        if (filter === 'all') {
          this._buildHorizontalPin();
        } else {
          this._showFiltered(filter);
        }
      });
    });
  }

  _buildHorizontalPin() {
    if (this.pinScrollTrigger) {
      this.pinScrollTrigger.kill();
      this.pinScrollTrigger = null;
    }

    this.ScrollTrigger.getAll()
      .filter((trigger) => trigger.vars.id === 'hscroll')
      .forEach((trigger) => trigger.kill());

    this.pinEl.style.display = 'block';
    this.fallback.classList.remove('active');
    this.fallback.innerHTML = '';

    this.cards.forEach((card) => {
      card.style.display = '';
      this.projTrack.appendChild(card);
    });

    const trackW = this.projTrack.scrollWidth;
    const viewW = window.innerWidth;
    const scrollDist = trackW - viewW + window.innerWidth * 0.05;

    this.pinScrollTrigger = this.ScrollTrigger.create({
      id: 'hscroll',
      trigger: this.pinEl,
      start: 'top top',
      end: `+=${scrollDist}`,
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onUpdate: (self) => {
        const x = -self.progress * scrollDist;
        this.gsap.set(this.projTrack, { x });
      }
    });
  }

  _showFiltered(filter) {
    if (this.pinScrollTrigger) {
      this.pinScrollTrigger.kill();
      this.pinScrollTrigger = null;
    }

    this.ScrollTrigger.getAll()
      .filter((trigger) => trigger.vars.id === 'hscroll')
      .forEach((trigger) => trigger.kill());

    this.pinEl.style.display = 'none';
    this.gsap.set(this.projTrack, { x: 0 });
    this.fallback.classList.add('active');
    this.fallback.innerHTML = '';

    this.cards.forEach((card) => {
      const categories = card.dataset.cat || '';
      if (!categories.includes(filter)) return;

      const clone = card.cloneNode(true);
      clone.style.width = '';
      clone.style.flexShrink = '';
      this.fallback.appendChild(clone);

      this.gsap.fromTo(
        clone,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      );
    });
  }

  _handleResize() {
    const activeFilter = document.querySelector('.ftab.active')?.dataset.filter;
    if (activeFilter === 'all') {
      this._buildHorizontalPin();
    }
  }

  destroy() {
    if (this.pinScrollTrigger) this.pinScrollTrigger.kill();
    if (this._rafId) window.cancelAnimationFrame(this._rafId);
    window.removeEventListener('resize', this._boundResize);
  }
}
