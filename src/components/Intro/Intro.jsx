import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name">Touko</h1>
        </div>
      </div>
      <div className="intro-right">right</div>
    </div>
  );
}

export default Intro;
