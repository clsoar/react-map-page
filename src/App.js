import React, { Component } from 'react';
import Map from './components/Map.js';
import ItemList from './components/ItemList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Map App</h1>
        </header>
        <div className="Comps">
          <ItemList/>
          <Map/>

        </div>
      </div>
    );
  }
}

export default App;
