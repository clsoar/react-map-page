import React, { Component } from 'react';
import Map from './components/Map.js';
import ItemList from './components/ItemList.js';
import './App.css';
import {Markers} from './components/markers.js';


class App extends Component {
  state = {
    items: [],
  };

  getItems = () => {
    //get data from markers file
    for (let i = 0; i<Markers.length; i++) {
      this.state.items.push({
        id: Markers[i]['id'],
        name: Markers[i]['name'],
        address: Markers[i]['address'],
        latitude: Markers[i]['latlng']['lat'],
        longitude: Markers[i]['latlng']['lng']
      });
      console.log(this.state.items);

  }}

  componentDidMount() {
    this.getItems()
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Map App</h1>
        </header>
        <div className="Comps">
          <ItemList
            items={this.state.items}
          />
          <Map/>

        </div>
      </div>
    );
  }
}

export default App;
