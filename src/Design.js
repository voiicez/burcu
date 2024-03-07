import React from 'react';
import Navbar from './Navbar'; 
import './App.css'; 
import ImageGallery from './ImageGallery';
import logo from './img/logo8.png';
import Accesso from './img/Design/acceso.jpg';
import Box from './img/Design/box.jpg';
import Campus from './img/Design/campus.jpg';
import Samsung from './img/Design/samsung.jpg';
import Card from './img/Design/card.jpg';
import Coffee from './img/Design/coffee.jpg';
import Program from './img/Design/bova.jpg'
import Lon from './img/Design/lon_d.jpg'
import Car from './img/Design/car.jpg'
import Story from './img/Design/story.jpg'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const images = [
  { src: Accesso, alt: 'Sofiasorrize'},
  { src: Box, alt: 'Box Design'},
  { src: Campus, alt: 'Campus'},
  { src: Samsung, alt: 'Samsung'},
  { src: Card, alt: 'Love Card'},
  { src: Coffee, alt: 'Awaken'},
  { src: Program, alt: 'BOVA'},
  { src: Car, alt: 'Cat'},
  { src: Story, alt: 'Story'},
  { src: Lon, alt: 'Game'},
  
  
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
