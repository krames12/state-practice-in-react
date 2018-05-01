import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';
import styled from 'styled-components';

class CheckoutItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CheckoutConsumer>
                { ({ actions }) => (

                    <ItemContainer>
                    {this.props.name} | 
                    <button onClick={ () => actions.qtyIncrement(this.props) }>+</button> {this.props.qty} <button >-</button> | <span className="line-price">&#36;{this.props.price} </span>
                    </ItemContainer>
                ) }
            </CheckoutConsumer>
        )
    }
}

export default CheckoutItem;

const ItemContainer = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid grey;
`