import React, { Component } from 'react'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'

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

  handleDeleteProduct(productId) {
    this.setState(prevState => ({
      products: prevState.products.filter(p => p.id !== productId)
    }))
    deleteProduct(productId).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          onDeleteProduct={this.handleDeleteProduct.bind(this)}
        />
      </div>
    )
  }
}

export default App
