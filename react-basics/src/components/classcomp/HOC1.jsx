import React from 'react'
import { toast } from 'react-toastify'
import WrappedComp from './WrappedComp'

const HOC1 = ( props) => { // {url:"",columns:[]}
  return class extends React.Component{
     constructor(props) {
          super(props)   
          this.state = { data:[]  }}
        
        getData = async()=>{
            try{
               const res  = await fetch(props.url)
               const res1 = await res.json()
               this.setState({data:res1})
               console.log(res1)    }
            catch(err){toast.error(err)}   }
    
        componentDidMount(){  this.getData() }
      
      render() {
        return (
          <div> 
                <WrappedComp data={this.state.data} inputData={props} />    
         </div>
        )
    }
  }
}

export default HOC1
