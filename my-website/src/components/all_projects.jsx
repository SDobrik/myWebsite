import React, { Component } from 'react';
import Project from './project.jsx'
var _ = require('lodash');

class AllProjects extends Component {
  //Toolbar would allow switching between All jobs, Dev jobs, and PM jobs
  render() {
    return (
      <div >
        <h2>My Projects</h2>
        <Toolbar> </Toolbar>
        {
          _.map(projectList, (project) => {
            <Project
            name={project.name}
            readme={project.readme}
            image={project.img}
            link={project.link}
            />
          })

        }
      </div>
    );
  }
}

export default AllProjects;