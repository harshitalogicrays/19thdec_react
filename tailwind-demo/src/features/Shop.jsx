import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import { getData } from '../Apis'
import Loader from './Loader'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectproduct, store_products } from '../redux/productSice'
import { APPLY_FILTER } from '../redux/filterSlice'

const Shop = () => {
  const dispatch =  useDispatch()
  useEffect(()=>{fetchdata()},[])   
const fetchdata = async()=>{
  try{
    const res =  await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
    const data =  await res.json()
    dispatch(store_products(data))
 }
 catch(err){toast.error(err.message)}
}

const products =  useSelector(selectproduct)
const categories =Array.from(new Set(products.map(product=>product.category)))
const brands =Array.from(new Set(products.map(product=>product.brand)))

const [selectedCategories,setSelectedCategories] = useState([])
const [selectedBrands,setSelectedBrands] = useState([])
const [price,setPrice] = useState([0,10000])

const handleCategory = (category)=>{
  setSelectedCategories(prev=>prev.includes(category) ? (prev.filter((c)=>c!=category))  : [...prev , category])
}
const handleBrand = (brand)=>{
  setSelectedBrands(prev=>prev.includes(brand) ? (prev.filter((c)=>c!=brand))  : [...prev , brand])
}
const handlePriceChange = (e,type)=>{
  let value = Number(e.target.value)
  setPrice(prev => type=="min" ? [value,prev[1]] : [prev[0],value]) 
}

useEffect(()=>{
  dispatch(APPLY_FILTER({products ,  categories:selectedCategories,
     brands:selectedBrands , priceRange :price , search :""}))
},[selectedCategories , selectedBrands , price ])

const resetFilter = ()=>{

}
  return (
    <>
  
    <div className="bg-white">
      <div className=" max-w-2xl px-2 py-4 sm:px-2 sm:py-4 lg:max-w-7xl lg:px-2">
        <div className="flex gap-6">
          <div className="w-1/2">
              <div className='border-1 rounded-lg p-2 mb-4'>
                <h1 className='text-xl mb-2'>Categories :</h1> <hr />
                {categories.map((category,index)=>
                <div key={index}><input type="checkbox" className='my-2 me-2'
                onClick={()=>handleCategory(category)}/><label>{category}</label></div>
                )}
                </div>
              <div className='border-1 rounded-lg p-2 mb-4'>
                <h1 className='text-xl mb-2'>Brands :</h1> <hr />
                {brands.map((brand,index)=>
                <div key={index}><input type="checkbox" className='my-2 me-2' onClick={()=>handleBrand(brand)}/><label>{brand}</label></div>
              )}
                </div>
                <div className='border-1 rounded-lg p-2 mb-4'>
                <h1 className='text-xl mb-2'>Price :</h1> <hr />
                <input type="number" className='my-2 me-2 border w-20 h-10 text-center' min='0' max='10000' value={price[0]} onChange={(e)=>handlePriceChange(e, "min")}/> :
                <input type="number" className='my-2 ms-2 border w-20 h-10 text-center' min='0' max='10000' value={price[1]} onChange={(e)=>handlePriceChange(e, "max")}/>
                </div>
                <div className='border-1 rounded-lg p-2 mb-4 flex'>
                  <button type="button" className="p-1 w-full bg-indigo-500 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-200"       onClick={resetFilter}> Reset All</button>
                </div>
          </div>
          <div className="">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
               {products.length==0 ? <Loader/>
      :            <ProductItem products={products}/>
      }
          </div>
        </div>
       

  

      </div>
    </div>
    </>
  )
}

export default Shop
