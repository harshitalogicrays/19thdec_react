import React from 'react'

const OrderDetails = () => {
    let order = {}
  return (
    <div className="container mx-auto shadow-lg mt-2 p-6 bg-white rounded-lg">
    <h1 className="text-2xl font-bold mb-4">My Order Details</h1>
    <hr className="mb-4" />
    <div className="mb-3 w-50">
        <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
            <FaArrowCircleLeft /> Back to Orders
        </button>
    </div>
    {order == null ? (
        <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-pulse"></div>
        </div>
    ) : (
        <>
    <h4 className='text-lg font-semibold text-blue-500'>Order Status: </h4>  
                            
            
            <div className='mt-4'>
                <b className="text-gray-700">Shipping Address</b><br />
                <p className="text-gray-600">
                    Name: ,<br />
                    Address: ,<br />
                    City:<br />
                    Pincode: ,<br />
                    Contact: 
                </p>
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
                        <tr className="bg-gray-100 font-semibold">
                            <td colSpan={5} className="p-2 border text-right">Total Amount:</td>
                            <td className="p-2 border text-center">&#8377; </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )}
</div>
  )
}

export default OrderDetails
