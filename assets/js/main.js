import { PreloaderController } from './modules/PreloaderController.js';
import { LenisScroll } from './modules/LenisScroll.js';
import { CursorController } from './modules/CursorController.js';
import { HeroCanvas } from './modules/HeroCanvas.js';
import { NavigationController } from './modules/NavigationController.js';
import { ThemeManager } from './modules/ThemeManager.js';
import { AnimationController } from './modules/AnimationController.js';
import { ProjectGallery } from './modules/ProjectGallery.js';
import { MarqueeController } from './modules/MarqueeController.js';
import { FormController } from './modules/FormController.js';
import { BackToTop } from './modules/BackToTop.js';

class App {
  constructor() {
    this.lenisScroll = null;
    this.modules = {};
  }

  init() {
    window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);

    new PreloaderController({
      gsap: window.gsap,
      onComplete: () => this._bootModules()
    });
  }

  _bootModules() {
    this.lenisScroll = new LenisScroll({
      gsap: window.gsap,
      ScrollTrigger: window.ScrollTrigger,
      Lenis: window.Lenis
    });

    window.lenis = this.lenisScroll.getInstance();

    this.modules.cursor = new CursorController({ gsap: window.gsap });
    this.modules.canvas = new HeroCanvas('#hero-canvas');
    this.modules.nav = new NavigationController({ lenis: window.lenis, gsap: window.gsap });
    this.modules.theme = new ThemeManager();
    this.modules.gallery = new ProjectGallery({ gsap: window.gsap, ScrollTrigger: window.ScrollTrigger, lenis: window.lenis });
    this.modules.marquee = new MarqueeController({ lenis: window.lenis });
    this.modules.anim = new AnimationController({ gsap: window.gsap, ScrollTrigger: window.ScrollTrigger, lenis: window.lenis });
    this.modules.form = new FormController('#cf', { gsap: window.gsap });
    this.modules.btt = new BackToTop({ lenis: window.lenis });
  }
}

document.addEventListener('DOMContentLoaded', () => new App().init());
