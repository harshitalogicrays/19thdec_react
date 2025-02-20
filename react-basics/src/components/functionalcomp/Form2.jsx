import React, { useState } from 'react'
import Image1 from '/src/assets/a.jpg'
const Form2 = () => {
let [user,setUser] = useState({username:"ram",email:"ram@gmail.com",password:'',cpassword:''})
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
  return (
    <div className='container p-3 shadow'>
    <h1>Form Demo</h1><hr/>
    <div className="row">
        <div className="col-4">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" name="username"
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">email</label>
                <input type="text" className="form-control" name="email"
                 value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">password</label>
                <input type="password" className="form-control" name="password"
                 value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">confirm password</label>
                <input type="password" className="form-control" name="cpassword"
                 value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
            </div>
            <button  type="submit"  class="btn btn-primary" >   Submit</button>
        </form>
        </div>
    </div>
 
    </div>
  )
}

export default Form2
