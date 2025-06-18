import React from 'react';
import './about.css';

const images = [
  '/images/about-image/m1.jpg',
  '/images/about-image/m2.jpg',
  '/images/about-image/m3.jpg',
  '/images/about-image/m4.jpg',
  '/images/about-image/m5.jpg',
  '/images/about-image/m6.jpg',
  '/images/about-image/m7.jpg',
  '/images/about-image/m8.jpg',
  '/images/about-image/m9.jpg',
  '/images/about-image/m10.jpg',
  '/images/about-image/m11.jpg',
  '/images/about-image/m12.jpg',
  '/images/about-image/m13.jpg',
  '/images/about-image/m14.jpg',
  '/images/about-image/m15.jpg',
  '/images/about-image/m16.jpg',
  '/images/about-image/m17.jpg',
  '/images/about-image/m18.jpg',
  '/images/about-image/m19.jpg',
  '/images/about-image/m20.jpg',
  '/images/about-image/m21.jpg',
  '/images/about-image/m22.jpg',
  '/images/about-image/m23.jpg',
  '/images/about-image/m24.jpg',

];

const MasonryGallery = () => {
  return (
    <div className="masonry-gallery">
      {images.map((src, index) => (
        <div key={index} className="masonry-item">
          <img src={src} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
