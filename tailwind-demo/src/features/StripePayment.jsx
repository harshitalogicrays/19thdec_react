import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { emptycart } from '../redux/cartSlice'
import axios from 'axios'
import { selectAddress } from '../redux/checkoutSlice'

const StripePayment = ({clientSecret}) => {
  const stripe = useStripe()
  const elements =  useElements()
  const [isLoading,setIsLoading] = useState(false)
  const redirect= useNavigate()
  const dispatch=useDispatch()

  const {cartItems ,total } = useSelector(state=>state.cart)
  const shippingAddress =  useSelector(selectAddress)
  const {username,email} = JSON.parse(sessionStorage.getItem("19thdec"))

  const handlePayment = ()=>{
    setIsLoading(true)
    if(!stripe || !elements){toast.error("stripe is not initialized"); setIsLoading(false);return}
    let cardelement = elements.getElement(CardElement)
    stripe.confirmCardPayment(clientSecret ,{
      payment_method :{card :cardelement}
    }).then((res)=>{
      // console.log(res)
      if(res.paymentIntent){
        if(res.paymentIntent.status=='succeeded'){
          toast.success("payment done")
          //order placed
          payonlineorder()
        }
      }
      setIsLoading(false)
    })
    .catch((err)=>{toast.error(err.message); setIsLoading(false)})
  }

  const payonlineorder = async()=>{
    try{
      await axios.post(`${import.meta.env.VITE_BASE_URL}/orders`,{cartItems,total ,shippingAddress ,username, email , orderStatus:'placed' , orderDate:new Date().toLocaleDateString() , orderTime: new Date().toLocaleTimeString() ,paymentMethod:"online", createdAt:new Date()} )  
      // update product stock
      dispatch(emptycart())
      toast.success("order placed successfully")
      redirect('/thankyou')
  }
  catch(err){toast.error(err.message)}
  }
  return (
    <>
        <CardElement  className='mb-6'/>
        <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
       onClick={handlePayment} >
        {isLoading ? 
           <button class=" border-white border-4 border-t-transparent animate-spin rounded-full h-10 w-10"></button>
           : "(Pay Now)" }</button>
    </>
  )
}

export default StripePayment
