import React from 'react';
import '../App.css'; // Ensure this points to your App.css
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Logo */}
      <a href="/" className="footer-logo">Dental Care (pvt) ltd</a>

      {/* Footer Links */}
      <ul className="footer-links">
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

      {/* Social Media Links */}
      <div className="footer-social">
  <a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
  <a href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
  <a href="/" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
</div>



      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 DentalCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

