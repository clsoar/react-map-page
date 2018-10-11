import React, { Component } from 'react';


class FilterOptions extends Component {



  render(){
    return (
      <div className="filter-options">
        <div className="filter heading">Amenity Filter</div>
        <div className="">
        <select defaultValue={this.props.value} onChange={event => this.props.selectFilter(event)}>
          <option value="default">--Filter by amenity or building type--</option>
          <option value="pool">Pool</option>
          <option value="beachAccess">Beach Front</option>
          <option value="fitnessCenter">Fitness Center</option>
          <option value="tennisCourt">Tennis Courts</option>
          <option value="parking">Parking Included</option>

        </select>
        </div>

      </div>
    )
  }
}
export default FilterOptions;
