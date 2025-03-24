import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart, selectTotal } from '../redux/cartSlice'

const CheckoutSummary = () => {
  const cartItems =  useSelector(selectCart)
  const total =  useSelector(selectTotal)
  return (
    <div className='border  p-2'>
      <h1  className='text-center text-4xl mb-4 '>Checkout Summary</h1><hr/>
      <div className=' p-3 mb-3'>
        <p>products: ({cartItems.length})</p>
        <p>Total Price: ${total}</p>
      </div>
      {cartItems.map((item,index)=>
     <div className='border-1 p-3 mb-2' key={index}> 
        <p>product name:{item.title}</p>
        <p>price: {item.price}</p>
        <p>qty: {item.qty}</p>
      </div>)}
    </div>
  )
}

export default CheckoutSummary
