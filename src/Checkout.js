import React, { Component } from 'react';
import styled from "styled-components";
import { CheckoutConsumer } from './CheckoutContext';
import CheckoutItem from './CheckoutItem'

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
    overflow-y: scroll;
`