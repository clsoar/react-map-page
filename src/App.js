import React, { Component } from 'react';
import Map from './Map.js';
import ItemList from './ItemList.js';
import './App.css';



class App extends Component {
  state = {
    markers: [],
    data: {},
    error: null
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
    const data= this.state.data;
    for (let i = 0; i<data.length; i++) {
      markerArray.push({
        id: data[i]['id'],
        name: data[i]['name'],
        address: data[i]['address'],
        latitude: data[i]['latlng']['lat'],
        longitude: data[i]['latlng']['lng'],
        isOpen: false
      });
      // TODO: remove this console log
      console.log(markerArray);
      this.setState({markers : markerArray});
    }
  }

  getMarkerInfo = () => {
    //Fetch how-to for react code found at https://www.robinwieruch.de/react-fetching-data/
    //API data gathered by Cherie-Lee Mason and hosted at http://myjson.com/api
    fetch('https://api.myjson.com/bins/1brwgk')
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error('Oops. Something is wrong with the data you requested');
        }
      })
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }))
      .then(this.getMarkers())
      .then(console.log(this.state.markers))
      .catch(error => this.setState({ error }));

  }

  componentDidMount() {
    this.getMarkerInfo();
  }

  updateOpenState = (marker) => {

  }

  closeInfoWindows = () => {
    //these code hints to close other open windows given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    const markers= this.state.data.locations.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.data.locations, markers) });
  }

  onToggleOpen = (marker) => {
    //these code hints to connect the marker given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    this.closeInfoWindows();
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.data.locations, marker) });

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
            error={this.state.error}
            markers={this.state.data.locations}
          />
          <Map
            markers={this.state.data.locations}
            onToggleOpen={this.onToggleOpen}
            error={this.state.error}
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
