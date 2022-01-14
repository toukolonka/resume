import React from 'react';
import Me2 from '../../img/me2.jpeg'
import Aalto from '../../img/aalto.png'

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
          <h3 className="about-subtitle">Aalto University, Bachelor of Technology</h3>
          <p className="about-sub-subtitle">Information Technology</p>
          <p className="about-time">August 2017 - August 2020</p>
          <img src={Aalto} alt="" className="about-section-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
