import React from 'react';

const CursorTrail = ({ dotRef, ringRef, labelRef }) => {
  return (
    <>
      <div id="cur-dot" ref={dotRef}></div>
      <div id="cur-ring" ref={ringRef}></div>
      <div id="cur-label" ref={labelRef}></div>
    </>
  );
};

export default CursorTrail;
