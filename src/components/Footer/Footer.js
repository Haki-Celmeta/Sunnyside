import React from "react";
import './_footer.scss';
import facebook from '../../assets/images/social-media/facebook.svg';
import instagram from '../../assets/images/social-media/instagram.svg';
import pinterest from '../../assets/images/social-media/pinterest.svg';

const Footer = () => {
  return (
    <div className="all-footer-container">
      <div className="footer-container">
        <h1>sunnyside</h1>
        <div className="links">
          <a href="www.google.com">About</a>
          <a href="www.google.com">Services</a>
          <a href="www.google.com">Projects</a>
        </div>
        <div className="social-media-links">
          <img src={facebook} alt="facebook icon"/>
          <img src={instagram} alt="instagram icon"/>
          <img src={pinterest} alt="pinterest icon"/>
        </div>
      </div>
    </div>
  )
}

export default Footer;