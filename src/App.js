import React from 'react';
import Navbar from './Navbar'; 
import './App.css'; 
import ImageGallery from './ImageGallery';
import logo from './img/logo8.png';
import Afraid from './img/Illustration/afraid.jpg';
import Crow from './img/Illustration/crow.jpg';
import Requiem from './img/Illustration/requiem.jpg';
import Scopsfun from './img/Illustration/scopsfun.jpg';
import Tavsi from './img/Illustration/tavsi.jpg';
import Ache from './img/Illustration/acheinsecret.jpg';
import Wattlebird from './img/Illustration/wattlebird.jpg'
import Waltz from './img/Illustration/waltz.jpg'
import Car from './img/Illustration/car_i.jpg'
import Nau from './img/Illustration/nau.jpg'
import Story from './img/Illustration/story_i.jpg'
import Self from './img/Illustration/self.jpg'
import Tears from './img/Illustration/tears.jpg'
import Contact from './Contact'
import Design from './Design';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import BirdDetail from './image/WattlebirdDetail';
import CarDetail from './image/CarDetail';
import CrowDetail from './image/CrowDetail';
import RequiemDetail from './image/RequiemDetail';
import StoryDetail from './image/StoryDetail';
import TavsiDetail from './image/TavsiDetail';
import TearsDetail from './image/TearsDetail';
import WaltzDetail from './image/WaltzDetail';
import CampusDetail from './image/CampusDetail';
import AccessoDetail from './image/AccessoDetail';
import AcheInSecretDetail from './image/AcheInSecretDetail';
import AfraidDetail from './image/AfraidDetail';
import AwakenDetail from './image/AwakenDetail';
const images = [
  { src: Waltz, alt: 'Waltz'},
  { src: Requiem, alt: 'Requiem'},
  { src: Ache, alt: 'Ache in Secret'},
  { src: Afraid, alt: 'Afraid'},
  { src: Tavsi, alt: 'Echoes of Existence'},
  { src: Wattlebird, alt: 'Wattlebird'},
  { src: Crow, alt: 'Crow'},
  { src: Scopsfun, alt: 'Scopsfun'},
  { src: Car, alt: 'Cat'},
  { src: Nau, alt: 'Nau'},
  { src: Story, alt: 'Story'},
  { src: Self, alt: 'Self'},
  { src: Tears, alt: 'Tears'},
  
];



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SpeedInsights/>
          <Analytics/>
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
          <Route path="/design" element={<Design />} />
          <Route path="/image/wattlebird" element={<BirdDetail />} />
          <Route path="/image/cat" element={<CarDetail />} />
          <Route path="/image/crow" element={<CrowDetail />} />
          <Route path="/image/requiem" element={<RequiemDetail />} />
          <Route path="/image/story" element={<StoryDetail />} />
          <Route path="/image/echoes of existence" element={<TavsiDetail />} />
          <Route path="/image/tears" element={<TearsDetail />} />
          <Route path="/image/waltz" element={<WaltzDetail />} />
          <Route path="/image/campus" element={<CampusDetail />} />
          <Route path="/image/sofiasorrize" element={<AccessoDetail />} />
          <Route path="/image/ache in secret" element={<AcheInSecretDetail />} />
          <Route path="/image/afraid" element={<AfraidDetail />} />
          <Route path="/image/awaken" element={<AwakenDetail />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
