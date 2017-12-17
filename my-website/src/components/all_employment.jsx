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
          _.map(employmentList, (job) => {//see if there is a way to start from the end since that will be the most recent employment
            return (
            <Employment
              companyName={job.companyName}
              timespan={job.timespan}
              location={job.location}
              logo={job.logo}
              description={job.description}
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