import React, { useState } from 'react';
import '../App.css';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
      
        <img src="/logo.png" alt="logo" />

        <h1>Dental Care</h1>
        
      </a>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
          &#9776;
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#docter">Docters</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
  
    
      
    </nav>
  );
};

export default Navbar;
