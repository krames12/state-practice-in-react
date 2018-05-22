import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';

class CheckoutTotals extends Component {
    render() {
        return (
            <div id="checkout-totals-container">
                <CheckoutConsumer.Consumer>
                    { ({total}) => (
                        <button className="pay-total-button">Pay Total: {total}</button>
                    ) }
                </CheckoutConsumer.Consumer>
            </div>
        )
    }
}

export default CheckoutTotals;