import { useState } from 'react';
import "../style/Footer.css";
import logo from '../images/output-logo.png';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
        

      <div className="footer-section">
        <img 
          src={logo}
          alt="Group Logo" 
          className="footer-logo"
        />
        <p className="footer-description">
          Your trusted partner for innovation and digital solutions.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#portfolio">Our Portfolio</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Info</h3>

        <p className="footer-contact">
          <FaMapMarkerAlt className="icon" />
          Ramallah, Palestine
        </p>

        <p className="footer-contact">
          <FaPhoneAlt className="icon" />
        02 290 2722
        </p>

        <p className="footer-contact">
          <FaEnvelope className="icon" />
          info@autosign.ps
        </p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
