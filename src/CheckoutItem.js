import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';

class CheckoutItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CheckoutConsumer>
                { ({ actions }) => (

                    <div className="checkout-item-container">
                        <div
                            onClick={ () => actions.removeItem(this.props) }
                        >X</div>
                        <div className="checkout-name">
                            {this.props.name}
                        </div>
                        <div className="checkout-qty">
                            <button
                                className="qty-button"
                                onClick={ () => actions.qtyIncrement(this.props) }
                            >+</button>
                            {this.props.qty}
                            <button
                                className="qty-button"
                                onClick={ () => actions.qtyDecrement(this.props) }
                            >-</button>
                        </div>
                        <span className="line-price">&#36;{this.props.lineTotal.toFixed(2)} </span>
                    </div>
                ) }
            </CheckoutConsumer>
        )
    }
}

export default CheckoutItem;