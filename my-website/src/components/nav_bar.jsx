import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class NavBar extends Component {
  render() {
    //put this in front of a background image

    //the Icons I currently want
    //connect to my perssonal Mytravels
    //github
    //linkedin
    //maybe my photography insta
    //my resume
    return (
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit" style={{ width: 200 }}>
              Spencer Dobrik
              </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

export default NavBar;