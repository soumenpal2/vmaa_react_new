
import React from 'react';
import Header from './header'; 
import './header.css'; 
import './about.css';   
import VideoCarousel from './VideoCarousel';     
import TwoSectionLayout from './TwoSectionLayout';   
import TestimonialSlider from './TestimonialSlider';
import ScrollingShowcase from './animatedtext';
import LeftTextSection from './LeftTextSection'; 
import MasonryGallery from './MasonryGallery';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

    <div className="black-section">
  <div className="text-container left">
     <p>
					ABOUT US</p>
    <h1>
					Highlights both storytelling and influence.</h1>
  </div>
  <div className="text-container right">
    <p>
      VMAA Entertainment is a dynamic and multifaceted media and event production company, specializing in the creation of high-quality feature films, web series, ad films, corporate films, documentaries, and comprehensive event services. Our team comprises highly experienced professionals from diverse backgrounds, bringing together a unique blend of creativity, technical expertise, and strategic insight.

We believe in powerful storytelling and meaningful engagement, whether through cinema, branded content, or live experiences. Our work spans both national and international markets, with a commitment to excellence and originality.


    </p>
  </div>
</div>

<VideoCarousel />
<TwoSectionLayout/>
<TestimonialSlider/>
<ScrollingShowcase/>
<MasonryGallery />
<LeftTextSection/>
<ContactSection />
<Footer />































    </div>
  );
};

export default AboutPage;
