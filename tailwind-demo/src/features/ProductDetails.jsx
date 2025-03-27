import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { addtocart, decrease, increase, selectCart } from '../redux/cartSlice';

const ProductDetails = () => {
  const location =  useLocation()
  console.log(location)
  const product =location.state

  const cartItems  =  useSelector(selectCart)
  const item =  cartItems.find(item=>item.id == product.id) // {}
  const itemIndex =  cartItems.findIndex(item=>item.id == product.id) // index no  
  const dispatch =  useDispatch()
  return (
    <div className="max-w-7xl mx-auto py-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-2 shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-sm object-cover rounded-lg shadow-lg mb-3"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg mt-2">{product.description}</p>
          <p className="text-gray-500 mt-2">Category: <span className="font-medium">{product.category}</span></p>
          <p className="text-2xl font-semibold text-indigo-600 mt-4">${Number(product.price).toFixed(2)}</p>
          <div className="mt-6 flex gap-4 mb-3">
            {itemIndex != -1 ?               
            <div className="flex items-center justify-center bg-gray-200 rounded-lg w-max">
               <button className="bg-gray-300 px-3 py-2 rounded-l-lg text-gray-700 font-bold hover:bg-gray-400"
               onClick={()=>dispatch(decrease(item))}>−</button>
                              <span className="px-6 py-2 text-gray-900 bg-white border-t border-b border-gray-300 text-lg font-semibold">{item.qty}</span>
                              <button className="bg-gray-300 px-3 py-2 rounded-r-lg text-gray-700 font-bold hover:bg-gray-400"  onClick={()=>dispatch(increase(item))}>+</button>
                           
            </div>  :
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition" onClick={()=>dispatch(addtocart(product))}>
              Add to Cart
            </button> 
              }
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition">
              Buy Now 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails