import React from 'react'

const Card = props => {
  return (
    <div className="product">
      {props.image && (
        <img src={props.image} className="product-avatar" alt={`product of ${props.title}`} />
      )}
      <div className="product-details">{props.children}</div>
      <div className="product-remove">remove</div>
    </div>
  )
}

export default Card
