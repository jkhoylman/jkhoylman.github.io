import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './css/app.scss';

const App = () => {
  return (
    <div className="app">

        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
