import React, { Component } from 'react';
import './Map.css';

const OnsiteFood = (props) =>

  <ul className="restaurant-info">
    <li className="restaurant-name">{props.marker.restaurant.name}</li>
    <li className="restaurant-website"><a href={props.marker.restaurant.website}>Restaurant Website</a></li>


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
        <img src="#" alt="Alt text" className="window-image"/>
        <div className="window-address">{this.props.marker.address}</div>
        <div className="window-website"><a target="_blank" href={this.props.marker.website}>Accomadation Website</a></div>
        <div className="window-phone">{this.props.marker.phone}</div>
        <div className="type-building">Accomadation Type: {this.props.marker.typeOfBuilding}</div>
        <div className="amenities">
          <ul className="amenities-list">
            <li className="BeachAccess">Beach Front: {this.amentiesCheck(this.props.marker.beachAccess)}</li>
            <li className="Pool">Pool: {this.amentiesCheck(this.props.marker.pool)}</li>
            <li className="fitness-center">Fitness Center: {this.amentiesCheck(this.props.marker.fitnessCenter)}</li>
            <li className="tennis-court">Tennis Courts: {this.amentiesCheck(this.props.marker.tennisCourt)}</li>
            <li className="parking">Parking: {this.amentiesCheck(this.props.marker.parking)}</li>
            <li className="restaurant">Restaurant on Site: {this.amentiesCheck(this.props.marker.restaurant.value)}</li>

          </ul>
          {this.props.marker.restaurant.value && <OnsiteFood {...this.props}/>}
        </div>
        <div className="description">{this.props.marker.description}</div>
      </div>

    )
  }
}
export default InfoWindowContent;
