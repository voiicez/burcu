import React from 'react';
import wb0 from '../img/fullRes/about_p.png';
import wb1 from '../img/aboutme.jpg';
import './About.css';
const About = () => {
  return (
    <div>
     <div className="bimage-detail-container">
      <img src={wb0} alt="Kuş" />
    </div>
    <div className="image-detail-container">
    <img src={wb1} alt="Kuş" />
    </div>
    </div>
    
    
  );
};

export default About;