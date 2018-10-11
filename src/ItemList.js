import React, { Component } from 'react';
import Item from './Item.js';
import './Map.css';
import './InfoWindow.css';
import { InfoWindow } from 'react-google-maps';
import InfoWindowContent from './InfoWindowContent.js';
import FilterOptions from './FilterOptions.js';


class ItemList extends Component {


  render(){
    return (
      <div className="item-list-bar">
        <FilterOptions
          selectFilter={this.props.selectFilter}
          value={this.props.value}
        />
        <div className="item-bar">
          <ol className="item-list">
            {this.props.items
              .filter((item) => (item[this.props.value] || this.props.value == "default"))
              .map((item) => (
                <li
                  key={item.id}
                  className="item-list-items"
                  onClick={() => this.props.onToggleOpen(item)}
                  >
                  <Item
                    item={item}
                  >
                  {item.isOpen &&
                  <InfoWindow className="info-window">
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
