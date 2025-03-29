import { createSlice }  from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name:'filter',
    initialState:{filterProducts:[] , catVal: [] , brandsVal:[] , priceRange:[] , searchVal:''},
    reducers:{
        APPLY_FILTER(state,action){
            console.log(action.payload)
            let {products , categories, brands , priceRange , search} = action.payload
            let filters = products
            // if(search){
            //     filters =  filters.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
            // }
            // if(categories.length > 0){
            //     filters =  filters.filter(item=>categories.includes(item.category))
            // }
            // if(brands.length > 0){
            //     filters =  filters.filter(item=>brands.includes(item.brand))
            // }
            // if(priceRange.length > 0){
            //     filters =  filters.filter(item=>item.price>=priceRange[0] && item.price<=priceRange[1])
            // }
          state.filterProducts= filters
          state.searchVal =  search 
          state.catVal = categories
          state.brandsVal = brands
          state.priceRange = priceRange
   }
    }
})
export const {APPLY_FILTER} = filterSlice.actions
export default filterSlice
export const selectFilterProducts = state=>state.filter.filterProducts
export const selectCategories = state=>state.filter.catVal
export const selectBrands = state=>state.filter.brandsVal
export const selectPrice = state=>state.filter.priceRange
export const selectSearch = state=>state.filter.searchVal

