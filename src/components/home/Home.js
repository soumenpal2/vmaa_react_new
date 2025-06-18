// components/home/Home.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import VideoGrid from './VideoGrid';
import Layout from './second-Layout';
import VideoSliderLayout from './VideoSliderLayout';
import NewBlackLayout from './NewBlackLayout';
import SplitFeatureSection from './SplitFeatureSection';
import Footer from '../about/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Layout />
      <VideoSliderLayout />
      <NewBlackLayout />
      <SplitFeatureSection/>
      <Footer/>
    </div>
  );
};

export default Home;
