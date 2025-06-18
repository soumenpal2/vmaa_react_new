import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Coppola Logo" />
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-actions ${isOpen ? 'active' : ''}`}>
        <button className="action-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
