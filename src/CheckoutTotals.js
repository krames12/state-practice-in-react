import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';

class CheckoutTotals extends Component {
    render() {
        return (
            <div id="checkout-totals-container">
                <CheckoutConsumer.Consumer>
                    { ({total}) => (
                        <React.Fragment>
                            <div className="totals-container">
                                <p>
                                    <span className="total-title-text">Subtotal</span>
                                    <span className="total-amount-text">${total}</span>
                                </p>
                                <p>
                                    <span className="total-title-text">Tax</span>
                                    <span className="total-amount-text">$0</span>
                                </p>
                            </div>
                            <div className="pay-button-container">
                                <button className="pay-total-button">Pay Total: ${total}</button>
                            </div>
                        </React.Fragment>
                    ) }
                </CheckoutConsumer.Consumer>
            </div>
        )
    }
}

export default CheckoutTotals;