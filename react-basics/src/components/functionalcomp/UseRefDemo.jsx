import React, { useEffect, useRef } from 'react'

const UseRefDemo = () => {
  const focusRef= React.useRef()
  const myRef = useRef()
  useEffect(()=>{ focusRef.current.focus()},[])
  return (
    <div className='container mt-5'>
      <input type="text" ref={focusRef} className="form-control" />
      <button type="button" className='btn btn-primary' 
      onClick={()=>alert(focusRef.current.value)}> Fetch Data</button>
      
<br/><br/>
      <button type="button" onClick={()=>myRef.current.value--}>-</button>
      <input type="text" style={{width:'40px',textAlign:'center'}} defaultValue={1} 
      ref={myRef}/>
      <button type="button" onClick={()=>myRef.current.value++}>+</button>

    </div>
  )
}

export default UseRefDemo
