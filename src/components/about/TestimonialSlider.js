// TestimonialSection.js

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Correct Swiper module import
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';
import './about.css';

const testimonials = [
  {
    rating: 5,
    title: "Excellent service and friendly team!",
    designation: "— Priya S., Marketing Manager",
  },
  {
    rating: 4,
    title: "They helped us increase our online sales significantly.",
    designation: "— Arjun M., E-commerce Owner",
  },
  {
    rating: 5,
    title: "Creative, professional, and timely delivery!",
    designation: "— Neha R., Brand Consultant",
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div
      className="section-wrapper"
      style={{
        backgroundImage: `url('/images/about-image/background2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="testimonial-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} color="#fbbf24" size={20} />
                  ))}
                </div>
                <p className="testimonial-title">"{testimonial.title}"</p>
                <p className="testimonial-designation">{testimonial.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-footer">
          <div className="custom-prev">←</div>
          <div className="pagination">{currentSlide} / {testimonials.length}</div>
          <div className="custom-next">→</div>
        </div>
      </div>

      <div className="below-section">
        <div className="below-left">
          <img src="/images/about-image/left2.jpg" alt="Left visual" />
        </div>
        <div className="below-right">
          <p>ROMANCE</p>
          <h2>Mesmerizing love story for romantics</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
