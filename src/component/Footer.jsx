import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaReddit, FaQuora } from 'react-icons/fa';
import '../css/footer.css'; // Custom CSS file for footer styling
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <Link to="https://www.facebook.com/shahrukh.mirza.123276" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://x.com/shahrukhmirza88" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/shahrukh-mirza-3027438a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/shahrukhmirza88/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </Link>
            </li>
          </ul>
          
          <ul className="social-links">
            <li>
            <Link to="https://www.reddit.com/user/shahrukhmirza888/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaReddit />
              </Link>
            </li>
            <li>
            <Link to="https://www.quora.com/profile/Shahrukh-Mirza-18" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaQuora />
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/AboutUs">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/important_post">Important Post</Link></li>
            <li><Link to="/Blog_or_Career_Tips_Page">Blog or Career Tips Page</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ResumeEra. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
