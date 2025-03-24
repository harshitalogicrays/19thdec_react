import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import ReactPaginate from 'react-paginate'

const ProductItem = ({products}) => {
    const itemsPerPage =  4
    const [itemOffset,setItemOffset] = useState(0)
    const [currentItems,setCurrentItems] = useState([]) // 0 to 3 index data 
    const [pageCount,setPageCount] = useState(0)

    useEffect(()=>{
        const endOffset = itemOffset+itemsPerPage // 0+4=4 ,4+4=8 ,12+4=16
        setCurrentItems(products.slice(itemOffset,endOffset)) // 0 to 3 , 4 exclude , 4 to 7  , 12 to 15
        setPageCount(Math.ceil(products.length / itemsPerPage)) //30/4 => 8
    },[itemOffset,products])

    const handlePageClick =(event)=>{ //page 2 => index 1, page 4 index=3
        console.log(event)
        const newOffset = (event.selected * itemsPerPage) % products.length; //1*4 % 30 => 4 ,12%30
        setItemOffset(newOffset) // 4  , 12
    }

  return (
   <>
       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
       {currentItems.map((product) => <ProductsCard product={product}/> )}
        </div>
        
        {/* pagination */}
    <ReactPaginate  breakLabel="..."  nextLabel="next >" onPageChange={handlePageClick}
            pageRangeDisplayed={5} pageCount={pageCount}  previousLabel="< previous"  renderOnZeroPageCount={null}
            containerClassName="flex items-center mt-5 justify-center"
            pageClassName="px-4 py-2 ring-1 ring-gray-300 hover:bg-gray-300 cursor-pointer "
            pageLinkClassName="block w-full h-full text-center"  // Makes the whole box clickable
            activeClassName="bg-indigo-500 text-white"
            previousClassName="px-4 py-2 ring-1 ring-gray-300 rounded-l-lg"
            nextClassName="px-4 py-2 ring-1 ring-gray-300 rounded-r-lg"
            disabledClassName="bg-gray-400 text-white cursor-not-allowed"
            breakClassName="px-4 py-2"
        />
   </>
  )
}

export default ProductItem
