import React from 'react'
import { useDispatch } from 'react-redux'
import { add_user } from './redux/userSlice'

const AddUser = () => {
    const dispatch = useDispatch()
    const handleAdd = ()=>{
        dispatch(add_user({username:"Ram",email:"ram@gmail.com",password:"ram123",role:1}))
    }
  return (
    <div>
        <button className='btn btn-primary' 
        onClick={handleAdd}>Add User</button>
    </div>
  )
}

export default AddUser
