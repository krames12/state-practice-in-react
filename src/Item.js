import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckoutConsumer } from './CheckoutContext';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            qty: 0,
            price: 0
        };
    }

    render() {
        return(
            <ItemSquare
                key={this.props.id}
                onClick={() => this.props.clickHandler}
            >
            {this.props.name}
            </ItemSquare>
        )
    }
}

export default Item;

const ItemSquare = styled.button`
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    min-width: 50px;
    padding: 1rem;
    border-radius: 5px;
`