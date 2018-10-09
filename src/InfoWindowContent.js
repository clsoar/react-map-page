import React, { Component } from 'react';
import './Map.css';

class InfoWindowContent extends Component {

  render(){
    return (
      <div className="window-content">
        <h3 className="window-heading">{this.props.marker.name}</h3>
        <img src="#" alt="alt text" className="window-image"/>
        <div className="window-address">{this.props.marker.address}</div>

      </div>

    )
  }
}
export default InfoWindowContent;
