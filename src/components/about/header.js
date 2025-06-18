import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png'; 

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <header className="header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-image/background.png)` }}>
      
      {/*  Moved OUTSIDE of header-container */}
      <div className="centered-image">
        <img src={`${process.env.PUBLIC_URL}/images/about-image/logo.jpg`} alt="Centered" />
      </div>

      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <div
            className="portfolio-menu"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <span>Portfolio</span>
            {portfolioOpen && (
              <div className="mega-menu">
                <div>
                  <h4>Web Design</h4>
                  <ul>
                    <li>Corporate Sites</li>
                    <li>Landing Pages</li>
                  </ul>
                </div>
                <div>
                  <h4>Branding</h4>
                  <ul>
                    <li>Logo</li>
                    <li>Packaging</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="right-section">
          <button className="rec-btn">CONNECT US</button>
          <div className="hamburger" onClick={() => setSidebarOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
