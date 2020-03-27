import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const divStyle = {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(' + this.props.url + ')'
    };
    return (
      <div className="card" style={divStyle} onClick={this.props.marker} data-lat={this.props.lat} data-lng={this.props.lng}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    );
  }
}

export default Flat;
