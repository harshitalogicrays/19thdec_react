import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

const USeMemoDemo = () => {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(false)

    const counterIncrease = (count)=>{
      for(let i=1;i<=1000000000 ;i++){}
      return "count "+count
    }

    // const countval = counterIncrease(count)
    const countval =  useMemo(()=>{return counterIncrease(count)}, [count])
  return (
    <div>
      <Button onClick={()=>setCount(count+1)}>Counter</Button>
      <h1>{countval}</h1>      
      <Button onClick={()=>setShow(!show)}> {show?
      "show" :"hide"} </Button>

    </div>
  )
}

export default USeMemoDemo
