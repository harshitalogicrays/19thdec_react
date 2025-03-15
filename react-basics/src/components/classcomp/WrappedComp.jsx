import React, { Component } from 'react'

export default class WrappedComp extends Component {

  render() {  console.log(this.props)
    return (
      <div class="table-responsive"  >
      <table class="table table-bordered table-striped table-hover">
        <thead> <tr>    
          {this.props.inputData.columns.map((col,index)=><th key={index}>{col}</th>)} </tr> </thead>
        <tbody>
          {this.props.data.length == 0 && <tr><td colspan={this.props.inputData.columns.length}>No Data Found</td></tr>}
          {this.props.data.map((item,index)=>
          <tr key={index}>
            {this.props.inputData.columns.map((col,index)=><td key={index}>{item[col]}</td>)}
          </tr>)}
        </tbody>  </table>
        </div>
    )
  }
}
