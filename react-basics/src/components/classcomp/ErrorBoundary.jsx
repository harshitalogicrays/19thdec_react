import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {  hasError:false, error:""}
  }
  
  static getDerivedStateFromError(){
    return { hasError: true }
  }

  componentDidCatch(err,errorInfo){
    console.log(err)
    this.setState({error:err.message})
  }

    render() {
    return (
      <div>
        {this.state.hasError ? 
        <>
            <h1>Invalid Name</h1>
            <h2>{this.state.error}</h2>
        </>
        :
        <>  {this.props.children}</>
    }
      
      </div>
    )
  }
}
