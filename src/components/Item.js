import React, { Component } from 'react';
import './Map.css';

class Item extends Component {

render() {
  return(
    <div className="items">
      <div className="item-heading">{this.props.item.name}</div>
      <div className="item-address">{this.props.item.address}</div>
    </div>
  )
}
}
export default Item;
