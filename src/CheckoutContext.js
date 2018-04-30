import React, { Component } from 'react';

const CheckoutContext = React.createContext();

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

    render() {
        return(
            <CheckoutContext.Provider value={{
                state: this.state,
                actions: {
                    addItem: (item) => {
                        let newItem = {
                            ...item,
                            "qty": 1,
                        }

                        this.setState({ cartItems: [
                            ...this.state.cartItems,
                            newItem
                        ] });
                    }
                }
            }}>
                {this.props.children}
            </CheckoutContext.Provider>
        )
    }
}

export const Provider = CheckoutProvider;
export const Context = CheckoutContext;