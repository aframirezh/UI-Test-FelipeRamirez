import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome//free-brands-svg-icons';
import './FooterComponent.scss';

function FooterComponent () {
  return (
    <footer>
        <div className="contact">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="social">
            <a href="#">Follow Us</a>
            <FontAwesomeIcon icon={faFacebook} className="social__icon" />
            <FontAwesomeIcon icon={faTwitter} className="social__icon" />
        </div>
    </footer>

  );
}

export default FooterComponent;