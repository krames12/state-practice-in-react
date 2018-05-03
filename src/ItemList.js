import React, { Component } from 'react';
import styled from "styled-components";
import { CheckoutConsumer } from './CheckoutContext';
import itemArray from './itemArray';
import Item from './Item';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": itemArray,
        }
    }

    render() {
        return (
            <CheckoutConsumer>
                {
                    ({ actions }) => (
                        <ListWrapper>
                            { this.state.items.map(
                                item => <Item
                                            key={item.id}
                                            name={item.name}
                                            clickHandler={() => actions.addItem(item)}
                                        />
                            ) }
                        </ListWrapper>
                    )
                }
            </CheckoutConsumer>
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
    grid-row: 2 / span2;
    grid-column: 1 / span 2;
`