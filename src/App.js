import React, { Component } from 'react';
import Map from './Map.js';
import ItemList from './ItemList.js';
import './App.css';
import {Markers} from './markers.js';



class App extends Component {
  state = {
    markers: [],
    isOpen: false

  };

  onToggleOpen = ({isOpen}) => {
    ({isOpen}) ?
    this.setState({ isOpen: false}):
    this.setState({ isOpen: true});
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
        longitude: Markers[i]['latlng']['lng']
      });
      // TODO: remove this console log
      console.log(markerArray);
      this.setState({markers : markerArray});
    }
  }

  componentDidMount() {
    this.getMarkers()
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
            myarray={this.state.myarray}
          />
          <Map
            markers={this.state.markers}
            isOpen={this.state.isOpen}
            onToggleOpen = {this.onToggleOpen}
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
