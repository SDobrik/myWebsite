import React, { Component } from 'react';
import Card from 'material-ui/Card'; //would look really nice if all of the projects were in cards, there might even be a material thing that can be used for the grouping

class Employment extends Component {
  render() {
      const {
          companyName,
          timespan,
          location,
          description
      } = this.props
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card >
        <img/>
        <h2>{companyName}</h2>
        <h4>{timespan.startDate + ' - '+ timespan.endDate}</h4>
        <h4>{location}</h4>
        <p>{description}</p> 
      </Card>
    );
  }
}

export default Employment;