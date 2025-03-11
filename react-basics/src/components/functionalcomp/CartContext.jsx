import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
const cartcon = createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const ADD_TO_CART = (product)=>{
        // console.log(product)
        const itemIndex = cartItems.findIndex(item=>item.id == product.id) //index or -1
        if(itemIndex == -1){ //add
            setCartItems([...cartItems , {...product ,  qty:1}])
            toast.success(`${product.name} is added to cart`)
        }
        else {
            //already available
            toast.info(`${product.name} is already added to cart`)
        }

    }
    const increase = (product)=>{
        const itemIndex = cartItems.findIndex(item=>item.id == product.id) 
        if(product.stock > cartItems[itemIndex].qty ) cartItems[itemIndex].qty++
        else toast.error(`only ${product.stock} qty available`)
        setCartItems([...cartItems])
    }
    const decrease = (product)=>{
        const itemIndex = cartItems.findIndex(item=>item.id == product.id) 
        if(cartItems[itemIndex].qty > 1) cartItems[itemIndex].qty--
        else cartItems[itemIndex].qty = 1
        setCartItems([...cartItems])
    }
    const removefromcart = (product)=>{
        // const itemIndex = cartItems.findIndex(item=>item.id == product.id) 
        // cartItems.splice(itemIndex,1)
        // setCartItems([...cartItems])

       const filters =  cartItems.filter(item=>item.id != product.id)
       setCartItems([...filters])
    }
    const emptycart = ()=>{
        setCartItems([]);setTotal(0)
    }
    const calculatetotal = ()=>{
        const t = cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
        setTotal(t)
    }
  return (
    <cartcon.Provider value={{cartItems,total,ADD_TO_CART,increase,decrease,removefromcart,emptycart,calculatetotal}}>

        {children}
        
    </cartcon.Provider>
  )
}

export default CartContext
export const useCart = ()=>useContext(cartcon)
