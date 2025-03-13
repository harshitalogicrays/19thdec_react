import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super(props)
    console.log("constructor called")
    this.state = { username:"Harshita",count:0}
    this.timer = ''
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps called",state)
    return {state}
  }
  componentDidMount(){
    console.log("componentDidMount called")
    this.timer = setInterval(()=>{
      console.log("setinterval called")
      this.setState((prev)=>({count:prev.count+1}))
    }, 2000)
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate called")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount called")
    clearInterval(this.timer)
  }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button
          type="button"
          className="btn btn-primary" 
          onClick={()=>{ console.log("change username called"); 
            this.setState({username:"Ram"})}}
        >
          Button
        </button>  

        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
