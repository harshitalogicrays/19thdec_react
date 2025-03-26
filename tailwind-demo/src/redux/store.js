import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";
import productSlice from './productSice'
const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        checkout:checkoutSlice,
        product:productSlice,
    }
})
export default store