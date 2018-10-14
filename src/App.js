import React, { Component } from 'react';
import Map from './Map.js';
import ItemList from './ItemList.js';
import './App.css';
import DocumentTitle from 'react-document-title';



class App extends Component {
  state = {
    data: [],
    error: null,
    value: "default"
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
      .then(data => this.setState({ data: data.locations }))
      .catch(error => this.setState({ error }))

  }

  componentDidMount() {
    this.getMarkerInfo();
  }

  updateOpenState = (marker) => {

  }

  closeInfoWindows = () => {
    //these code hints to close other open windows given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    const markers= this.state.data.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ data: Object.assign(this.state.data, markers) });
  }

  onToggleOpen = (marker) => {
    //these code hints to connect the marker given by Forrest Walker
    // tutorial found at https://www.youtube.com/watch?v=VhXuEvkpxK0
    this.closeInfoWindows();
    marker.isOpen = true;
    this.setState({ data: Object.assign(this.state.data, marker) });
  }

  selectFilter = (event) => {
    //sets filter value in state
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div className="Page">
        <DocumentTitle title='Navarre Beach Accomadations'/>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Navarre Vacations</h1>
          </header>
          <div className="Comps">
            <ItemList
              items={this.state.data}
              onToggleOpen={this.onToggleOpen}
              error={this.state.error}
              markers={this.state.data.locations}
              selectFilter={this.selectFilter}
              value={this.state.value}
            />
            <Map
              markers={this.state.data}
              onToggleOpen={this.onToggleOpen}
              error={this.state.error}
              value={this.state.value}
            />

          </div>
          <footer className="App-footer">
            <div className="footer-text">CL Mason Product</div>
            <div className="shoutout">using Google Maps and myJSON API data</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
