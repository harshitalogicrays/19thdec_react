import React, { Component, createRef } from 'react'

export default class Refinclass extends Component {
  constructor(props) {
    super(props) 
    this.state = {}
    this.focusRef =  createRef()
  }
  
  render() {
    return (
      <div className='container mt-5'>
         <input type="text" ref={this.focusRef} className="form-control" />
         <button type="button" className='btn btn-primary' 
      onClick={()=>alert(this.focusRef.current.value)}> Fetch Data</button>
      </div>
    )
  }
}
