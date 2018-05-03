import React, { Component } from 'react';
import styled from "styled-components";
import { CheckoutConsumer } from './CheckoutContext';
import CheckoutItem from './CheckoutItem'
import ProductList from './itemArray';

class Checkout extends Component {
    render() {
        return (
            <CheckoutContainer id="checkout-container">
                <CheckoutConsumer.Consumer>
                    { ({items, actions}) => items.map(
                            product => <CheckoutItem key={product.id} {...product} />
                     ) }
                </CheckoutConsumer.Consumer>

            </CheckoutContainer>
        )
    }
}

export default Checkout;

const CheckoutContainer = styled.div`
    grid-row: 2 / span 2;
    border: 1px solid #999;
    overflow-y: scroll;
`