import React, { Component } from 'react';


class FilterOptions extends Component {
  /*label tag wrapped around dropdown
    per https://groups.google.com/forum/#!msg/reactjs/N-gDqH2LEcQ/bjBBTKSAZaYJ*/

  render(){
    return (
      <div className="filter-options">
        <label className="filter-heading">Filter by Amenity
          <select className="filter-menu" name="filter" defaultValue={this.props.value} onChange={event => this.props.selectFilter(event)}>
            <option value="default">None Selected</option>
            <option value="pool">Pool</option>
            <option value="beachAccess">Beach Front</option>
            <option value="fitnessCenter">Fitness Center</option>
            <option value="tennisCourt">Tennis Courts</option>
            <option value="parking">Parking Included</option>
          </select>
        </label>
      </div>
    )
  }
}
export default FilterOptions;
