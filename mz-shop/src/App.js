import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'

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
        {/*Switch to tell to React Router to load only one route at a time*/}
        <Switch>
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
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route
            path="/404"
            render={() => (
              <div className="page-not-found">
                <h1>404: page not found</h1>
                <Link to="/">Home</Link>
              </div>
            )}
          />
          <Redirect to="/404" />
          <Route />
        </Switch>
      </div>
    )
  }
}

export default App
