import React, { Component } from 'react'

export default class EventandState extends Component {    
  handleClick = ()=>alert("button clicked")
  handleClick1 = (a,b)=>alert(a+b)
//rconst
  constructor(props){
    super(props)
    this.state =  {count : 0 , title:"state demo" , products : [] , user :{fname:""} ,  isMArried : false }
  }

  handleCounter = (op)=>{
    // this.setState({count : this.state.count+1 })
    switch(op){
      case '+':    this.setState((prevState)=>({ count  : prevState.count + 1})) ; break
    }

  } 
  render() {

    return (
   <>
    <>
      <button type="button" className='btn btn-primary me-2' onClick={()=>alert("button clicked")}>click me</button>

      <button type="button" className='btn btn-primary me-2' 
      onClick={this.handleClick}>click me</button>

      <button type="button" className='btn btn-primary me-2' 
      onClick={()=>this.handleClick()}>click me</button>

      <button type="button" className='btn btn-primary me-2' 
      onClick={()=>this.handleClick1(2,3)}>click me</button>
    </><br/><br/><hr/>
      <h2>{this.state.title}</h2>
      <button type="button" className='btn btn-primary my-4' 
      onClick={()=>this.handleCounter('+')}>Increase</button>
      <h1>{this.state.count}</h1>

   </>
    )
  }
}
