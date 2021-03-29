import React from 'react'
import Card from './Card'

const Product = props => {
  return (
    <Card title={props.title} image={props.image}>
      <h3 className="product-title">{props.title}</h3>
      <div className="product-meta">
        <p className="product-price">{props.price}</p>
        <p className="product-category">{props.category}</p>
      </div>
      <p className="product-description">{props.description}</p>
    </Card>
  )
}
export default Product
