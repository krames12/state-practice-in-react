import React, { Component } from 'react';
import styled from "styled-components";

class Checkout extends Component {
    render() {
        return (
            <CheckoutContainer>
                {props.children}
            </CheckoutContainer>
        )
    }
}

export default Checkout;

const CheckoutContainer = styled.div`
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    border: 1px solid #999;
`