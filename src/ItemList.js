import React, { Component } from 'react';
import styled from "styled-components";
import itemArray from './itemArray';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": itemArray
        }
        this.logClick = this.logClick.bind(this);
    }

    logClick () {
        console.log("clicked");
    }

    render() {
        return (
            <ListWrapper>
                {
                    this.state.items.map( 
                        item => <Item key={item.id} item={item} onClick={ () => this.logClick(item)} />
                    )
                }
            </ListWrapper>
        );
    }
}

export default ItemList;

const ListWrapper = styled.section`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
`