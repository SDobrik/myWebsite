import React, { Component } from 'react';
import './App.css';
import LinkIcons from './components/link_icons'
import EmploymentHistory from './components/all_employment'
import ExtraCurricularHistory from './components/all_extra_curriculars'
import ProjectHistory from './components/all_projects'
import NavBar from './components/nav_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar/> */}
        <header className="App-header">
          <h1 className="App-title">Hi, I'm Spencer</h1>
        </header>
        <p className="App-intro">
        </p>
        <LinkIcons/>
        <EmploymentHistory/>
        <ExtraCurricularHistory/>
        <ProjectHistory/>
        <h4>Not interested? Check out <a target="_blank" href="http://arashrai.com:5000/randomSEwebsite?omit=Spencer">this</a> guy/gal.</h4>
      </div>
    );
  }
}

export default App;
