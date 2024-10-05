import React from 'react';
import { ReactSVG } from 'react-svg';
import '../css/footer.scss';

import linkedInLogo from '../assets/icons/linkedin.svg';
import githubLogo from '../assets/icons/github-square.svg';
import twitterLogo from '../assets/icons/twitter.svg';
import instagramLogo from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <ReactSVG className="footer-icon icon-fill" src={linkedInLogo}/>
        <ReactSVG className="footer-icon icon-fill" src={githubLogo}/>
        <ReactSVG className="footer-icon icon-fill" src={twitterLogo}/>
        <ReactSVG className="footer-icon icon-stroke" src={instagramLogo} style={{fill: 'none'}}/>
      </div>
      <div className="copyright">© 2019-2024 Jacob Hoylman</div>
    </div>
  );
}

export default Footer;