import React, { Component } from 'react';
import Card from 'material-ui/Card'
//import Github from 'material-ui-icons/Github'
//import Linkedin from 'material-ui-icons/Linkedin'
import Explore from 'material-ui-icons/Explore';
import Description from 'material-ui-icons/Description';
var FontAwesome  = require('react-fontawesome');// TODO: look up benifits of require vs import

class LinkIcons extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.followLink = this.followLink.bind(this)
  }

  followLink(link){
    //TODO: keep track of what links are clicked
    window.open(link)
  }

  render() {
    //put this in front of a background image

    //the Icons I currently want
    //connect to my perssonal Mytravels
    //github
    //linkedin
    //maybe my photography insta
    //my resume
    return (
      <Card style={{ width: 'fit-content', padding: '5px 30px', }}>
        <p>Check out all of my different shit</p>
        <div onClick={()=> this.followLink('https:www.github.com/sdobrik')} style={{ display: 'inline-block' }}>
          <FontAwesome
            name='github'
            size='2x'
          />
        </div>
        <div  onClick={()=> this.followLink('https:www.yourTravels.io')} style={{ display: 'inline-block' }}>
          <Explore />
        </div>
        <div onClick={()=> this.followLink('https:www.linkedin.com/in/spencerdobrik/')} style={{ display: 'inline-block'}}>
          <FontAwesome
            name='linkedin-square'
            size='2x'
          />
        </div>
        <div onClick={()=> this.followLink('/resume.html')} style={{ display: 'inline-block' }}>
          <Description/>
        </div>
      </Card>
    );
  }
}

export default LinkIcons;