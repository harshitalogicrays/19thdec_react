import React, { useState } from 'react'
import CheckoutSummary from './CheckoutSummary'

const CheckoutPayment = () => {
  const [paymentMethod ,setPaymentMethod] = useState('')
  return (
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
            {paymentMethod=='online' &&
              <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">Enter Payment Details</h3>
              
              </div>    
}   
        </div>
        <div className='flex-1'>
            <CheckoutSummary/>
        </div>
      </div>
  )
}

export default CheckoutPayment
