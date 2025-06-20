import React from "react";
import "./second-Layout.css";

const Layout = () => {
  return (
    <div className="container">
      
      <div className="left-side">
        <p>Movie Presentation</p>
        <h2 className="title">A wide variety of portfolios</h2>
        <h4>
          At VMMA Entertainment, we believe in the power of stories—bold,
          diverse, and unforgettable. Our movie presentations offer a curated
          portfolio that spans genres, cultures, and generations.
        </h4>
        <button className="rectangle-button">Click Me</button>
        <img
          src="/images/left-image1.jpeg"
          alt="Left"
          className="left-image"
        />
      </div>

      
      <div className="right-side">
        <div className="image-wrapper">
          <img
            src="/images/right-small1.jpeg"
            alt="Small"
            className="small-image"
          />
          <img
            src="/images/right-big1.jpeg"
            alt="Big"
            className="big-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
