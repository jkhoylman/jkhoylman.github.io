import React, {useState} from 'react';
import constants from './constants/constants';
import './css/body.css';

const Body = () => {
  const [active, setActive] = useState(constants.HOME_ID);

  return (
    <div className="body">
    </div>
  );
}

export default Body;