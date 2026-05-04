import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import SideIndex from './components/SideIndex';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useTheme } from './hooks/useTheme';
import { useCursor } from './hooks/useCursor';
import { useAnimations } from './hooks/useAnimations';

function App() {
  const { lenis, scrollTo } = useLenisScroll();
  const { theme, toggleTheme } = useTheme();
  const { dotRef, ringRef, labelRef } = useCursor();
  const { initAnimations } = useAnimations(window.gsap, window.ScrollTrigger);

  useEffect(() => {
    const preloaderComplete = sessionStorage.getItem('preloaderComplete');
    if (preloaderComplete) {
      setTimeout(initAnimations, 500);
    }
  }, []);

  return (
    <div id="app" className="app">
      <Preloader onComplete={() => {
        sessionStorage.setItem('preloaderComplete', 'true');
        setTimeout(initAnimations, 500);
      }} />
      
      <CursorTrail dotRef={dotRef} ringRef={ringRef} labelRef={labelRef} />
      <SideIndex scrollTo={scrollTo} />
      <Navigation theme={theme} toggleTheme={toggleTheme} scrollTo={scrollTo} />
      
      <div id="scroll-prog"></div>
      
      <Hero scrollTo={scrollTo} />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      
      <BackToTop scrollTo={scrollTo} />
    </div>
  );
}

export default App;
