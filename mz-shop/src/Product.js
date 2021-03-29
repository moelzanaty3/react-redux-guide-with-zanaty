import React from 'react'

const Product = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.price}</h2>
    </div>
  )
}

export default Product
