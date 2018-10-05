import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';
import {Markers} from './markers.js';

class ItemList extends Component {

  render(){
    return(
      <div className="ItemList">
        <h2>This is the Item List</h2>
      </div>
    );
  }
}
export default ItemList;
