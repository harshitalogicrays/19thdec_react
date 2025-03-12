import React, { Component } from 'react'
import Image1 from '/src/assets/a.jpg'
import { toast } from 'react-toastify'
export default class Forminclass extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title :"Form Demo" , 
      user : {username:"ram",email:"ram@gmail.com",password:'',cpassword:''}    
    }
  }
  handleChange = (e)=>{
    // this.setState({ user : {...this.state.user  ,  [e.target.name]:e.target.value} })

    this.setState((prevState)=>({
      user : {...prevState.user , [e.target.name]:e.target.value }
     }))
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    let {username,email,password,cpassword} =  this.state.user
    if(!username || !email || !password  | !cpassword){
      toast.error("please fill all the fields")
    }
    else if(password != cpassword){toast.error("password not match")}
    else if(!(/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/).test(email)){toast.error("invalid email")}
    else {
      alert(JSON.stringify(this.state.user))
    }
  }
  
  render() {
    return (  <div className='container p-3 shadow'>
          <h1>{this.state.title}</h1><hr/>
          <div className="row">
              <div className="col-4">  <img src={Image1} className='img-fluid'/> </div>
              <div className="col">
              <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                      <label htmlFor="" className="form-label">Username</label>
                      <input type="text" className="form-control" name="username"
                      value={this.state.user.username} onChange={this.handleChange}/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="" className="form-label">email</label>
                      <input type="text" className="form-control" name="email"
                       value={this.state.user.email} onChange={this.handleChange}/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="" className="form-label">password</label>
                      <input type="password" className="form-control" name="password"
                        value={this.state.user.password} onChange={this.handleChange}/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="" className="form-label">confirm password</label>
                      <input type="password" className="form-control" name="cpassword"
                         value={this.state.user.cpassword} onChange={this.handleChange}/>
                  </div>
                  <button  type="submit"  class="btn btn-primary" >   Submit</button>
              </form>
              </div>
          </div>
       
          </div>
    )
  }
}
