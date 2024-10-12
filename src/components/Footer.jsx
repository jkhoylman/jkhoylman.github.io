import React from 'react';
import { ReactSVG } from 'react-svg';
import '../css/footer.scss';

import linkedInLogo from '../assets/icons/linkedin.svg';
import githubLogo from '../assets/icons/github-square.svg';
import twitterLogo from '../assets/icons/twitter.svg';
import instagramLogo from '../assets/icons/instagram.svg';
import spotifyLogo from '../assets/icons/spotify.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <a className="icon-link" href="https://www.linkedin.com/in/jacob-hoylman-125ab816a/" target="_blank">
          <ReactSVG className="footer-icon icon-fill" src={linkedInLogo}/>
        </a>
        <a className="icon-link" href="https://github.com/jkhoylman" target="_blank">
          <ReactSVG className="footer-icon icon-fill" src={githubLogo}/>
        </a>
        <a className="icon-link" href="https://twitter.com/jkhoylman" target="_blank">
          <ReactSVG className="footer-icon icon-fill" src={twitterLogo}/>
        </a>
        <a className="icon-link" href="https://www.instagram.com/jacob_hoylman" target="_blank">
          <ReactSVG className="footer-icon icon-stroke" src={instagramLogo}/>
        </a>
        <a className="icon-link" href="https://open.spotify.com/user/jkhoylman?si=0c663dda3b0d4b4c" target="_blank">
          <ReactSVG className="footer-icon icon-stroke icon-fill" src={spotifyLogo}/>
        </a>
      </div>
      <div className="copyright">© 2019-2024 Jacob Hoylman</div>
    </div>
  );
}

export default Footer;