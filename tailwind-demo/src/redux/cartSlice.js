import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:{cartItems:[] , total:0},
    reducers:{
        addtocart(state,action){
            const itemIndex =  state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex==-1){
                state.cartItems.push({...action.payload,qty:1})
                toast.success(`${action.payload.title} is  added to cart`)
            }
            else {toast.info(`${action.payload.title} is already added to cart`)}
        },
        increase(state,action){},
        decrease(state,action){},
        removefromcart(state,action){},
        emptycart(state,action){},
        calculatetotal(state,action){},
    }
})
export const {addtocart,increase,decrease,removefromcart,emptycart,calculatetotal}=cartSlice.actions
export default cartSlice
export const selectCart = state=>state.cart.cartItems
export const selectTotal = state => state.cart.total
