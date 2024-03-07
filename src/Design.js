import React from 'react';
import Navbar from './Navbar'; 
import './App.css'; 
import ImageGallery from './ImageGallery';
import logo from './img/logo8.png';
import Accesso from './img/Design/acceso.png';
import Box from './img/Design/box.png';
import Campus from './img/Design/campus.png';
import Car from './img/Design/car.jpg';
import Card from './img/Design/card.png';
import Coffee from './img/Design/coffee.png';
import Program from './img/Design/program.jpg'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const images = [
  { src: Accesso, alt: 'Sofiasorrize'},
  { src: Box, alt: 'Box Design'},
  { src: Campus, alt: 'Box Design'},
  { src: Car, alt: 'The Black Cat'},
  { src: Card, alt: 'Love Card'},
  { src: Coffee, alt: 'Identity'},
  { src: Program, alt: 'BOVA'},
  
  
];



const Design = () => {
  

  return (
   
      <div className="App">
        
            <div className='content'>
              <ImageGallery images={images} />
            </div>
        
      </div>
    
  );


  }
export default Design;
