import React from 'react';
import { Link } from 'react-router-dom';
import './VideoGrid.css';

const videos = [
  { src: `${process.env.PUBLIC_URL}/videos/video-about.mp4`, title: 'ABOUT US', link: '/about' },
  { src: `${process.env.PUBLIC_URL}/videos/vertical-split-showcase.mp4`, title: 'CINEMATOGRAPHY' },
  { src: `${process.env.PUBLIC_URL}/videos/video3.mp4`, title: 'SHOWCASE' },
  { src: `${process.env.PUBLIC_URL}/videos/film-festival.mp4`, title: 'FILM FESTIVAL' },
  { src: `${process.env.PUBLIC_URL}/videos/Film banner.mp4`, title: 'FILM BANNER SHOWCASE' },
  { src: `${process.env.PUBLIC_URL}/videos/VIDEO_1.mp4`, title: 'VIDEO' },
  { src: `${process.env.PUBLIC_URL}/videos/event_slider.mp4`, title: 'EVENT SLIDER' },
  { src: `${process.env.PUBLIC_URL}/videos/film_gallery.mp4`, title: 'FILM GALLERY' },
  { src: `${process.env.PUBLIC_URL}/videos/upcoming_1.mp4`, title: 'UPCOMING' },
];

export default function VideoGrid() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            {video.link ? (
              <Link to={video.link}>
                <video src={video.src} muted autoPlay loop playsInline />
              </Link>
            ) : (
              <video src={video.src} muted autoPlay loop playsInline />
            )}
            <p className="video-text">{video.title}</p>
          </div>
        ))}

        {/* Optional final block of text */}
        <div className="video-item text-only">
          <div className="text-block">
            <h3>PRESENT YOUR FILMS PROMOTE NEWS AND FESTIVALS</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
