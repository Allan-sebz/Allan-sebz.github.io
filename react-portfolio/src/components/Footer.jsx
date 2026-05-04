import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot-inner">
          <div className="foot-logo">Allan Kagimu<em> Ssebatta</em></div>
          <ul className="foot-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="foot-copy">© 2026 <span>Allan Sebz</span>. Crafted with passion in Kampala, Uganda.</div>
      </div>
    </footer>
  );
};

export default Footer;
