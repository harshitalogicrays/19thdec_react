import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { addtocart } from '../redux/cartSlice'

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleCart = ()=>{
    dispatch(addtocart(product))
  }
  return (
    <>
       <div key={product.id} className={`group relative p-4 rounded-md shadow-md bg-white transition-all duration-300 
          ${product.stock === 0 ? "opacity-50  pointer-events-none" : "hover:shadow-lg"}`} >
         <Link to="/product/details" state={product} >
          <img
            alt={product.imageAlt}
            src={product.images[0]}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
          />
         <span
            className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-md text-white"
            style={{ backgroundColor: product.stock === 0 ? "red" : "green" }}>
            {product.stock === 0 ? "Out of Stock" : "In Stock"}
          </span>

        
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
          <p className="text-sm  text-gray-900">{product.category}</p>
          </Link>

          {product.stock > 0 && (
            <button onClick={handleCart}
              className="relative mt-3 w-full bg-indigo-500 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-200"
            >
              Add to Cart
            </button>
          )}
		
        </div> 
      
    </>
  )
} 

export default ProductsCard
