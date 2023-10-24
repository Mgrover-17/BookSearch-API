import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex flex-sb">
        <div className="footer-section">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter for the latest updates and news.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/manvi-grover-60305623b/" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ManviGrover17" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://github.com/Mgrover-17" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
