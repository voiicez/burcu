// ImageGallery.js

import React from 'react';
import './ImageGallery.css'; // Stiller için

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="image-container" key={index} onClick={() => alert(`Resim ${index + 1} tıklandı`)}>
          <img src={image.src} alt={image.alt} />
          <div className="overlay">{image.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
