import React, { Component } from 'react';
import Project from './project.jsx'

class AllProjects extends Component {
    //Toolbar would allow switching between All jobs, Dev jobs, and PM jobs
  render() {
    return (
      <div >
          <h2>My Projects</h2>
          <Toolbar> </Toolbar>
          {
              //we need lodash _.map()... set all of the project data in a json
              <Project
              
              />
          }
      </div>
    );
  }
}

export default AllProjects;