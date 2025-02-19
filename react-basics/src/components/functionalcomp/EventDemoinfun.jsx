import React from 'react'

const EventDemoinfun = () => {
    const handleClick = ()=>alert("button clicked")
    
    const handleClick1 = (a,b)=>alert(a+b)
  
  return (
    <>
      <button type="button" className='btn btn-primary me-2' onClick={()=>alert("button clicked")}>click me</button>

      <button type="button" className='btn btn-primary me-2' 
      onClick={handleClick}>click me</button>
   
    <button type="button" className='btn btn-primary me-2' 
      onClick={()=>handleClick()}>click me</button>

       <button type="button" className='btn btn-primary me-2' 
      onClick={()=>handleClick1(2,3)}>click me</button>
    </>
  )
}

export default EventDemoinfun
