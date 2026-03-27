export class HeroCanvas {
  constructor(selector = '#hero-canvas', options = {}) {
    this.selector = selector;
    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particleCount = options.particleCount || 120;
    this.width = 0;
    this.height = 0;
    this.particles = [];
    this._rafId = null;

    this._boundResize = this._handleResize.bind(this);

    this.init();
  }

  init() {
    if (!this.canvas || !this.ctx) return;
    this._handleResize();
    this._createParticles();
    window.addEventListener('resize', this._boundResize);
    this._loop();
  }

  _handleResize() {
    this.width = this.canvas.width = this.canvas.offsetWidth;
    this.height = this.canvas.height = this.canvas.offsetHeight;
  }

  _createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i += 1) {
      this.particles.push(this._newParticle());
    }
  }

  _newParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.5 + 0.1
    };
  }

  _updateParticles() {
    for (let i = 0; i < this.particles.length; i += 1) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width || p.y < 0 || p.y > this.height) {
        this.particles[i] = this._newParticle();
      }
    }
  }

  _drawParticles() {
    for (let i = 0; i < this.particles.length; i += 1) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(74,244,176,${p.a})`;
      this.ctx.fill();
    }
  }

  _drawConnections() {
    for (let i = 0; i < this.particles.length; i += 1) {
      for (let j = i + 1; j < this.particles.length; j += 1) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(74,244,176,${0.15 * (1 - d / 120)})`;
          this.ctx.lineWidth = 0.4;
          this.ctx.stroke();
        }
      }
    }
  }

  _loop() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this._updateParticles();
    this._drawParticles();
    this._drawConnections();
    this._rafId = window.requestAnimationFrame(() => this._loop());
  }

  destroy() {
    if (this._rafId) {
      window.cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }

    window.removeEventListener('resize', this._boundResize);
  }
}
