import React from 'react';
import './about.css';

const LeftTextSection = () => {
  return (
    <div className="left-section-wrapper"
    style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-image/background5.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '60px',
    color: '#fff',
  }}
    
    >
      <div className="left-section-content">
        <p>
					THRILLER</p>
        <h2>
					A Heartfelt Journey Filled With Crime & Mystery</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default LeftTextSection;
