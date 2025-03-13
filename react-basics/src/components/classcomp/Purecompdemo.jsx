import React, { Component, PureComponent } from 'react'

export default class Purecompdemo extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"harshita"
    }
  }
  
  render() {
    console.log("render called")
    return (
      <div>
         <button
          type="button"
          className="btn btn-primary" 
          onClick={()=>{ console.log("change username called"); 
            this.setState({username:"Ram"})}}
        >
          Button
        </button>  
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
