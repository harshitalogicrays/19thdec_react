import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
  const [count,setCount]= useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log("useeffect called")
      setCount((prevCount)=>prevCount+1)
    },2000)

    return ()=>{ clearInterval(interval)} //unload comp (cleanup code)
  },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default UseEffectDemo

