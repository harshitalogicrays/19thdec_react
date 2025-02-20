import React, { useState } from 'react'

const Statedemoinfun = () => {
    let a = 10
    let [count , setCount ] = React.useState(0)
    let [str,setStr] =useState("pranab")
    let [products] = useState([])
    let [users,setUser] = useState({username:"",email:""})
    const handleIncrease =()=>{
            //  setCount(count+1) //count = count+1 
            setCount((prevCount)=>prevCount+1) //count = count+1 
            console.log(count)
    }
  return (
    <div>
      <h1>{a}</h1>
      <button type="button" className='btn btn-primary me-2' onClick={handleIncrease}>+</button>
      <button type="button" className='btn btn-primary me-2' 
      onClick={()=>setCount((prevCount)=>prevCount-1)}>-</button>
      <button type="button" className='btn btn-primary me-2' onClick={()=>setCount(0)}>reset</button>
      <button type="button" className='btn btn-primary me-2' onClick={()=>setCount(-count)}>changeSign</button>

      <h1>Count : {count}</h1>
    </div>
  )
}

export default Statedemoinfun
