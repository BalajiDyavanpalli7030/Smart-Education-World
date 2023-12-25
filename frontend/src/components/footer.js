import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const handleHomeClick = () => {
    // Navigate to the starting page
    window.location.reload();
  };

  return (
    <footer>
      <div className="quick-links">
        <ul>
          <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>
            <a href="https://www.youtube.com/@SmartEducationWorld0" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
