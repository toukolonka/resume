import React from 'react';
import Me2 from '../../img/me2.jpeg'

import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg" />
        <div className="about-card">
          <img src={Me2} alt="" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <div className="about-right-wrapper">
          <h1>Education</h1>
          <h3 className="about-subtitle">Aalto University, Master of Technology</h3>
          <p className="about-sub-subtitle">Computer Science</p>
          <p className="about-time">September 2020 - Present</p>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
          <h3 className="about-subtitle">Aalto University, Bachelor of Technology</h3>
          <p className="about-sub-subtitle">Information Technology</p>
          <p className="about-time">August 2017 - August 2020</p>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
