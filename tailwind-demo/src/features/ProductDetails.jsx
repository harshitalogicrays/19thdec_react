import React from 'react';
import { useLocation } from 'react-router';

const ProductDetails = () => {
  const location =  useLocation()
  console.log(location)
  const product =location.state

  return (
    <div className="max-w-7xl mx-auto py-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-2 shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full max-w-sm object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg mt-2">{product.description}</p>
          <p className="text-gray-500 mt-2">Category: <span className="font-medium">{product.category}</span></p>
          <p className="text-2xl font-semibold text-indigo-600 mt-4">${product.price.toFixed(2)}</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
              Add to Cart
            </button>
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