import React, { Component } from 'react';
import Employment from './employment.jsx'
const employmentList = require('../data/employmentList.js').default;
var _ = require('lodash');

class EmploymentHistory extends Component {//maybe change name to employment history
  render() {
    //total working time counter
    //maybe allow filtering of employment, not sure by which attribute
    _.reverse(employmentList)
    return (
      <div >
        <h2>My Employment History</h2>
        {
          _.map(employmentList, (job) => {
            return (
            <Employment
              {...job}
            />
          )
          })
        }
      </div>
    );
  }
}

export default EmploymentHistory;