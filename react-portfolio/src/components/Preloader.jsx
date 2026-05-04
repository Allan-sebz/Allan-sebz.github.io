import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticker = null;
    let currentProgress = 0;

    const animate = () => {
      currentProgress += Math.random() * 12;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(ticker);

        setTimeout(() => {
          const preloader = document.getElementById('preloader');
          const curtain = document.getElementById('pl-curtain');
          if (preloader && curtain) {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            curtain.style.transform = 'scaleY(0)';
          }
          onComplete?.();
        }, 350);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    };

    ticker = setInterval(animate, 50);

    return () => clearInterval(ticker);
  }, [onComplete]);

  return (
    <>
      <div id="preloader">
        <div className="pl-logo"><span>Allan Kagimu Ssebatta.</span></div>
        <div className="pl-bar-wrap"><div className="pl-bar" id="pl-bar" style={{ width: `${progress}%` }}></div></div>
        <div className="pl-num" id="pl-num">{progress}%</div>
      </div>
      <div className="pl-curtain" id="pl-curtain"></div>
    </>
  );
};

export default Preloader;
