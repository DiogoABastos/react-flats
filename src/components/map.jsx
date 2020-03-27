import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.center = {
      lat: this.props.lat,
      lng: this.props.lng
    }
    this.zoom = 11;
  }
  // static defaultProps = {
  //   center: {
  //     lat: {}
  //     lng: {}
  //   },
  //   zoom: 11
  // };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.center}
          defaultZoom={this.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="hello there"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
