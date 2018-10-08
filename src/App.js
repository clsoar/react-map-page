import React, { Component } from 'react';
import Map from './Map.js';
import ItemList from './ItemList.js';
import './App.css';
import {Markers} from './markers.js';



class App extends Component {
  state = {
    markers: [],

  }



  onToggleOpen2 = ({ isOpen }) => {
  //  this.setState({ isOpen : !isOpen })
  }


  onToggleOpen3 = () => {
    //toggles isOpen to true/false
  //  if (this.state.isOpen === false) {
    //this.setState({isOpen : true})}

  }


  getMarkers = () => {
    //loop through Markers file and get data
    const markerArray = [];
    for (let i = 0; i<Markers.length; i++) {
      markerArray.push({
        id: Markers[i]['id'],
        name: Markers[i]['name'],
        address: Markers[i]['address'],
        latitude: Markers[i]['latlng']['lat'],
        longitude: Markers[i]['latlng']['lng'],
        isOpen: false
      });
      // TODO: remove this console log
      console.log(markerArray);
      this.setState({markers : markerArray});
    }
  }

  componentDidMount() {
    this.getMarkers()
  }

  updateOpenState = (marker) => {

  }

  closeInfoWindows = () => {
    //these code hints to close other open windows given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    const markers= this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  }

  onToggleOpen = (marker) => {
    //these code hints to connect the marker given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    this.closeInfoWindows();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Map App</h1>
        </header>
        <div className="Comps">
          <ItemList
            items={this.state.markers}
            onToggleOpen={this.onToggleOpen}
          />
          <Map
            markers={this.state.markers}
            onToggleOpen={this.onToggleOpen}
            onToggleOpen2={this.onToggleOpen2}
            onToggleOpen3={this.onToggleOpen3}
          />

        </div>
        <footer className="App-footer">
          <div className="footer-text">Footer Info</div>
        </footer>
      </div>
    );
  }
}

export default App;
