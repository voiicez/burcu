// Sidebar.js

import React from 'react';
import './Sidebar.css'; 
import nokta from './img/nokta.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/about" className="sidebar-item">ABOUT</a>
      <img src={nokta} className='nokta'></img>
      <a href="/contact" className="sidebar-item">CONTACT</a>
    
      
      {/* Diğer menü öğeleri */}
    </div>
  );
};

export default Sidebar;
