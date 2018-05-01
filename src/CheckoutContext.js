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
                    qty: cartItem.qty,
                    ...cartItem,
                    price: item.price * cartItem.qty,
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
          console.log("item", item);
        let revisedCart = this.state.cartItems.map( (cartItem) => {
            if(cartItem.id === item.id) {
                cartItem.qty++;
                return {
                    ...cartItem,
                    qty: cartItem.qty,
                }
            } else {
                return cartItem;
            }
        });
        console.log("revised:", revisedCart);
        this.setState({ cartItems: revisedCart });
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
                actions: {
                    addItem: this.addItem,
                    qtyIncrement: this.qtyIncrement,
                    qtyDecrement: this.qtyDecrement,
                }
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const CheckoutConsumer = Consumer;
export default CheckoutProvider;