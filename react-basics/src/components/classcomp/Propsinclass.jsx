import React, { Component } from 'react'
import PropsChild from './PropsChild'
import Firstclasscomp from './firstclasscomp'

export default class Propsinclass extends Component {
  render() {
    return (
      <div>
        <PropsChild username="Ram" isActive={true} mobile={988789}/>

        <PropsChild isActive={true} mobile={988789}>
          <h3>children1</h3>
          <Firstclasscomp/>
        </PropsChild>
      </div>
    )
  }
}
