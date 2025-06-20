import React from 'react';
import './about.css';
import footerLogo from '../../assets/logo.png';
import footerLogo1 from '../../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-col logo-col">
            <img src={footerLogo} alt="Coppola Logo" className="footer-logo-img" />
            <p>Entertainment Agency</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-col">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom-col">
            <a href="https://aanaxagorasr.in/" target="_blank" rel="noopener noreferrer">
              <img src={footerLogo1} alt="Centered Logo" className="footer-center-logo" />
            </a>
            <p className="footer-logo-caption">Crafted with Code & Creativity by Aanaxagorasr Software</p>
          </div>

          <div className="footer-bottom-col">
            <h4>Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>

        <hr className="footer-divider" />
      </div>
    </footer>
  );
};

export default Footer;
