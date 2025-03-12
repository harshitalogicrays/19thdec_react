import React, { Component } from 'react'

export default class PropsChild extends Component {
  render() {
    let {mobile} = this.props
    return (
    <>
        <h1>{this.props.username}</h1>
        {/* {JSON.stringify(this.props)} */}
        {this.props.isActive ? "ok" :<>Not ok</>}
        {this.props.children}
    </>
    )
  }
}


PropsChild.defaultProps = {
    username: "LRA",
    isActive:false
}