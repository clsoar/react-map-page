import React, { Component } from 'react';
import Map from './components/Map.js';
import ItemList from './components/ItemList.js';
import './App.css';
import {Markers} from './components/markers.js';


class App extends Component {
  state = {
    markers: [],
    myarray: [{id : 0, name: "A"},{id : 1, name: "A"},{id : 2, name: "A"},{id : 3, name: "A"}, {id : 4, name: "A"}]

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
          />

        </div>
      </div>
    );
  }
}

export default App;
