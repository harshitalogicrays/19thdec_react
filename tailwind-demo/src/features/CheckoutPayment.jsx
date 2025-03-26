import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddress } from '../redux/checkoutSlice'
import { Navigate, useNavigate } from 'react-router'
import { emptycart } from '../redux/cartSlice'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import StripePayment from './StripePayment'

const stripe =  loadStripe(`${import.meta.env.VITE_STRIPE_PK}`)

const CheckoutPayment = () => {
  const redirect =  useNavigate()
  const dispatch = useDispatch()
  const [paymentMethod ,setPaymentMethod] = useState('')
  const [clientSecret ,setClientSecret] = useState('')

  const {cartItems ,total } = useSelector(state=>state.cart)
  const shippingAddress =  useSelector(selectAddress)
  const {username,email} = JSON.parse(sessionStorage.getItem("19thdec"))

  const handleCODOrder = async()=>{
    try{
      await axios.post(`${import.meta.env.VITE_BASE_URL}/orders`,{cartItems,total ,shippingAddress ,username, email , orderStatus:'placed' , orderDate:new Date().toLocaleDateString() , orderTime: new Date().toLocaleTimeString() ,paymentMethod:"cod", createdAt:new Date()} )
      
      // update product stock
      dispatch(emptycart())
      toast.success("order placed successfully")
      redirect('/thankyou')
  }
  catch(err){toast.error(err.message)}
  }
useEffect(()=>{
  if(paymentMethod=='online'){ handleStripe()} },[paymentMethod])

const handleStripe = async()=>{
  try{
    const res = await fetch(`${import.meta.env.VITE_NODE_URL}/create-payment-intent` , {
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({total})    })
    const data  = await res.json()
    console.log(data.clientSecret)
    setClientSecret(data.clientSecret)
  }
  catch(err){toast.error(err.message)}
}


  if(cartItems.length !=0){
  return (
    <Elements stripe={stripe}>
        <div className='flex max-w-7xl gap-12 mt-10 mx-auto bg-white shadow-lg rounded-lg p-6 '>
        <div className='flex-1 border p-3'>
            <h1 className='text-center text-4xl mb-4'>Checkout Payment</h1><hr/>
            <h2 className="text-xl font-semibold mt-4">Payment Method</h2>
            <div className="mt-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"  onClick={()=>setPaymentMethod('cod')}
                  className="w-5 h-5 text-blue-500" 
                />
                <label className="text-lg">Cash on Delivery</label>
              </div>
           {paymentMethod=="cod" &&
          <div className="flex mt-6 space-x-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 cursor-pointer" 
                onClick={handleCODOrder}
                >
                Place Order
              </button>
              <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
                Cancel
              </button>
            </div>}
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="payment" 
                  value="online"  onClick={()=>setPaymentMethod('online')}
                  className="w-5 h-5 text-blue-500" 
                />
                <label className="text-lg">Pay Online</label>
              </div>
            </div>
            {(paymentMethod=='online' && clientSecret ) &&
              <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">Enter Payment Details</h3>
                <StripePayment clientSecret = {clientSecret}/>
              </div>    
}   
        </div>
        <div className='flex-1'>
            <CheckoutSummary/>
        </div>
      </div>
      </Elements>
  )
}
else return <Navigate to='/' replace />
}

export default CheckoutPayment
