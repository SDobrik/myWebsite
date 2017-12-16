import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkIcons from './components/link_icons'
import NavBar from './components/nav_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, I'm Spencer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkIcons/>
      </div>
    );
  }
}

export default App;
