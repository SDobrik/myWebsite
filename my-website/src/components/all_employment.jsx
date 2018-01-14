import React, { Component } from 'react';
import Employment from './employment.jsx'
const employmentList = require('../data/employmentList.js').default;
var _ = require('lodash');

class EmploymentHistory extends Component {//maybe change name to employment history
  render() {
    //total working time counter
    //maybe allow filtering of employment, not sure by which attribute
    return (
      <div >
        <h2>My Employment History</h2>
        {
          _.map(employmentList, (job) => {//TODO: make the array reverse order so it has the most recent job first
            return (//this is so unnessesary because I should just pass job in, I'll fix it later
            <Employment
              companyName={job.companyName}
              timespan={job.timespan}
              position={job.position}
              location={job.location}
              logo={job.logo}
              link={job.link}
              description={job.description}
              bulletPoints={job.bulletPoints}
              key={job.key}
            />
          )
          })
        }
      </div>
    );
  }
}

export default EmploymentHistory;