import React, { Component } from 'react';
import Card from 'material-ui/Card'; //would look really nice if all of the projects were in cards, there might even be a material thing that can be used for the grouping

class Project extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.followLink = this.followLink.bind(this)
  }

  followLink(){
    console.log(this.props.link)
  }

  render() {
    const {
      name,
      readme,
      image,
      link,
    }
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card >
        <h2>{name}</h2>
        <h4>{link}</h4>
        <img src={image} onClick={this.followLink}/>
        <p>{readme}</p>
      </Card>
    );
  }
}

export default Project;