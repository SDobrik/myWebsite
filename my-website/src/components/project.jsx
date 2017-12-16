import React, { Component } from 'react';
import Card from 'material-ui/Card'; //would look really nice if all of the projects were in cards, there might even be a material thing that can be used for the grouping

class Project extends Component {
  render() {
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card >
        <img/>
        <h2>{project.title}</h2>
        <p>{project.readme}</p>
      </Card>
    );
  }
}

export default Project;