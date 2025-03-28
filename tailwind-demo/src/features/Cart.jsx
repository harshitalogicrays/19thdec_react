import React, { useEffect } from 'react';
import { HiTrash } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { calculatetotal, decrease, emptycart, increase, removefromcart, selectCart, selectTotal } from '../redux/cartSlice';
import { useLocation, useNavigate } from 'react-router';

const Cart = () => {
 const cartItems =  useSelector(selectCart)
 const totalPrice = useSelector(selectTotal);
 const dispatch =  useDispatch()
 const navigate =  useNavigate()
 const location = useLocation()
 useEffect(()=>{
  dispatch(calculatetotal())
 },[cartItems])

 const handleCheckout = ()=>{
  if(cartItems.length != 0){
    if(sessionStorage.getItem("19thdec") != null){
      navigate('/checkout')
    }
    else {
      navigate('/login',{state :{path : location.pathname }})
    }
  }
 }
  return (
   <>
     <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
      <div className="flex-1">
  <div className="bg-white shadow-lg rounded-lg p-6">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-700 text-left">
          <th className="p-4">Product</th>
          <th className="p-4 text-center">Quantity</th>
          <th className="p-4 text-center">Price</th>
          <th className="p-4 text-center">Total</th>
          <th className="p-4 text-center">Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="border-b border-gray-200">
            <td className="p-4 flex items-center gap-4">
              <img src={item?.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
              <span className="text-gray-800 font-medium">{item.title}</span>
            </td>
            <td className="p-4 text-center">
              <div className="flex items-center justify-center bg-gray-200 rounded-lg w-max">
                <button className="bg-gray-300 px-3 py-2 rounded-l-lg text-gray-700 font-bold hover:bg-gray-400" onClick={()=>dispatch(decrease(item))}>−</button>
                <span className="px-6 py-2 text-gray-900 bg-white border-t border-b border-gray-300 text-lg font-semibold">
                  {item.qty}
                </span>
                <button className="bg-gray-300 px-3 py-2 rounded-r-lg text-gray-700 font-bold hover:bg-gray-400"  onClick={()=>dispatch(increase(item))}>+</button>
              </div>
            </td>
            <td className="p-4 text-center text-gray-700 font-medium">${Number(item.price).toFixed(2)}</td>
            <td className="p-4 text-center text-gray-900 font-bold">${Number(item.price * item.qty).toFixed(2)}</td>
            <td className="p-4 text-center">
              <button className="text-red-500 hover:text-red-700"
               onClick={()=>dispatch(removefromcart(item.id))}>
                <HiTrash className="h-6 w-6" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${Number(totalPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">${ (totalPrice > 0 && totalPrice < 21) ? "5.00" :'0.00'}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">${ (totalPrice > 0 && totalPrice < 21) ?Number(totalPrice + 5).toFixed(2)  : Number(totalPrice ).toFixed(2)}</span>
            </div>
            <div className="mt-8 flex gap-4">
            <button className="w-1/2 bg-red-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-200"  onClick={()=>dispatch(emptycart())}>
                Empty Cart
              </button>
                <button onClick={handleCheckout} className={`w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200 ${cartItems.length==0 && 'opacity-60'}`}>
                  Proceed to Checkout
                </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};
export default Cart 