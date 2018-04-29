import React, { Component } from 'react';
import styled from "styled-components";
import { Context } from './CheckoutContext';
import CheckoutItem from './CheckoutItem'
import ProductList from './itemArray';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {
        this.setState({children: ProductList});
    }

    render() {
        return (
            <CheckoutContainer id="checkout-container">
                <Context.Consumer>
                    { (context) => context.state.products.map(
                            product => <CheckoutItem key={product.id} {...product}  />
                     ) }
                </Context.Consumer>

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