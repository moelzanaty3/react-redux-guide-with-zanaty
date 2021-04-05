import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Product from '../components/Product'

class ProductList extends Component {
  state = {
    query: ''
  }

  handleSearchProduct = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.handleSearchProduct('')
  }

  render() {
    const { products, onDeleteProduct } = this.props
    const { query } = this.state
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
                  <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
                ))}
          </ol>
        </div>
      </div>
    )
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDeleteProduct: PropTypes.func.isRequired
}

export default ProductList
