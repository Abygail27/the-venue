import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'; 
import Featured from './components/featured';
import VunueNfo from './components/vunueNfo';
import Hightlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
class App extends Component {
  render () {

    return (
      <div className="App" style = {{ height: "1500px"}}>
    <Header/>
    <Featured/>
    <VunueNfo/>
    <Hightlight/>
    <Pricing/>
    <Location/>
      </div>
    );
  }
  }

export default App;
