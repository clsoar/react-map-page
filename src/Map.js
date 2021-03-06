/*global google*/
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './Map.css';
import './InfoWindow.css';
import InfoWindowContent from './InfoWindowContent.js';

const MyMapComponent = withScriptjs(withGoogleMap((props, state) =>
  <GoogleMap
    defaultZoom = {15}
    defaultCenter = {{ lat: 30.381025, lng: -86.866819 }}
    role="application"
    tabIndex={-1}

    >
    {(props.error) ?
        <InfoWindow
          position= {{ lat: 30.381025, lng: -86.866819 }}>
          <p className="error-message">{props.error.message}</p>
        </InfoWindow>
        :
        props.isMarkerShown &&
      /* added .map to add latlng data from extendable object*/
      props.markers
      .filter((marker) => (marker[props.value] || props.value === "default"))
      .map((marker) => (
        <Marker
          key={marker.id}
          position= {{ lat: marker.latlng.lat, lng: marker.latlng.lng }}
          onClick={() => {props.onToggleOpen(marker)}}
          animation= {marker.isOpen && google.maps.Animation.DROP}
        >
          {marker.isOpen &&
          <InfoWindow className="info-window"
            tabIndex={0}
            role="dialog"
            aria-label="Map Info Window"
          >
            <InfoWindowContent
              marker = { marker }
            />
          </InfoWindow>}
        </Marker>
      ))
    }

  </GoogleMap>
))

class Map extends Component {

  state = {
      center: { lat: 30.381025, lng: -86.866819 },
      zoom: 15,
    };



  render() {
    /*Boilerplate code to make react-google-maps library work
    taken from react-google-maps installation and usage documentation
    https://tomchentw.github.io/react-google-maps/#installation
    */


    return (
      <div className="Map" role="application" aria-label="Google Map">
        <MyMapComponent
          {...this.props}
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
