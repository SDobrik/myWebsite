import React, { Component } from 'react';

class Project extends Component {
  render() {
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <div >
        <img/>
        <h2>{project.title}</h2>
        <p>{project.readme}</p>
      </div>
    );
  }
}

export default Project;