import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import { getData } from '../Apis'
import Loader from './Loader'

const Shop = () => {
const [products,setProducts] = useState([])

useEffect(()=>{
  getData("https://dummyjson.com/products").then((result)=>{
    console.log(result.products)
   setProducts(result.products)
  })
},[])

  return (
    <>
  
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        {/* {products.length==0 && <>
            <button class=" border-blue-700 border-4 border-t-transparent animate-spin rounded-full h-10 w-10"></button><br/>
                <h1>No product found</h1></>} */}

{products.length==0 && <Loader/>}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
            <ProductsCard products={products}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Shop
