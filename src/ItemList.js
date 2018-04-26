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
            <ListWrapper>
                {this.state.items.map( (item) => <Item key={item.id} item={item} />)}
            </ListWrapper>
        );
    }
}

export default ItemList;

const ListWrapper = styled.section`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
`