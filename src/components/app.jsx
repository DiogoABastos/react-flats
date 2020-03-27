import React, { Component } from 'react';

import FlatList from './flat-list.jsx';
import flats from '../../data/flats.js';
import SimpleMap from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marker: {
        lat: flats[0].lat,
        lng: flats[0].lng
      }
    };
  }

  updateMarker = (res) => {
    this.setState({
      marker: {
        lat: res.lat,
        lng: res.lng
      }
    });
  }
  render() {
    return (
      <div>
        <FlatList flats={flats} marker={this.updateMarker}/>
        <div className="map-container">
          <SimpleMap lat={this.state.marker.lat} lng={this.state.marker.lng}/>
        </div>
      </div>
    );
  }
}

export default App;
