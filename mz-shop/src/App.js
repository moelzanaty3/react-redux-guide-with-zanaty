import React, { Component } from 'react'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div>
        <h1>MZ Shop!</h1>
        <Product
          title="Samsung SE450"
          description="desktop business monitor offers superior ergonomics"
          price="89.99$"
        />
        <Product
          title="Mac Book Pro"
          description="Stash your laptop (up to 15 inches) in the padded sleeve,"
          price="700$"
        />
      </div>
    )
  }
}

export default App
