import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  handleCards() {
    return this.props.flats.map(flat => <Flat name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} url={flat.imageUrl} lat={flat.lat} lng={flat.lng} key={this.props.flats.indexOf(flat)} marker={this.click} />);
  }

  click = (e) => {
    this.props.marker( {lat: e.currentTarget.dataset.lat,
                        lng: e.currentTarget.dataset.lng} );
  }

  render() {
    return (
      <div className="flat-list">
        {this.handleCards()}
      </div>
    );
  }
}

export default FlatList;
