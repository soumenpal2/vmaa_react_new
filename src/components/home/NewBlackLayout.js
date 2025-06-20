import React from "react";
import "./NewBlackLayout.css";

const NewBlackLayout = () => {
  return (
    <div className="black-layout-container">
      
      <div className="black-layout-left">
        <p>BLOG</p>
        <div className="black-layout-content">
          <h2 className="black-layout-title">
            SHARE YOUR MOVIE STORIES. VMAA IS GREAT FOR BLOGGING
          </h2>
          <button className="black-layout-button">Explore</button>
          <img
            src="/images/left-image-black1.jpeg"
            alt="Left"
            className="black-layout-left-image"
          />
        </div>
      </div>

      
      <div className="black-layout-right">
        <div className="black-layout-image-wrapper">
          <img
            src="/images/right-image-black-big1.jpeg"
            alt="Big"
            className="black-layout-big-image"
          />
          <img
            src="/images/right-image-black-small1.jpeg"
            alt="Small"
            className="black-layout-small-image"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBlackLayout;
