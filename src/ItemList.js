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
        <React.Fragment>
          <ol className="item-list">
            {this.props.items
              .filter((item) => (item[this.props.value] || this.props.value === "default"))
              .map((item) => (
                <li
                  key={item.id}
                  className="item-list-items"
                  >
                  <button
                    className="item-list-button"
                    onClick={() => this.props.onToggleOpen(item)}
                    tabIndex={0}
                    >
                    <Item
                      item={item}
                    >
                      {item.isOpen &&
                        <InfoWindow
                          className="info-window"
                          aria-label="Map Info Window"
                          >
                          <dialog className="info-window-dialog">
                            <InfoWindowContent
                              marker={ item }
                              />
                          </dialog>
                        </InfoWindow>}
                      </Item>
                    </button>
                </li>
            ))}

          </ol>
        </React.Fragment>

      </div>
    )
  }
}
export default ItemList;
