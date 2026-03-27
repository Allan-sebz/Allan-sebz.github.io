export class PreloaderController {
  constructor(options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.onComplete = options.onComplete || (() => {});
    this.progress = 0;
    this.ticker = null;

    this.bar = document.getElementById('pl-bar');
    this.num = document.getElementById('pl-num');
    this.logo = document.querySelector('.pl-logo span');
    this.curtain = document.getElementById('pl-curtain');
    this.preloader = document.getElementById('preloader');

    this.init();
  }

  init() {
    if (!this.bar || !this.num || !this.curtain || !this.preloader) {
      this.onComplete();
      return;
    }

    this._animateLogo();
    this._runProgress();
  }

  _animateLogo() {
    if (!this.logo) return;
    this.gsap.to(this.logo, { y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 });
  }

  _runProgress() {
    this.ticker = window.setInterval(() => {
      this.progress += Math.random() * 12;

      if (this.progress >= 100) {
        this.progress = 100;
        window.clearInterval(this.ticker);
        this.bar.style.width = '100%';
        this.num.textContent = '100%';

        window.setTimeout(() => {
          this._finish();
        }, 350);

        return;
      }

      this.bar.style.width = `${this.progress}%`;
      this.num.textContent = `${Math.floor(this.progress)}%`;
    }, 55);
  }

  _finish() {
    this.gsap.to(this.curtain, { yPercent: -100, duration: 0 });
    this.gsap.fromTo(
      this.curtain,
      { yPercent: 100 },
      {
        yPercent: -100,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          this.curtain.style.display = 'none';
        }
      }
    );

    this.gsap.to(this.preloader, {
      yPercent: -100,
      duration: 1,
      ease: 'power3.inOut',
      onComplete: () => {
        this.preloader.style.display = 'none';
        this.onComplete();
      }
    });
  }

  destroy() {
    if (this.ticker) {
      window.clearInterval(this.ticker);
      this.ticker = null;
    }
  }
}
