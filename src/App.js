import React from 'react';
import Navbar from './Navbar'; 
import './App.css'; 
import ImageGallery from './ImageGallery';
import logo from './img/logo7.png';
import Afraid from './img/afraid.png';
import Crow from './img/crow.png';
import Requiem from './img/requiem.png';
import Scopsfun from './img/scopsfun.png';
import Tavsi from './img/tavsi.png';
import Ache from './img/acheinsecret.png';
import Wattlebird from './img/wattlebird.png'
import Waltz from './img/waltz.png'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SpeedInsights } from "@vercel/speed-insights/react"
const images = [
  { src: Waltz, alt: 'Waltz'},
  { src: Requiem, alt: 'Requiem'},
  { src: Ache, alt: 'Ache in Secret'},
  { src: Afraid, alt: 'Afraid'},
  { src: Tavsi, alt: 'DAVŞAN'},
  { src: Wattlebird, alt: 'Wattlebird'},
  { src: Crow, alt: 'Crow'},
  { src: Scopsfun, alt: 'Scopsfun'},
  { src: Scopsfun, alt: 'Scopsfun'},
  
];



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SpeedInsights/>
          <Link to="/">
            <img src={logo} alt="Logo" className="App-logo" />
          </Link>
          <Navbar />
        </header>
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <div className='content'>
              <ImageGallery images={images} />
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
