import React, { Component } from 'react';
import itemArray from './itemArray';

class ItemList extends Component {
    state = {
        "items": itemArray
    }

    render() {
        return (
            <div className="item-list-container">
                <p>things and stuff</p>
                {this.state.items.map( (item) => <p key={item.id}>{item.name} - {item.price}</p>)}
            </div>
        );
    }
}

export default ItemList;