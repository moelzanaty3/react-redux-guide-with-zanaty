import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'

const ProductDetails = () => {
  return <>Product Details</>
}

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
        {/*
          path: the path of the route. Here, we use / to define the path of the home page.
          render: will display the content whenever the route is reached.
        */}
        <Route
          path="/"
          exact
          render={() => (
            <ProductList
              products={this.state.products}
              onDeleteProduct={this.handleDeleteProduct.bind(this)}
            />
          )}
        />
        <Route path="product/:id" component={ProductDetails} />
        <Route render={() => <h1>404: page not found</h1>} />
      </div>
    )
  }
}

export default App
