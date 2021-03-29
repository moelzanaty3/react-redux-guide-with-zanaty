import React, { Component } from 'react'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div>
        <div className="product-list">
          <Product
            title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
            price="89.99$"
            category="men clothing"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />

          <Product
            title="Mens Casual Premium Slim Fit T-Shirts"
            description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket,"
            price="89.99$"
            category="men clothing"
            image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          />
        </div>
      </div>
    )
  }
}

export default App
