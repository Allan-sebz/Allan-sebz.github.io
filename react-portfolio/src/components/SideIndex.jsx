import React from 'react';

const SideIndex = ({ scrollTo }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && scrollTo) {
      scrollTo(element);
    }
  };

  return (
    <nav id="side-index" aria-label="Section navigation">
      {sections.map((section, idx) => (
        <div
          key={section.id}
          className={`side-dot ${idx === 0 ? 'active' : ''}`}
          data-sec={section.id}
          title={section.label}
          onClick={() => handleClick(section.id)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleClick(section.id)}
        >
          <div className="side-dot-label">{section.label}</div>
        </div>
      ))}
    </nav>
  );
};

export default SideIndex;
