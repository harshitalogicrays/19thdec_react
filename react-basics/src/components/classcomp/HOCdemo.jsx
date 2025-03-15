import React, { Component } from 'react'
import USerList from './USerList'
import HOC1 from './HOC1'
import WrappedComp from './WrappedComp'

const Users =  HOC1({url:"https://jsonplaceholder.typicode.com/users" , columns:["username","email","phone","name","id"]})

const Posts =  HOC1({url:"https://jsonplaceholder.typicode.com/posts", columns:["userId","id","title","body"]})

const Todos =  HOC1({url:"https://jsonplaceholder.typicode.com/todos", columns:["userId","id","title","completed"]})

export default class HOCdemo extends Component {
  render() {
    return (
      <div>
          {/* <USerList/> */}

          <Users/>  <hr/> <Posts/>    <hr/> <Todos/>
</div>
    )
  }
}
