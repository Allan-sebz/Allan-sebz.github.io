import React from 'react';
import { useHeroCanvas } from '../hooks/useHeroCanvas';

const Hero = ({ scrollTo }) => {
  const canvasRef = useHeroCanvas();

  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection && scrollTo) {
      scrollTo(aboutSection);
    }
  };

  return (
    <section id="hero">
      <div className="hero-grid-lines"></div>
      <canvas id="hero-canvas" ref={canvasRef}></canvas>

      <div className="hero-c container">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          Available for opportunities
        </div>
        <p className="hero-eyebrow">
          Computer scientist · Software Developer · Cybersecurity professional · Networking · IoT & AI Enthusiast · Problem Solver · Data scientist
        </p>
        <h1 className="hero-h1" id="hero-title">
          Crafting Digital<br /><em>Experiences</em><br />That Matter.
        </h1>
        <div className="hero-row">
          <p className="hero-sub">
            Hi, I'm <strong>Allan Kagimu</strong>, a full-stack software developer and cybersecurity professional
            based in Uganda, building scalable systems that bridge the physical and digital worlds.
          </p>
          <div className="hero-cta">
            <div className="mag-wrap">
              <a href="#projects" className="btn btn-solid mag-btn" data-label="View Work" onClick={(e) => {
                e.preventDefault();
                const proj = document.getElementById('projects');
                if (proj && scrollTo) scrollTo(proj);
              }}>
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
            <div className="mag-wrap">
              <a href="#contact" className="btn btn-ghost mag-btn" data-label="Say Hi" onClick={(e) => {
                e.preventDefault();
                const contact = document.getElementById('contact');
                if (contact && scrollTo) scrollTo(contact);
              }}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div><span className="stat-n" data-count="15">0+</span><span className="stat-l">Projects Built</span></div>
          <div><span className="stat-n" data-count="3">0+</span><span className="stat-l">Years Experience</span></div>
          <div><span className="stat-n" data-count="10">0+</span><span className="stat-l">Technologies</span></div>
          <div><span className="stat-n" data-count="5">0+</span><span className="stat-l">Happy Clients</span></div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <div className="hero-scroll-txt" onClick={handleScrollClick}>Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;
