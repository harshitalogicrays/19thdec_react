import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { selectorder } from '../redux/orderSlice'
import { FaArrowCircleLeft } from 'react-icons/fa'

const MyOrderDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const orders = useSelector(selectorder)
    const order = orders.find(item=>item.id==id)

  return (
    <div className="container mx-auto shadow-lg mt-2 p-6 bg-white rounded-lg">
        <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        <div className="mb-3 w-50">
        <button onClick={()=>navigate('/myorders')} className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
            <FaArrowCircleLeft /> Back to Orders
        </button>
    </div>
        </div>
    <hr className="mb-4" />
    <div className="flex justify-between me-20">
    <h4 className='text-lg font-semibold text-blue-500'>Order Status: {order.orderStatus} </h4>  

            <div className='mt-4'>
                <b className="text-gray-700">Shipping Address</b><br />
                <p className="text-gray-600">
                    Name: {order.shippingAddress.name},<br />
                    Address:{order.shippingAddress.address1} {order.shippingAddress.address2},<br />
                    City:{order.shippingAddress.city}<br />
                    Pincode:{order.shippingAddress.pincode} ,<br />
                    Contact:{order.shippingAddress.mobile} 
                </p>
            </div>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-2 border">Sr. No</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Image</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Quantity</th>
                            <th className="p-2 border">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.cartItems.map((item,index)=>
                         <tr key={index}
                         className={`border-b ${index % 2 != 0 ? "bg-gray-50" : "bg-white" }`} >
                         <td  className="px-6 py-4 border text-sm text-gray-700">{index+1}</td>
                         <td  className="px-6 py-4 border text-sm text-gray-700">{item.title}</td>
                         <td  className="px-6 py-4 border text-sm text-gray-700">
                            <img src={item.image} alt="loading.." height='50px' width='50px'/></td>
                         <td  className="px-6 py-4 border text-sm text-gray-700">{item.price}</td>
                         <td  className="px-6 py-4 border text-sm text-gray-700">{item.qty}</td>
                         <td  className="px-6 py-4 border text-sm text-gray-700">{item.price*item.qty}</td>
                         </tr>
                    )}
                        <tr className="bg-gray-100 font-semibold">
                            <td colSpan={5} className="p-2 border text-right">Total Amount:</td>
                            <td className="p-2 border text-center">&#8377;{order.total} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
</div>
  )
}

export default MyOrderDetails
