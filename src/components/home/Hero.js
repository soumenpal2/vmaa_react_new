import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const videoSources = [
  require('../../assets/1.mp4'),
  require('../../assets/2.mp4'),
  require('../../assets/3.mp4'),
  require('../../assets/4.mp4'),
  
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const nextVideo = videoRefs.current[currentIndex];
    if (nextVideo) {
      nextVideo.play().catch(err => console.warn('Autoplay denied:', err));
    }
  }, [currentIndex]);

 
  useEffect(() => {
    const handleEnded = () => {
      setCurrentIndex((i) => (i + 1) % videoSources.length);
    };

    const currentVideo = videoRefs.current[currentIndex];
    currentVideo?.addEventListener('ended', handleEnded);
    return () => {
      currentVideo?.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex]);

  return (
    <div className="hero">
      <div
        className="video-slider"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {videoSources.map((src, i) => (
          <video
            key={i}
            ref={el => (videoRefs.current[i] = el)}
            className="video-bg"
            muted
            playsInline
            preload="auto"
            
            autoPlay={false}
            loop={false}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      <div className="overlay"></div>
      {/* <div className="hero-content">
        <p>WELCOME TO</p>
        <h2>VMAA</h2>
      </div> */}
    </div>
  );
}

export default Hero;
