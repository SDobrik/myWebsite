import React, { Component } from 'react';
import Employment from './employment.jsx'
const employmentList = require('../data/employmentList.js').default;
var _ = require('lodash');

class EmploymentHistory extends Component {//maybe change name to employment history
  render() {
    //total working time counter
    //maybe allow filtering of employment, not sure by which attributes
    console.log(employmentList)
    return (
      <div >
        <h2>My Employment history</h2>
        {
          _.map(employmentList, (job) => {//we need lodash _.map()... set all of the project data in a json
            //might want a _.mapRight so we get most rrecent jobs first
            console.log(job)
            return (
            <Employment
              companyName={job.companyName}
              timespan={job.timespan}
              location={job.location}
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