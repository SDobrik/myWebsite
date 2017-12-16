import React, { Component } from 'react';
import Card from 'material-ui/Card'; //would look really nice if all of the projects were in cards, there might even be a material thing that can be used for the grouping

class Employment extends Component {
  render() {
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card >
        <img/>
        <h2>{Employment.title}</h2>
        <h4>{Employment.dates}</h4>
        <h4>{Employment.location}</h4>
        <p>{Employment.readme}</p>
      </Card>
    );
  }
}

export default Employment;