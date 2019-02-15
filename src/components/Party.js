import React, { Component } from 'react';


class Party extends Component {
  render() {
    return (
      <div>
          <div className="form-group">
    <label for="exampleFormControlSelect1">Party Affiliation</label>
    <select className="form-control-md" id="exampleFormControlSelect1">
      <option>Republican</option>
      <option>Democratic</option>
      <option>Independent</option>

    </select>
  </div>
      </div>
    );
  }
}

export default Party;