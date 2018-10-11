import React, { Component } from 'react';


class FilterOptions extends Component {

  render(){
    return (
      <div className="filter-options">
        <label className="filter-heading" for="filter-menu">Filter by Amenity</label>
        <select className="filter-menu" name="filter-name" defaultValue={this.props.value} onChange={event => this.props.selectFilter(event)}>
          <option value="default">None Selected</option>
          <option value="pool">Pool</option>
          <option value="beachAccess">Beach Front</option>
          <option value="fitnessCenter">Fitness Center</option>
          <option value="tennisCourt">Tennis Courts</option>
          <option value="parking">Parking Included</option>
        </select>
      </div>
    )
  }
}
export default FilterOptions;
