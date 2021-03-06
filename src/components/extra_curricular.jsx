import React, { Component } from 'react';
import Card from 'material-ui/Card'; 
var _ = require('lodash');

class ExtraCurricular extends Component {
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
      activityName,
      timespan,
      position,
      location,
      logo,
      description,
      bulletPoints
      } = this.props
    //add some event for hover where a shadow of a github logo show up and if you click it, it will take you to github
    return (
      <Card style={{ width: '30%', display: 'inline-block', margin: 10, paddingBottom: '20px', cursor: 'pointer', verticalAlign:'top'}} onClick={this.followLink}>
        <h2>{activityName}</h2>
        <div>
          <div style={{ height: 100, display: 'inline-block' }}>
            <h4>{position}</h4>
            <h6>{timespan.startDate + ' - ' + timespan.endDate}</h6>
            <h6>{location}</h6>
          </div>
          {!logo ? <div/>:<div style={{ height: 100, display: 'inline-block' }}>
            <img src={require('../images/' + logo)} style={{ height: '100%', paddingLeft: 50 }} />
          </div>}
        </div>
        <div style={{ height: 'fit-content', width: '100%', textAlign:'left' }}>
          <p>{description}</p>
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

export default ExtraCurricular;