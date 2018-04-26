import React, { Component } from 'react';
import styled from "styled-components";
import itemArray from './itemArray';
import Item from './Item';

class ItemList extends Component {
    state = {
        "items": itemArray
    }

    render() {
        return (
            <div className="item-list-container">
                <p>things and stuff</p>
                {this.state.items.map( (item) => <Item key={item.id} item={item} />)}
            </div>
        );
    }
}

export default ItemList;