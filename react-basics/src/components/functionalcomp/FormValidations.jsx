import React, { useEffect, useRef, useState } from 'react'
import Image1 from '/src/assets/a.jpg'
const FormValidations = () => {
    const focusRef =  useRef()
let [user,setUser] = useState({username:"",email:"",password:'',cpassword:''})
let [errors,setErrors] = useState({})
const checkusername = ()=>{
    if(user.username==''){
        setErrors((prevErrors)=>({...prevErrors , unamerr:"username is required"}));return false
        //errors = {unameerr:"username is required"}
    }
    else {
           setErrors((prevErrors)=>({...prevErrors , unamerr:""}));return true
    }
}

const checkemail = ()=>{
    let pattern = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
    if(user.email==''){
        setErrors((prevErrors)=>({...prevErrors , emailerr:"email is required"}));return false
    }
    else if(!pattern.test(user.email)){
        setErrors((prevErrors)=>({...prevErrors , emailerr:"invalid email"}));return false 
    }
    else {
           setErrors((prevErrors)=>({...prevErrors , emailerr:""}));return true
    }
}
    const handleSubmit = (e)=>{
        e.preventDefault()
        let un = checkusername()
        let em = checkemail()
        if(un==false || em==false){
            e.preventDefault()
        }
        alert(JSON.stringify(user))
    }
    useEffect(()=>{ focusRef.current.focus()},[])
  return (
    <div className='container p-3 shadow'>
    <h1>Form Validations</h1><hr/>
    <div className="row">
        <div className="col-4">
            <img src={Image1} className='img-fluid'/>
        </div>
        <div className="col">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" ref={focusRef}
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
                onBlur={checkusername}/>
                {errors?.unamerr && <span className="text-danger">{errors.unamerr}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">email</label>
                <input type="text" className="form-control" name="email"
                 value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} onBlur={checkemail}/>
                {errors?.emailerr && <span className="text-danger">{errors.emailerr}</span>}
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

export default FormValidations
