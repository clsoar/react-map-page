import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';
import {Markers} from './markers.js';


class Map extends Component {

  state = {
      center: { lat: 30.381025, lng: -86.866819 },
      zoom: 15,
      markers: [],
    };

    getMarkers = () => {
      //loop through Markers file and get data
      for (let i = 0; i<Markers.length; i++) {
        this.state.markers.push({
          id: Markers[i]['id'],
          name: Markers[i]['name'],
          address: Markers[i]['address'],
          latitude: Markers[i]['latlng']['lat'],
          longitude: Markers[i]['latlng']['lng']
        });
        // TODO: remove this console log
        console.log(this.state.markers);
      }
    }
    componentDidMount() {
      //mount markers to map class
      this.getMarkers()
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
        {props.isMarkerShown &&
          /* added .map to add latlng data from extendable object*/
          this.state.markers.map(marker => (
            <Marker
              key={marker.id}
              position= {{ lat: marker.latitude, lng: marker.longitude }}
            />
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
