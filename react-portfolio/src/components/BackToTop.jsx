import React, { useEffect, useState } from 'react';

const BackToTop = ({ scrollTo }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const hero = document.getElementById('hero');
    if (hero && scrollTo) {
      scrollTo(hero);
    }
  };

  return (
    <button 
      id="btt" 
      aria-label="Back to top"
      className={show ? 'show' : ''}
      onClick={handleClick}
    >
      ↑
    </button>
  );
};

export default BackToTop;
