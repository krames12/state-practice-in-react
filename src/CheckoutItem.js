import React, { Component } from 'react';
import { CheckoutConsumer } from './CheckoutContext';
import { Trash2, PlusCircle, MinusCircle } from 'react-feather'

class CheckoutItem extends Component {
    render() {
        return (
            <CheckoutConsumer>
                { ({ actions }) => (

                    <div className="checkout-item-container">
                        <div
                            className="delete-icon"
                            onClick={ () => actions.removeItem(this.props) }
                        >
                            <Trash2 className="icon" />
                        </div>
                        <div className="checkout-name">
                            {this.props.name}
                        </div>
                        <div className="checkout-qty">
                            <button
                                className="qty-button"
                                onClick={ () => actions.qtyIncrement(this.props) }
                            >
                                <PlusCircle className="icon" />
                            </button>
                            <span className="checkout-qty-text">{this.props.qty}</span>
                            <button
                                className="qty-button"
                                onClick={ () => actions.qtyDecrement(this.props) }
                            >
                                <MinusCircle className="icon"/>
                            </button>
                        </div>
                        <span className="line-price">&#36;{this.props.lineTotal.toFixed(2)} </span>
                    </div>
                ) }
            </CheckoutConsumer>
        )
    }
}

export default CheckoutItem;