export class FormController {
  constructor(selector = '#cf', options = {}) {
    this.gsap = options.gsap || window.gsap;
    this.form = document.querySelector(selector);
    this.successContainer = document.getElementById('formSuccess');
    this.errorContainer = document.getElementById('formError');
    this.errorMsg = document.getElementById('formErrorMsg');
    this.cfWrap = document.querySelector('.cf-wrap');

    this.init();
  }

  init() {
    if (!this.form) return;
    this._observeFormState();
    this._bindCustomAnimations();
  }

  _observeFormState() {
    // Watch for Formspree success state via data attribute
    const observer = new MutationObserver(() => {
      const hasSuccess = this.successContainer && this.successContainer.style.display !== 'none';
      const hasError = this.errorContainer && this.errorContainer.style.display !== 'none';

      if (hasSuccess) {
        this._animateSuccess();
      } else if (hasError) {
        this._animateError();
      }
    });

    if (this.successContainer && this.errorContainer) {
      observer.observe(this.successContainer, { attributes: true, attributeFilter: ['style'] });
      observer.observe(this.errorContainer, { attributes: true, attributeFilter: ['style'] });
    }
  }

  _animateSuccess() {
    this.gsap.to(this.form, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        this.form.style.display = 'none';
        this.successContainer.style.display = 'block';
        this.gsap.fromTo(
          this.successContainer,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    });
  }

  _animateError() {
    this.gsap.fromTo(
      this.errorContainer,
      { opacity: 0, y: 10, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
    );

    setTimeout(() => {
      this.gsap.to(this.errorContainer, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
        delay: 4,
        onComplete: () => {
          this.errorContainer.style.display = 'none';
        }
      });
    }, 4000);
  }

  _bindCustomAnimations() {
    // Optional: Add focus animations to form fields
    const fields = this.form.querySelectorAll('[data-fs-field]');
    fields.forEach((field) => {
      if (field.type !== 'submit') {
        field.addEventListener('focus', () => {
          this.gsap.to(field, {
            boxShadow: `0 0 0 2px var(--accent-glow)`,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        field.addEventListener('blur', () => {
          this.gsap.to(field, {
            boxShadow: `0 0 0 0px rgba(0,0,0,0)`,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }
    });
  }

  destroy() {}
}
