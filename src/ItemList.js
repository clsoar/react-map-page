import React, { Component } from 'react';
import Item from './Item.js';
import './Map.css';
import { InfoWindow } from 'react-google-maps';
import InfoWindowContent from './InfoWindowContent.js';


class ItemList extends Component {


  render(){
    return (
      <div className="item-list-bar">
        <h2 className="list-bar-heading">This is the Item List</h2>
        <div className="item-bar">
          <ol className="item-list">
            {this.props.items.map((item) => (
                <li
                  key={item.id}
                  className="item-list-items"
                  onClick={() => this.props.onToggleOpen(item)}
                  >
                  <Item
                    item={item}
                  >
                  {item.isOpen &&
                  <InfoWindow>
                    <InfoWindowContent
                      marker={ item }
                    />
                  </InfoWindow>}
                  </Item>
                </li>
            ))}

          </ol>
        </div>

      </div>
    )
  }
}
export default ItemList;
