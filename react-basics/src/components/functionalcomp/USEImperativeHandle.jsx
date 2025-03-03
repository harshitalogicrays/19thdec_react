import React from 'react'
import UseImperativeHandleChild from './UseImperativeHandleChild'

const USEImperativeHandle = () => {
  const myRef = React.useRef()
  return (
    <div className='container mt-5 col-6'>
      <button type="button" className='btn btn-primary me-2 my-3' onClick={()=>myRef.current.setVal("Harshita")}>Set Value</button>
     <button type="button"  className='btn btn-primary me-2 my-3' onClick={()=>myRef.current.clearVal()}>Clear Value</button>
 
      <button type="button"  className='btn btn-primary me-2 my-3' onClick={()=>console.log(myRef.current.getVal())}>Get Value</button>

      <UseImperativeHandleChild ref={myRef}/>
    </div>
  )
}

export default USEImperativeHandle
