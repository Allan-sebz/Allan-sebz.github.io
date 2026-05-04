import React, { useEffect } from 'react';
import { MARQUEE_ITEMS } from '../data/portfolio';

const Marquee = () => {
  useEffect(() => {
    const marqInner = document.getElementById('marqInner');
    if (!marqInner) return;

    let direction = 1;
    let position = 0;
    let speed = 0.5;

    const animate = () => {
      position += speed * direction;
      marqInner.style.transform = `translateX(${position}px)`;

      if (position > marqInner.offsetWidth / 2) {
        position = 0;
      } else if (position < -marqInner.offsetWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner" id="marqInner">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="m-item">
            {item} <span className="m-dot">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
