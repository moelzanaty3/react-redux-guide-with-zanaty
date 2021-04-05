import React, { Component } from 'react'
import sortBy from 'sort-by'
import { deleteProduct, getAllProduct } from './api/ProductAPI'
import Product from './Product'

class App extends Component {
  state = {
    products: [],
    query: ''
  }

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products })
      }
    })
  }

  handleSearchProduct = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.handleSearchProduct('')
  }

  handleDeleteProduct(productId) {
    this.setState(prevState => ({
      products: prevState.products.filter(p => p.id !== productId)
    }))
    deleteProduct(productId).catch(err => console.log(err))
  }

  render() {
    const { query, products } = this.state
    const showingProducts =
      query === ''
        ? products
        : products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    return (
      <div>
        <div className="list-products">
          <div className="list-products-top">
            <input
              className="search-products"
              type="text"
              placeholder="Search Products"
              value={query}
              onChange={event => {
                this.handleSearchProduct(event.target.value)
              }}
            />
          </div>

          {showingProducts.length !== products.length && (
            <div className="showing-products">
              <span>
                Now showing {showingProducts.length} of {products.length}
              </span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}

          <ol className="product-list">
            {showingProducts &&
              showingProducts
                .sort(sortBy('price'))
                .map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    onDeleteProduct={this.handleDeleteProduct.bind(this)}
                  />
                ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default App
