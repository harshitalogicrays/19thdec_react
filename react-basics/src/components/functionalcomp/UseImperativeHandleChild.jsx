import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseImperativeHandleChild = (props,ref) => {
    const [data,setData] = useState('')
    const changeData =()=>setData("LRA")
    
    useImperativeHandle(ref ,()=>{
        return {
            setVal(str){setData(str)},
            clearVal(){setData('')},
            getVal(){return data}
        }
    },[data])
  return (
    <div> 
      <input type="text" className='form-control'  value={data} onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default forwardRef(UseImperativeHandleChild)
