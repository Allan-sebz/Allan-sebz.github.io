export class MarqueeController {
  constructor(options = {}) {
    this.lenis = options.lenis || window.lenis;
    this.marquee = document.getElementById('marqInner');
    this.lastY = 0;
    this.lastT = 0;

    this.init();
  }

  init() {
    if (!this.lenis || !this.marquee) return;

    this.lenis.on('scroll', ({ scroll }) => {
      const now = performance.now();
      const velocity = Math.abs(scroll - this.lastY) / (now - this.lastT + 1);
      this.lastY = scroll;
      this.lastT = now;

      const speed = Math.max(22 - velocity * 60, 4);
      this.marquee.style.animationDuration = `${speed}s`;
    });
  }

  destroy() {}
}
