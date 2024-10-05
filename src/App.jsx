import React, { useState } from 'react';
import './css/app.scss';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import constants from './constants/constants';

const App = () => {
  const [activePane, setActivePane] = useState(constants.HOME_ID);

  return (
    <div className="app">

        <Header setActivePane={setActivePane}/>
        <Body activePane={activePane}/>
        <Footer/>
    </div>
  );
}

export default App;
