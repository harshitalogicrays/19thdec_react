import React from 'react'
import { useCart } from './CartContext'

const ProductCard = ({product={}}) => {
  const {ADD_TO_CART} = useCart()
  const handleCart = ()=>{
    ADD_TO_CART(product)
  }
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
      <div class="card">
        <img class="card-img-top" src={product.image} alt={product.name} height={200} />
        <div class="card-body">
            <h4 class="card-title">{product.name}</h4>
            <p class="card-text">{product.category}<br/>      ${product.price}<br/>
           Available: {product.stock}</p>
           <button  type="button" class="btn btn-primary"  
           onClick={handleCart}> Add to cart </button>
           
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
