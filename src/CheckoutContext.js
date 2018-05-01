import React, { Component } from 'react';

const CONTEXT_ID = 'shopping-cart';
const { Consumer, Provider } = React.createContext(CONTEXT_ID);

class CheckoutProvider extends Component {
    state = {
        cartItems: [
          {
              "id": 0,
              "name": "Giant Sweet Tarts",
              "price": "3.22",
              "qty": 1
          }
        ],
      }

      addItem = (item) => {
        this.setState({ cartItems: [
            ...this.state.cartItems,
            {
                ...item,
                "qty": 1,
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