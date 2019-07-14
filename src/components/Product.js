import React from 'react'
import './Product.scss'

const Product = (props) => {
  return (
    <div id="product">
      <p>{props.face}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Product