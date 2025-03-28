import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";
import productSlice from './productSice'
import orderSlice from './orderSlice'
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        checkout:checkoutSlice,
        product:productSlice,
        order:orderSlice,
        filter:filterSlice.reducer
    }
})
export default store