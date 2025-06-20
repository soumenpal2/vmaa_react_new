import React from 'react';
import './about.css';

const TwoSectionLayout = () => {
  return (
    <div
      className="two-section-wrapper"
      style={{
        backgroundImage: `url('/images/about-image/background1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 40px',
      }}
    >
      <div className="container">
        
        <div className="left-container">
          <div className="image-wrapper">
            <img src="/images/about-image/left1.jpg" alt="Left" className="image" />
            <div className="overlay-text">
               <p>ARTWORK&nbsp;&nbsp;&nbsp; <b>DECEMBER10</b></p>
              <h2>
		Interview with movie producer Brian harington	</h2>
             
              <a href="#about">Learn More</a>
            </div>
          </div>
        </div>

        
        <div className="right-container">
          <img src="/images/about-image/right1.jpg" alt="Right" className="image" />
          <div className="below-text">
            <p>ARTWORK&nbsp;&nbsp;&nbsp; <b>DECEMBER10</b></p>
            <h2>
		Interview in London with movie producer Sebastian ring	</h2>
            <a href="#about">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoSectionLayout;
