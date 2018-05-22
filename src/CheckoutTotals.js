import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';

class CheckoutTotals extends Component {
    render() {
        return (
            <div id="checkout-totals-container">
                <CheckoutConsumer.Consumer>
                    { ({total}) => (
                        <p>{total}</p>
                    ) }
                </CheckoutConsumer.Consumer>
            </div>
        )
    }
}

export default CheckoutTotals;