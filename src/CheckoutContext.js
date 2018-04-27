import React, { Component } from 'react';

const CheckoutContext = React.createContext();

class CheckoutProvider extends Component {
    state = {
        products: [
            {
                "id": 0,
                "name": "Giant Sweet Tarts",
                "price": 3.00
            }
        ]
    }

    render() {
        return(
            <CheckoutContext.Provider value="Let's test the waters.">
                {this.props.children}
            </CheckoutContext.Provider>
        )
    }
}

export default CheckoutProvider;