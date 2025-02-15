
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaReddit, FaQuora } from 'react-icons/fa';
import '../css/footer.css'; // Custom CSS file for footer styling
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isAuthenticated,loginWithRedirect } = useAuth0();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <h3 style={{ color: 'green' }}>Follow Us</h3>
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
          <h3 style={{ color: 'green' }}>Quick Links</h3>
          <ul>
            <li><Link to="/AboutUs">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3  style={{ color: 'green' }}>Learn</h3>        
            <ul>
            <li><Link to="/importantPost">Post To Learn</Link></li>
            <li><Link to="/Blog_or_Career_Tips_Page">Career Tips </Link></li>
            <li><Link to="/Interview_Question_Post">Interview Question Post</Link></li>
            <li><Link to="/job_hunting">Job-hunting</Link></li>
            <li><Link to="/motivation-link">Motivational Link</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <p>&copy; {new Date().getFullYear()} ResumeEra. All rights reserved.</p> */}
      </div>
    </footer>
  );
};
export default Footer;
