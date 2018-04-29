import React, { Component } from 'react';

const CheckoutContext = React.createContext();

class CheckoutProvider extends Component {
    state = {
        products: [
            {
                "id": 0,
                "name": "Giant Sweet Tarts",
                "price": "3.22",
                "qty": 1
            }
        ]
    }

    addItem(item) {
        this.setState()
    }

    render() {
        return(
            <CheckoutContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </CheckoutContext.Provider>
        )
    }
}

export const Provider = CheckoutProvider;
export const Context = CheckoutContext;