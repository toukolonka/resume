import React from 'react';
import Me from '../../img/me.jpg'

import './Intro.css';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name">Touko Lonka</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Software Designer</div>
              <div className="intro-title-item">Programmer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">University Student</div>
            </div>
          </div>
            <p className="intro-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur
            </p>
        </div>
      </div>
      <div className="intro-right">
        <img src={Me} alt="" className="intro-image" />
      </div>
    </div>
  );
}

export default Intro;
