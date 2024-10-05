import React from 'react';
import '../css/header.scss';

const Header = ({
  setActivePane,
}) => {
  return (
    <div className="header">
      <div className="title-container">
          <div className="title">Jacob Hoylman</div>
          <div className="subtitle">a man of many pursuits</div>
      </div>
      <hr className="divider"/>
      <div className="icon-container">icons</div>
    </div>
  );
}

export default Header;