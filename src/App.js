import React, { Component } from 'react';
import ItemList from './ItemList';
import Checkout from './Checkout';
import CheckoutProvider, { CheckoutConsumer } from './CheckoutContext';
import './App.css';

class App extends Component {
  render() {
    return (
        <CheckoutProvider>
          <div className="App">
              <header>
                <h2>Nick's Item State</h2>
              </header>
                <ItemList />
                <Checkout />
            </div>
        </CheckoutProvider>
    );
  }
}

export default App;
