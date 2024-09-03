import React, { Component } from 'react';
import Card from 'material-ui/Card';
var _ = require('lodash');
var FontAwesome = require('react-fontawesome');

class Employment extends Component {
  constructor() {
    super();
    this.followLink = this.followLink.bind(this)
  }

  followLink() {
    //TODO: keep track of what links are clicked
    console.log(this.props.link)
    window.open(this.props.link)
  }

  render() {
    const {
      companyName,
      timespan,
      position,
      isInternship,
      location,
      logo,
      description,
      bulletPoints
      } = this.props
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card style={{ width: isInternship?'30%': '60%', position:"relative", minWidth: '300px', maxWidth: "900px", display: 'inline-block', margin: 10, paddingBottom: '20px', cursor: 'pointer', verticalAlign:'top'}} onClick={this.followLink}>
        <h2>{companyName}</h2>
        {isInternship ? <h4 style={{ color:"#999999", position:"absolute", right:"5px", top:"-15px"}}>Internship</h4 >: <div/>}
        <div>
          <div style={{ height: 100, display: 'inline-block' }}>
            <h4>{position}</h4>
            <h6>{timespan.startDate + ' - ' + timespan.endDate}</h6>
            <h6>{location}</h6>
          </div>
          <div style={{ height: 100, display: 'inline-block' }}>
            <img src={require('../images/' + logo)} style={{ height: '100%', paddingLeft: 50 }} />
          </div>
        </div>
        <div style={{ height: 'fit-content', width: '100%', textAlign:'left' }}>
          <p style={{ paddingLeft: 20, fontStyle:"italic" }}>{description}</p>
          <ul>
          {
            _.map(bulletPoints, (bullet) => {
              return (
                <li>
                  {bullet}
                </li>
              )
            }
            )
          }
          </ul>
        </div>
      </Card>
    );
  }
}

export default Employment;