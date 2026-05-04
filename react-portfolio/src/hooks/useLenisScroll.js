import { useEffect, useRef, useState } from 'react';

export const useLenisScroll = () => {
  const lenisRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    const Lenis = window.Lenis;
    if (!Lenis) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      setScrollSpeed(lenis.velocity);
    };

    let frameId = window.requestAnimationFrame(raf);
    const tick = () => {
      frameId = window.requestAnimationFrame(raf);
    };
    tick();

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -60,
        duration: 1.4,
        ...options
      });
    }
  };

  return { lenis: lenisRef.current, scrollTo, scrollSpeed };
};
