import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.css';

/*Boilerplate code to make react-google-maps library work
taken from react-google-maps installation documentation
https://tomchentw.github.io/react-google-maps/#installation
*/

/*
Moved MyMapComponent constant to its own component file at the suggestion of
Eric Volaric. He provided an example of moving the components at
https://github.com/evolaric/rgm-example

turns out that was not the issue and this extra file is not necessary right now
might use to separate if it looks cleaner later
*/

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom = {props.zoom}
    defaultCenter = {props.center}
    >
    {props.isMarkerShown && <Marker center={props.center} />}
  </GoogleMap>
))

export default MyMapComponent;
