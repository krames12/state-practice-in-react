import React, { Component } from 'react';
import ItemList from './ItemList';
import Checkout from './Checkout';
import { Context, Provider } from './CheckoutContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <h1>Nick's Item State</h1>
          </header>
          <Provider>
            <ItemList />
            <Checkout />
          </Provider>
        </div>
    );
  }
}

export default App;
