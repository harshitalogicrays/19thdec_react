import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const ChangeOrderStatus = ({order}) => {
    const navigate = useNavigate()
    const [ostatus,setOStatus] = useState(order.orderStatus)
    const updateStatus = async()=>{
        try{    
            await axios.put(`${import.meta.env.VITE_BASE_URL}/orders/${order.id}`,{...order , orderStatus:ostatus , editedAt:new Date()})
            toast.success("order status updated")
            navigate('/admin/orders')
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
