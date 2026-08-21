export class MarqueeController {
  constructor(options = {}) {
    this.lenis = options.lenis || window.lenis;
    this.marquee = document.getElementById('marqInner');
    this.lastY = 0;
    this.lastT = 0;
    this.baseDuration = 22; // must match the CSS animation-duration

    this.init();
  }

  init() {
    if (!this.lenis || !this.marquee) return;

    // Read the running CSS animation so we can change its speed without
    // ever touching animation-duration: a CSS animation's position is
    // (elapsed time / duration), so rewriting duration mid-flight snaps
    // it to a different point in the loop instead of smoothly speeding
    // up. playbackRate scales speed going forward from wherever the
    // animation currently is, so there's no jump.
    this.animation = this.marquee.getAnimations()[0];
    if (!this.animation) return;

    this.lenis.on('scroll', ({ scroll }) => {
      const now = performance.now();
      const velocity = Math.abs(scroll - this.lastY) / (now - this.lastT + 1);
      this.lastY = scroll;
      this.lastT = now;

      const speed = Math.max(22 - velocity * 60, 4);
      this.animation.playbackRate = this.baseDuration / speed;
    });
  }

  destroy() {}
}
