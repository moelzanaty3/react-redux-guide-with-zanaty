import React, { Component } from 'react'
import { getAllProduct } from './api/ProductAPI'
import Product from './Product'

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="product-list">
          {this.state.products &&
            this.state.products.map(product => (
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default App
