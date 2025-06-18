// App.js
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutPage from './components/about/AboutPage';

import './App.css';
import loaderVideo from './assets/loader.mp4';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const video = loaderRef.current;
    if (video) {
      video.play().catch((e) => console.warn('Loader autoplay issue:', e));
      video.addEventListener('ended', () => setIsLoading(false));
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <video
          ref={loaderRef}
          className="loader-video"
          src={loaderVideo}
          type="video/mp4"
          muted
          autoPlay
          playsInline
          preload="auto"
        />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
