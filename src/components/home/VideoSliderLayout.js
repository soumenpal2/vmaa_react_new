import React, { useEffect, useRef } from "react";
import video1 from "../../assets/slider1.mp4";
import video2 from "../../assets/slider2.mp4";
import video3 from "../../assets/video3.mp4";
import "./VideoSliderLayout.css";

const videos = [video1, video2, video3];

const VideoSliderLayout = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const cardWidth = 350 + 20;
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (sliderRef.current.scrollLeft + cardWidth >= maxScrollLeft) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-layout-container">
      <div className="video-layout-overlay">
        <div className="video-layout-left">
          <h1 className="video-title2">
            <span style={{ fontSize: "36px" }}>DISCOVER A COLLECTION OF
  </span>
            <br />
            CAPTIVATING <span style={{ color: "#D3A82F" }}>CINEMATIC</span> EFFECTS
          </h1>
          <h4>From subtle transitions to striking visual experiences, VMMA Entertainment brings you an immersive gallery that elevates every movie showcase.</h4>
          <button className="video-button">Explore More</button>
        </div>

        <div className="video-layout-right" ref={sliderRef}>
          {videos.map((src, index) => (
            <div className="video-card" key={index}>
              <video
                src={src}
                muted
                autoPlay
                loop
                playsInline
                className="slider-video"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSliderLayout;