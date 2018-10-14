import React, { Component } from 'react';
import './InfoWindow.css';

const OnsiteFood = (props) =>

  <ul className="restaurant-info">
    <li className="restaurant-name">{props.marker.restaurant.name}</li>
    <li className="restaurant-website"><a target="_blank" href={props.marker.restaurant.website}>Restaurant Website</a></li>
  </ul>


class InfoWindowContent extends Component {

  amentiesCheck = (amenity) => {
    let answer = "yes";
    amenity ? answer="yes" : answer="no";
    return answer
    }

  restaurantInfoAdder = (food) => {
    let foodAnswer = "checking";
    const noFood = null;

    food ? foodAnswer=<OnsiteFood /> : foodAnswer=noFood;
    return foodAnswer;
  }


  render(){
    return (
      <div className="window-content">
        <h3 className="window-heading">{this.props.marker.name}</h3>
        <div className="window-address">{this.props.marker.address}</div>
        <div className="window-website"><a target="_blank" href={this.props.marker.website}>Accomadation Website</a></div>
        <div className="window-phone">{this.props.marker.phone}</div>
        <div className="type-building">Accomadation Type: {this.props.marker.typeOfBuilding}</div>
        <div className="amenities">
          <ul className="amenities-list">
            <li className="BeachAccess amenity">Beach Front: {this.amentiesCheck(this.props.marker.beachAccess)}</li>
            <li className="Pool amenity">Pool: {this.amentiesCheck(this.props.marker.pool)}</li>
            <li className="fitness-center amenity">Fitness Center: {this.amentiesCheck(this.props.marker.fitnessCenter)}</li>
            <li className="tennis-court amenity">Tennis Courts: {this.amentiesCheck(this.props.marker.tennisCourt)}</li>
            <li className="parking amenity">Parking: {this.amentiesCheck(this.props.marker.parking)}</li>
            <li className="restaurant amenity">Restaurant on Site: {this.amentiesCheck(this.props.marker.restaurant.value)}</li>
          </ul>
          {this.props.marker.restaurant.value && <OnsiteFood className="restaurant-info-component" {...this.props}/>}
        </div>
        <div className="description">{this.props.marker.description}</div>
      </div>

    )
  }
}
export default InfoWindowContent;
