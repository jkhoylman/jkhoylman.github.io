import React from 'react';
import { ReactSVG } from 'react-svg';
import '../css/header.scss';

import constants from '../constants/constants';

import homeLogo from '../assets/icons/home.svg';
import itchLogo from '../assets/icons/itchio.svg';
import infoLogo from '../assets/icons/info-circle.svg';

const Icon = ({
  id,
  setActivePane,
  activePane,
  icon,
  href,
  className,
}) => {
  const isActive = id === activePane;
  let cn = isActive ? className + " active" : className;
  cn += " header-icon";

  const onClick = () => {
    if(isActive) {
      // TODO: navigate to href
    } else {
      setActivePane(id);
    }
  }

  return (
    <ReactSVG className={cn} src={icon} onClick={onClick}/>
  );
}

const Header = ({
  activePane,
  setActivePane,
}) => {
  return (
    <div className="header">
      <div className="title-container">
          <div className="title">Jacob Hoylman</div>
          <div className="subtitle">a man of many pursuits</div>
      </div>
      <hr className="divider"/>
      <div className="icon-container">
        <Icon id={constants.HOME_ID} setActivePane={setActivePane} activePane={activePane} icon={homeLogo} className={"icon-fill"} href={"#"}/>
        {/* <Icon id={constants.SALUTERRA_ID} setActivePane={setActivePane} activePane={activePane} icon={itchLogo} className={"icon-fill"} href={"#"} /> */}
        <Icon id={constants.INFO_ID} setActivePane={setActivePane} activePane={activePane} icon={infoLogo} className={"icon-stroke"} href={"#"}/>
      </div>
    </div>
  );
}

export default Header;