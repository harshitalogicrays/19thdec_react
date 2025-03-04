import React, { use, useContext } from 'react'
import { con1, useConDemo } from './MyContext'

const UseContextDemo = () => {
  // const condata =  useContext(con1)
   // const {data,addData} =  useContext(con1)
  // const {data,addData} =  use(con1)
  
  const {data,addData,setData}  =  useConDemo()
  return (
    <div>
      {/* <button type="button" 
      onClick={()=>condata.addData("Harshita")}>Chnage</button>
      <h1>{condata.data}</h1> */}
      
      <button type="button" 
      onClick={()=>addData("Harshita")}>Chnage</button>
      <button type="button" 
      onClick={()=>setData("Meera")}>Chnage</button>
      <h1>{data}</h1>
    </div>
  )
}

export default UseContextDemo
