import React, { Component } from 'react';
import Card from 'material-ui/Card'; //would look really nice if all of the projects were in cards, there might even be a material thing that can be used for the grouping

class Project extends Component {
  constructor() {
    super();
    this.followLink = this.followLink.bind(this)
  }

  followLink(){
    //TODO: keep track of what links are clicked
    window.open(this.props.link)
  }

  render() {
    const {
      name,
      readme,
      image,
      link,
      languages,
    } = this.props;
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    //not sure if I like the look of putting in languages like that
    return (
      <Card style={{ height: 300, width: '30%', display: 'inline-block', margin: 10, paddingBottom: '20px', cursor: 'pointer', verticalAlign: 'top'}} onClick={this.followLink}>
        <h2>{name}</h2>
        <h6>{link}</h6>
        <img src={image}/>
        <code>{languages}</code>
        <p>{readme}</p>
      </Card>
    );
  }
}

export default Project;