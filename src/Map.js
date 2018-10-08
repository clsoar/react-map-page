/*global google*/
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './Map.css';
import {FaAnchor} from 'react-icons/fa';


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
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom = {this.state.zoom}
        defaultCenter = {this.state.center}
        >
        {props.isMarkerShown &&
          /* added .map to add latlng data from extendable object*/
          this.props.markers.map((marker) => (
            <Marker
              key={marker.id}
              position= {{ lat: marker.latitude, lng: marker.longitude }}
              onClick={() => {this.props.onToggleOpen(marker)}}
              animation= {marker.isOpen && google.maps.Animation.DROP}
            >
              {marker.isOpen &&
              <InfoWindow
              >
                <div>test</div>
              </InfoWindow>}
            </Marker>
          ))
        }

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
