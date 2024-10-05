import React, { useEffect } from 'react';
import '../css/body.scss';

import Home from './content/Home';
import Saluterra from './content/Saluterra';
import Music from './content/Music';
import Shirts from './content/Shirts';
import Info from './content/Info';

import constants from '../constants/constants';

const Body = ({
    activePane,
}) => {

  let content; 
  switch(activePane) {
      case constants.HOME_ID:
        content = <Home />;
        break;
      case constants.SALUTERRA_ID:
        content = <Saluterra />;
        break;
      case constants.MUSIC_ID:
        content = <Music />;
        break;
      case constants.SHIRTS_ID:
        content = <Shirts />;
        break;
      case constants.INFO_ID:
        content = <Info />;
        break;
  };

  return (
    <div className="body">
        {content}
    </div>
  );
}

export default Body;