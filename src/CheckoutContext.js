import React, { Component } from 'react';

const CONTEXT_ID = 'shopping-cart';
const { Consumer, Provider } = React.createContext(CONTEXT_ID);

class CheckoutProvider extends Component {
    state = {
        cartItems: [],
      }

    addItem = (item) => {
    let newItem = true;
    let revisedCart = this.state.cartItems.map( (cartItem) => {
        if(cartItem.id === item.id) {
            newItem = false;
            cartItem.qty++;

            return {
                ...cartItem,
                qty: cartItem.qty,
                lineTotal: item.price * cartItem.qty,
            };
        } else {
            return cartItem;
        }
    });

    if(newItem) {
        revisedCart = [
            ...revisedCart,
            {
                ...item,
                "qty": 1,
                "lineTotal": item.price,
            }
        ]
    }

    this.setState({ cartItems: revisedCart });
    }

    qtyIncrement = (item) => {
    let revisedCart = this.state.cartItems.map( (cartItem) => {
        if(cartItem.id === item.id) {
            cartItem.qty++;
            return {
                ...cartItem,
                qty: cartItem.qty,
                lineTotal: cartItem.price * cartItem.qty,
            }
        } else {
            return cartItem;
        }
    });

    this.setState({ cartItems: revisedCart });
    }

    qtyDecrement = (item) => {
    let revisedCart = this.state.cartItems.filter( (cartItem) => {
        if(cartItem.id != item.id || (cartItem.id === item.id && cartItem.qty - 1 > 0)) {
            return cartItem;
        }
    } ).map( (cartItem) => {
        if(cartItem.id === item.id) {
            cartItem.qty--;
            return {
                ...cartItem,
                qty: cartItem.qty,
                lineTotal: cartItem.price * cartItem.qty,
            }
        } else {
            return cartItem;
        }
    });

    this.setState({ cartItems: revisedCart });
    }

    removeItem = (item) => {
        let revisedCart = this.state.cartItems.filter( (cartItem) => {
        if(cartItem.id != item.id) {
            return cartItem;
        }
        });

        this.setState({ cartItems: revisedCart });
    }

    render() {
        return(
            <Provider value={{
                items: this.state.cartItems,
                actions: {
                    addItem: this.addItem,
                    qtyIncrement: this.qtyIncrement,
                    qtyDecrement: this.qtyDecrement,
                    removeItem: this.removeItem,
                }
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const CheckoutConsumer = Consumer;
export default CheckoutProvider;