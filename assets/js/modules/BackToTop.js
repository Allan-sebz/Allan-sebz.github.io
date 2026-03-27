export class BackToTop {
  constructor(options = {}) {
    this.lenis = options.lenis || window.lenis;
    this.button = document.getElementById('btt');

    this._boundScroll = this._handleScroll.bind(this);

    this.init();
  }

  init() {
    if (!this.button) return;
    window.addEventListener('scroll', this._boundScroll, { passive: true });
    this.button.addEventListener('click', () => this._scrollTop());
  }

  _handleScroll() {
    this.button.classList.toggle('show', window.scrollY > 500);
  }

  _scrollTop() {
    if (this.lenis) {
      this.lenis.scrollTo(0, { duration: 1.4 });
    }
  }

  destroy() {
    window.removeEventListener('scroll', this._boundScroll);
  }
}
