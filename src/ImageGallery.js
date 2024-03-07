// ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Stiller için
import { Link } from 'react-router-dom';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Link  key={index} to={`/image/${image.alt}`}>
        <div className="image-container" key={index}>
          <img src={image.src} alt={image.alt} />
          <div className="overlay">{image.alt}</div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
