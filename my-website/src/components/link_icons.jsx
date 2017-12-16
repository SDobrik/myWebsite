import React, { Component } from 'react';
import Card from 'material-ui/Card'
//import Github from 'material-ui-icons/Github'
//import Linkedin from 'material-ui-icons/Linkedin'
import Explore from 'material-ui-icons/Explore';
import AirportShuttle from 'material-ui-icons/AirportShuttle';//change this lol

class LinkIcons extends Component {
  render() {
    //put this in front of a background image

    //the Icons I currently want
    //connect to my perssonal Mytravels
    //github
    //linkedin
    //maybe my photography insta
    //my resume
    return (
      <Card>
          <p>Check out all of my different shit</p>
          <div style={{display:'inline-block'}}>
            <AirportShuttle />
          </div>
          <div style={{display:'inline-block'}}>
            <Explore /> 
          </div>
      </Card>
    );
  }
}

export default LinkIcons;