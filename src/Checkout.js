import React, { Component } from 'react';
import styled from "styled-components";

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    state = {};
    
    componentDidMount() {
        this.setState({children: []});
    }

    render() {
        return (
            <CheckoutContainer id="checkout-container">
                {this.state.children}
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