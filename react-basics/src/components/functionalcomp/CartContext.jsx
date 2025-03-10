import React, { createContext, useContext, useState } from 'react'
const cartcon = createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const ADD_TO_CART = (product)=>{
        // console.log(product)
        const itemIndex = cartItems.findIndex(item=>item.id == product.id) //index or -1
        if(itemIndex == -1){ //add
            setCartItems([...cartItems , {...product ,  qty:1}])
            alert(`${product.name} is added to cart`)
        }
        else {
            //already available
            alert(`${product.name} is already added to cart`)
        }

    }
    const increase = ()=>{}
    const decrease = ()=>{}
    const removefromcart = ()=>{}
    const emptycart = ()=>{}
    const calculatetotal = ()=>{}
  return (
    <cartcon.Provider value={{cartItems,total,ADD_TO_CART,increase,decrease,removefromcart,emptycart,calculatetotal}}>

        {children}
        
    </cartcon.Provider>
  )
}

export default CartContext
export const useCart = ()=>useContext(cartcon)
