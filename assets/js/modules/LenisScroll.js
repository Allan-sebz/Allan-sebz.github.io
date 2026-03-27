export class LenisScroll {
  constructor(options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.ScrollTrigger = options.ScrollTrigger || window.ScrollTrigger;
    this.Lenis = options.Lenis || window.Lenis;

    this.lenis = null;
    this._rafId = null;
    this._onLenisScroll = null;
    this._gsapTickerCallback = null;
    this._boundRaf = this._raf.bind(this);

    this.init();
  }

  init() {
    this.lenis = new this.Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false
    });

    window.lenis = this.lenis;

    this._onLenisScroll = () => this.ScrollTrigger.update();
    this.lenis.on('scroll', this._onLenisScroll);

    this._gsapTickerCallback = (time) => this.lenis.raf(time * 1000);
    this.gsap.ticker.add(this._gsapTickerCallback);
    this.gsap.ticker.lagSmoothing(0);

    this._rafId = window.requestAnimationFrame(this._boundRaf);
  }

  _raf(time) {
    if (!this.lenis) return;
    this.lenis.raf(time);
    this._rafId = window.requestAnimationFrame(this._boundRaf);
  }

  scrollTo(target, options = {}) {
    if (!this.lenis) return;
    this.lenis.scrollTo(target, options);
  }

  getInstance() {
    return this.lenis;
  }

  destroy() {
    if (this._rafId) {
      window.cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }

    if (this.gsap && this._gsapTickerCallback) {
      this.gsap.ticker.remove(this._gsapTickerCallback);
    }

    if (this.lenis && this.lenis.destroy) {
      this.lenis.destroy();
    }

    this.lenis = null;
  }
}
