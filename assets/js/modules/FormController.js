export class FormController {
  constructor(selector = '#cf', options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.form = document.querySelector(selector);
    this.success = document.getElementById('fSuccess');

    this.init();
  }

  init() {
    if (!this.form || !this.success) return;
    this._bindSubmit();
  }

  _bindSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fn = document.getElementById('fn')?.value;
      const em = document.getElementById('em')?.value;
      const msg = document.getElementById('msg')?.value;

      if (!fn || !em || !msg) return;

      this.gsap.to(this.form, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          this.form.style.display = 'none';
          this.success.style.display = 'block';
          this.gsap.fromTo(
            this.success,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
          );
        }
      });
    });
  }

  destroy() {}
}
