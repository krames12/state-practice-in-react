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
                        <div className="checkout-name">
                            {this.props.name}
                        </div>
                        <div className="checkout-qty">
                            <button
                                onClick={ () => actions.qtyIncrement(this.props) }
                                >+</button> {this.props.qty}
                            <button
                                onClick={ () => actions.qtyDecrement(this.props) }
                            >-</button>
                        </div>
                        <span className="line-price">&#36;{this.props.lineTotal} </span>
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
    display: grid;
    grid-template-columns repeat(3, 1fr);
`