import React, { Component } from 'react';
import ExtraCurricular from './extra_curricular'
var _ = require('lodash');
const extraCurricularList = require('../data/extraCurricularList.js').default;

class AllExtraCurriculars extends Component {
  //Toolbar would allow switching between All jobs, Dev jobs, and PM jobs
  render() {
    _.reverse(extraCurricularList);
    return (
      <div >
        <h2>My Extra Curriculars</h2>
        {
          _.map(extraCurricularList, (ec) => {
            return (
            <ExtraCurricular
              {...ec}
            />
          )
          })
        }
      </div>
    );
  }
}

export default AllExtraCurriculars;