import React from "react";
import "./MasonryGallery.css";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

const MasonryGallery = () => {
  return (
    <div className="masonry-bg">
       <p className="masonry-para">
        MULTIUSE
      </p>
      <h2 className="masonry-heading">
        PREDESIGNRD <span>INNER PAGES</span>
      </h2>
      <div className="masonry-container">
        {images.map((src, index) => (
          <img src={src} alt={`img-${index}`} className="masonry-img" key={index} />
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
