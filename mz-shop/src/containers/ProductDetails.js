import React, { Component } from 'react'
import { getProductById } from '../api/ProductAPI'
import { Link } from 'react-router-dom'

class ProductDetails extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    // get product
    const productId = this.props.match.params.id
    getProductById(productId).then(product => {
      this.setState({ product })
    })
  }

  render() {
    return (
      <div>
        <Link className="close-product-details" to="/">
          Close
        </Link>
        <pre>
          <code>{JSON.stringify(this.state.product, null, 2)}</code>
        </pre>
      </div>
    )
  }
}

export default ProductDetails
