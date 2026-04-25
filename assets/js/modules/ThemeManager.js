export class ThemeManager {
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'theme';
    this.toggleButton = document.getElementById('themePill');

    this.init();
  }

  init() {
    const saved = localStorage.getItem(this.storageKey) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this._toggleTheme());
    }
  }

  _toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(this.storageKey, next);
  }

  destroy() {}
}
