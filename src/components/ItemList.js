import React, { Component } from 'react';
import Item from './Item.js';
import './Map.css';

class ItemList extends Component {


  render(){
    return (
      <div className="item-list-bar">
        <h2 className="list-bar-heading">This is the Item List</h2>
        <div className="item-bar">
          <ol className="item-list">
            {this.props.myarray.map((item) => (
              <div>
                <li>
                  <Item
                    item={item}
                  />
                </li>
              </div>
            ))}

          </ol>
        </div>

      </div>
    )
  }
}
export default ItemList;
