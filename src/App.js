import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'; 
import Featured from './components/featured';
import VunueNfo from './components/vunueNfo';
import Hightlight from './components/Highlights'
class App extends Component {
  render () {

    return (
      <div className="App" style = {{ height: "1500px", background: 'cornflowerblue'}}>
    <Header/>
    <Featured/>
    <VunueNfo/>
    <Hightlight/>
      </div>
    );
  }
  }

export default App;
