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
                return {
                    qty: cartItem.qty++,
                    ...cartItem,
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
                }
            ]
        }

        this.setState({ cartItems: revisedCart });
      }

      qtyIncrement = (item) => {
        this.setState({ cartItems: [
            ...this.state.cartItems,
            {
                ...item,
                "qty": item.qty + 1
            }
        ] });
      }

      qtyDecrement = (item) => {
        this.setState({ cartItems: [
            ...this.state.cartItems,
            {
                ...item,
                "qty": item.qty - 1
            }
        ] });
      }

    render() {
        return(
            <Provider value={{
                items: this.state.cartItems,
                addItem: this.addItem,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const CheckoutConsumer = Consumer;
export default CheckoutProvider;