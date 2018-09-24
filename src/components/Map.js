import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

class Map extends Component {
  render() {
    /*Boilerplate code to make react-google-maps library work
    taken from react-google-maps installation documentation
    https://tomchentw.github.io/react-google-maps/#installation
    */
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defualtZoom = { 8 }
        defaultCenter = { { lat: -34.397, lng: 150.644 } }
        >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    ))




    return (
      <div className="Map">
        My Map Here
        <MyMapComponent
         isMarkerShown
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnDRTGBF8TMfvIBEZeAX3wDPaDZ24RxUE&v=3.exp&libraries=geometry,drawing,places"
         loadingElement={<div style={{ height: `100%` }} />}
         containerElement={<div style={{ height: `400px` }} />}
         mapElement={<div style={{ height: `100%` }} />}
         />
      </div>
    );
  }
};

export default Map;
