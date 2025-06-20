import React from "react";
import "./SplitFeatureSection.css";

const SplitFeatureSection = () => {
  return (
    <div className="split-section">
      <div className="split-overlay">
        
        <div className="split-left">
          <div className="feature-image-wrapper">
            <img
              src="/images/about-image/m5.jpg"
              alt="Feature Visual"
              className="feature-image"
            />
            <img
              src="/images/about-image/m19.jpg"
              
              alt="Overlay Small Visual"
              className="feature-small-image"
            />
          </div>
        </div>

        
        <div className="split-right">
          <p className="feature-description">
            FILM THEME
          </p>
          <h2 className="feature-title">
					Every film needs its audience. Find yours easily with </h2>
          
          <button className="feature-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SplitFeatureSection;
