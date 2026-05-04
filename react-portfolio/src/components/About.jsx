import React from 'react';
import { SKILLS, TECH_STACK } from '../data/portfolio';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-col">
            <div className="about-img-frame" id="aboutImgFrame">
              <div className="about-img-inner">
                <img src="images/me.jpeg" alt="My Photo" className="about-photo" />
              </div>
            </div>
            <div className="fl-card" id="floatCard">
              <div className="fl-icon">⚡</div>
              <div className="fl-txt"><strong>15+</strong><span>Projects Completed</span></div>
            </div>
          </div>
          <div className="about-content">
            <div className="sec-label" data-split>About Me</div>
            <h2 className="about-h2" data-split>Passionate Builder.<br /><em>Creative</em> Thinker.</h2>
            <p className="about-desc" data-fade>
              I'm Allan Sebz, a software developer and cybersecurity professional from Uganda with a deep passion
              for crafting elegant solutions to complex problems. I thrive at the intersection of hardware
              and software, bringing ideas from concept to deployed reality.
            </p>
            <div className="about-box" data-fade>
              <p>My journey into tech started with curiosity... tinkering with softwares and microcontrollers and wondering
                how the world could be made smarter. That curiosity evolved into a career building full-stack
                web systems, software applications, and cybersecurity that make real impact. I love clean code,
                bold design, and purposeful technology.</p>
            </div>
            <div className="skills-h" data-fade>Core Proficiencies</div>
            <div className="skbars" data-fade>
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="skbar">
                  <div className="skbar-top">
                    <span>{skill.label}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skbar-track">
                    <div className="skbar-fill" data-w={skill.percentage}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-h skills-h-stack" data-fade>Tech Stack</div>
            <div className="chips" data-fade>
              {TECH_STACK.map((tech, idx) => (
                <span key={idx} className="chip">{tech}</span>
              ))}
            </div>
            <div className="about-cta-wrap" data-fade>
              <div className="mag-wrap">
                <a href="Allan_Resume.pdf" className="btn btn-solid mag-btn" data-label="Read/ View CV">
                  Read/ View CV
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
