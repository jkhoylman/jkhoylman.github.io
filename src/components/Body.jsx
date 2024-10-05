import React from 'react';
import '../css/body.scss';

import Home from './content/Home';

import constants from '../constants/constants';

const Body = ({
    activePane,
}) => {

  return (
    <div className="body">
        {activePane === constants.HOME_ID && <Home/>}
    </div>
  );
}

export default Body;