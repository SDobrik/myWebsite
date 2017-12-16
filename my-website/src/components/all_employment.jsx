import React, { Component } from 'react';
import Employment from './employment.jsx'

class AllHistory extends Component {//maybe change name to employment history
  render() {
    //total working time counter
    //maybe allow filtering of employment, not sure by which attributes

    return (
      <div >
          <h2>My Employment history</h2>
          {
              //we need lodash _.map()... set all of the project data in a json
              <Employment

              />
          }
      </div>
    );
  }
}

export default AllHistory;