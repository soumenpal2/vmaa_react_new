import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./about.css";
import Modal from "react-modal";
import { FaPlayCircle } from "react-icons/fa";

const videos = [
  { title: "Modern Living", src: "/videos/Slider1.mp4" },
  { title: "Smart Tech", src: "/videos/Slider2.mp4" },
  { title: "Creative Work", src: "/videos/Slider3.mp4" },
  { title: "Urban Culture", src: "/videos/video-4.mp4" },
];

const VideoCarousel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setActiveVideo("");
    setModalIsOpen(false);
  };

  return (
    <div className="video-carousel-wrapper">
      <Swiper
        modules={[Autoplay]} 
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        slidesPerView={2.5}
        spaceBetween={0}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
        className="video-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="video-slide">
            <div className="video-container">
              <video
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                className="slide-video"
              />
              {activeIndex === index && (
                <>
                  <div className="video-title">{video.title}</div>
                  <div
                    className="video-icon"
                    onClick={() => openModal(video.src)}
                  >
                    <FaPlayCircle size={30} />
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="video-modal"
        overlayClassName="video-overlay"
        ariaHideApp={false}
      >
        <video src={activeVideo} controls autoPlay className="modal-video" />
      </Modal>
    </div>
  );
};

export default VideoCarousel;
