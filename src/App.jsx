import React, {useState} from 'react';
import constants from './constants/constants';

import './css/App.css';

const App = () => {
  const [active, setActive] = useState(constants.HOME_ID);

  return (
    <div className="app">
    </div>
  );
}

export default App;
