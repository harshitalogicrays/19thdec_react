import React from 'react'
import products from '../../assets/productslist'
import ProductItems from './ProductItems'
const Products = () => {
  return (
    <div>
        <h1 style={{color:"brown" , backgroundColor : "lightblue"}}>Products Page</h1> <hr/>
        <ProductItems products={products}/>
    </div>
  )
}

export default Products
