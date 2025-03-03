import React, { useEffect, useRef } from 'react'
import REfChild from './REfChild'
import ForwardRefDemo from './ForwardRefDemo'

const UseRefDemo = () => {
  const focusRef= React.useRef()
  const myRef = useRef()
  const myRef1 = useRef()
  const myRef2 = useRef()
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

<hr/>
      <REfChild innerRef= {myRef1}/>
         <input type="text" style={{width:'40px',textAlign:'center'}} defaultValue={1} 
      ref={myRef1}/>
    <hr/>

    <ForwardRefDemo title="forwarding ref" ref={myRef2} />
    <button type="button" className='btn btn-primary' onClick={()=>myRef2.current.focus()}>focus</button>
    </div>
  )
}

export default UseRefDemo
