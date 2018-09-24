import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 30.403191, lng: -86.867378 },
      zoom: 12
    };
  }

  render() {
    /*Boilerplate code to make react-google-maps library work
    taken from react-google-maps installation documentation
    https://tomchentw.github.io/react-google-maps/#installation
    */
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom = {this.state.zoom}
        defaultCenter = {this.state.center}
        >
        {props.isMarkerShown && <Marker position={props.center} />}
      </GoogleMap>
    ))

    return (
      <div className="Map">
        <MyMapComponent
          center = {this.state.center}
          zoom = {this.state.zoom}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
         />
      </div>
    );
  }
};

export default Map;
