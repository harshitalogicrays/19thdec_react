import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        checkout:checkoutSlice
    }
})
export default store