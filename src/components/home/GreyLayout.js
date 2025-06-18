import React from "react";
import "./GreyLayout.css";

const GreyLayout = () => {
  return (
    <div className="grey-layout-container">
      {/* Left Side */}
      <div className="grey-layout-left">
        <p className="grey-layout-title">WOCOMMERCE</p>
        <h2 className="grey-layout-title">YOUR ONLINE MOVIE <span style={{color:'pink'}}>STORE</span></h2>
        <button className="grey-layout-button">Discover</button>
        <img
          src="images/left-image.jpg"
          alt="Left"
          className="grey-layout-left-image"
        />
      </div>

      {/* Right Side */}
      <div className="grey-layout-right">
        <div className="grey-layout-image-wrapper">
          <img
            src="images/right-big.jpg"
            alt="Big"
            className="grey-layout-big-image"
          />
          <img
            src="images/right-small.jpg"
            alt="Small"
            className="grey-layout-small-image"
          />
        </div>
      </div>
    </div>
  );
};

export default GreyLayout;
