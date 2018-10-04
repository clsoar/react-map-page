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
      for (let i = 0; i<Markers.length; i++) {
        this.state.markers.push({
          id: Markers[i]['id'],
          name: Markers[i]['name'],
          address: Markers[i]['address'],
          latitude: Markers[i]['latlng']['lat'],
          longitude: Markers[i]['latlng']['lng']
        });

        console.log(this.state.markers);
      }
    }
    componentDidMount() {
      this.getMarkers()
    }
  /*  this.getMarkerPosit = () => {
      //loop through marker object to get latlng position and render

      this.setState((state) => ({
        markerPosits: state.markerPosits.map((mP) => Markers[mP]['latlng']).concat(mP)
      }))
      //      markerPosit: Markers[0]['latlng']
      console.log(this.state.markerPosits)


    }*/
    //  const markerPosits = Markers.map((m) => Markers[m]['latlng'])





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
        {props.isMarkerShown && this.state.markers.map(marker => (
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
