import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class USerList extends Component {
    constructor(props) {
      super(props)   
      this.state = { data:[]  }
    }
    
    getData = async()=>{
        try{
           const res  = await fetch("https://jsonplaceholder.typicode.com/todos")
           const res1 = await res.json()
           this.setState({data:res1})
           console.log(res1)
        }
        catch(err){toast.error(err)}
    }

    componentDidMount(){  this.getData() }
  
  render() {
    return (
      <div>
        <div class="table-responsive"  >
          <table class="table table-bordered table-striped table-hover"  >
            <thead>
              <tr>
                <th scope="col">userId</th>
                <th scope="col">id</th>
                <th scope="col">title</th><th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.lenth == 0 && <tr><td colspan="4">No Data Found</td></tr>}
              {this.state.data.map((item,index)=>
              <tr key={index}>
                <td scope="row">{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td><td>{item.completed ? "Completed" :"Not Completed"}</td>
              </tr>)}
             
            </tbody>
          </table>
        </div>
        
      </div>
    )
  }
}
