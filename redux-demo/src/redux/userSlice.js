import { createSlice,nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{ users:[] , error:"" , loading:false},
    reducers :{ //pure function
        add_user : (state,action)=>{
            console.log("user added")
            console.log(action.payload)
            state.users.push({...action.payload ,id : nanoid()})
        } ,
        remove_user(state,action){},
        remove_all_users(state,action){}
    }
})
// console.log(userSlice.actions)
export const {add_user} = userSlice.actions
export default userSlice
export const selectUsers = (state)=>state.user.users