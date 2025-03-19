import React from 'react'
import ReactDom from 'react-dom'
const Loader = () => {

  return ReactDom.createPortal(

    <div className='min-h-screen flex justify-center items-center bg-gray-200'>
       <button class=" border-blue-700 border-4 border-t-transparent animate-spin rounded-full h-10 w-10"></button>
       <h1>Loading...</h1>
    </div> , document.getElementById("loader")
  )
}

export default Loader
