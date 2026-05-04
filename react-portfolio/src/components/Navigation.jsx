import React, { useState } from 'react';

const Navigation = ({ theme, toggleTheme, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && scrollTo) {
      scrollTo(element);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
            Allan <em>Kagimu</em>
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  data-nav={link.id}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <button className="theme-pill" id="themePill" aria-label="Toggle theme" onClick={toggleTheme}></button>
            <button className="nav-ham" id="ham" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mob-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobMenu">
        <div className="mob-menu-num">— Navigation</div>
        {navLinks.map(link => (
          <a 
            key={link.id}
            href={`#${link.id}`} 
            className="mob-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navigation;
