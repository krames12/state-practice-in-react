import React, { Component } from 'react';
import ItemList from './ItemList';
import Checkout from './Checkout';
import CheckoutProvider from './CheckoutContext';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <CheckoutProvider>
        <div className="App">
          <header>
            <h1>Nick's Item State</h1>
          </header>
          <ItemList />
          <Checkout />
        </div>
      </CheckoutProvider>
    );
  }
}

export default App;
