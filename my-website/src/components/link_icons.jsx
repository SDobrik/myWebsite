import React, { Component } from 'react';
import Card from 'material-ui/Card'
//import Github from 'material-ui-icons/Github'
//import Linkedin from 'material-ui-icons/Linkedin'
import Explore from 'material-ui-icons/Explore';
import Description from 'material-ui-icons/Description';
import FontAwesome  from 'react-fontawesome';// TODO: look up benifits of require vs import

class LinkIcons extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.followLink = this.followLink.bind(this)
  }

  followLink(link){
    console.log(link)
    //open link in new tab
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
        <div onClick={()=> this.followLink('www.github.com/sdobrik')} style={{ display: 'inline-block' }}>
          <FontAwesome
            name='github'
          />
        </div>
        <div  onClick={()=> this.followLink('www.yourTravels.io')} style={{ display: 'inline-block' }}>
          <Explore />
        </div>
        <div onClick={()=> this.followLink('www.linkedin.com/sdobrik')} style={{ display: 'inline-block' }}>
          <FontAwesome
            name='Linkedin'
          />
        </div>
        <div onClick={()=> this.followLink('./resume.html')} style={{ display: 'inline-block' }}>
          <Description/>
        </div>
      </Card>
    );
  }
}

export default LinkIcons;