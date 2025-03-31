import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

const ChangeOrderStatus = ({order}) => {
    const navigate = useNavigate()
    const [ostatus,setOStatus] = useState(order.orderStatus)
    const updateStatus = async()=>{
        try{    
            const res  = await axios.put(`${import.meta.env.VITE_BASE_URL}/orders/${order.id}`,{...order , orderStatus:ostatus , editedAt:new Date()})
            if(res.status==201 || res.status==200){
              emailjs.send('service_i18a4kv', 'template_686qaqa', {status:res.data.orderStatus ,email:res.data.email ,payment:res.data.paymentMethod , orders:res.data.cartItems ,total:res.data.total ,id:res.data.id}, {
                publicKey: 'Ir17coOALHBiw7W2W',
              }).then(()=>{
                toast.success("order status updated")
                navigate('/admin/orders')
              }).catch((err)=>toast.error(err.message))
            } 
           
           
        }
        catch(err){toast.error(err.message)}
    }
  return (
    <div>
        <h1 className='text-gray-900 text-2xl mb-3'>Update Order Status for orderID : {order.id}</h1>
      <select name="ostatus" className='w-2xs ring-1 ring-indigo-200 p-1 rounded-lg'
      value={ostatus} onChange={(e)=>setOStatus(e.target.value)}> 
        <option>processing</option>
        <option>shipped</option>
        <option>placed</option>
        <option>delivered</option>
        <option>out for delivery</option>
        <option>return</option>
        <option>cancelled</option>
        <option>dispatched</option>
     </select>
     <button type="button"  className="ms-3 p-1 w-20 bg-indigo-500 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-200" onClick={updateStatus}
        >Update</button>
    </div>
  )
}

export default ChangeOrderStatus
