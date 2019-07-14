import React, { useState, useEffect } from 'react'
import './ProductContainer.scss'
import Product from '../components/Product'

const ProductContainer = () => {

  const [face, setFace] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
    .then(res=> res.json())
    .then((data)=> {

      let productContainer = []

      for (let i = 0; i < 20; i++) {
        productContainer.push(<Product key={data[i].id} face={data[i].face} price={data[i].price} />)
      }

      setFace(productContainer)
    })
  }, [])

  return (
    <div id="product-container">
      {face}
    </div>
  )
}

export default ProductContainer