export class CursorController {
  constructor(options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.dot = document.getElementById('cur-dot');
    this.ring = document.getElementById('cur-ring');
    this.label = document.getElementById('cur-label');

    this.mx = 0;
    this.my = 0;
    this.rx = 0;
    this.ry = 0;
    this._rafId = null;

    this._boundMouseMove = this._handleMouseMove.bind(this);

    this.init();
  }

  init() {
    if (!this.dot || !this.ring || !this.label) return;

    document.addEventListener('mousemove', this._boundMouseMove);
    this._tickCursor();
    this._bindHoverStates();
    this._bindMagneticButtons();
  }

  _handleMouseMove(e) {
    this.mx = e.clientX;
    this.my = e.clientY;
  }

  _tickCursor() {
    this.dot.style.left = `${this.mx}px`;
    this.dot.style.top = `${this.my}px`;

    this.rx += (this.mx - this.rx) * 0.1;
    this.ry += (this.my - this.ry) * 0.1;

    this.ring.style.left = `${this.rx}px`;
    this.ring.style.top = `${this.ry}px`;
    this.label.style.left = `${this.rx}px`;
    this.label.style.top = `${this.ry}px`;

    this._rafId = window.requestAnimationFrame(() => this._tickCursor());
  }

  _bindHoverStates() {
    const interactive = document.querySelectorAll('a,button,.ftab,.chip,.cert-item,.proj-card,.serv-card');

    interactive.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        this.ring.classList.add('big');
        const text = el.dataset.label;
        if (text) {
          this.ring.classList.add('text-mode');
          this.label.style.opacity = '1';
          this.label.textContent = text;
        }
      });

      el.addEventListener('mouseleave', () => {
        this.ring.classList.remove('big', 'text-mode');
        this.label.style.opacity = '0';
      });
    });
  }

  _bindMagneticButtons() {
    document.querySelectorAll('.mag-btn').forEach((btn) => {
      const wrap = btn.closest('.mag-wrap');
      if (!wrap) return;

      wrap.addEventListener('mousemove', (e) => {
        const r = wrap.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.35;
        const dy = (e.clientY - cy) * 0.35;

        this.gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
      });

      wrap.addEventListener('mouseleave', () => {
        this.gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' });
      });
    });
  }

  destroy() {
    document.removeEventListener('mousemove', this._boundMouseMove);
    if (this._rafId) {
      window.cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }
}
