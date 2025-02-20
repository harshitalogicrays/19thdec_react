import React, { useState } from 'react'

const StateDemo1 = () => {
    let [num1,setNum1] =useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult] =useState('')
    const handleClick = (op)=>{
        let re = eval(num1+op+num2)
       setResult(re)}
    const handleNum1 =(e)=>{ //console.log(e)
        setNum1(e.target.value) }
  return (
        <div className='container col-6'>
            <div className="mb-3">
                <label htmlFor="num1" className="form-label">Number1</label>
                <input type="text" className="form-control" name="num1" 
                value={num1} onChange={handleNum1}/>
            </div>
            <div className="mb-3">
                <label htmlFor="num2" className="form-label">Number2</label>
                <input type="text" className="form-control" name="num2" 
                value={num2} onChange={(e)=>setNum2(e.target.value)}/>
            </div>
            <button  type="button" className="btn btn-primary me-2"  onClick={()=>handleClick('+')} > + </button>
             <button  type="button" className="btn btn-primary me-2"  onClick={()=>handleClick('-')} > - </button>
             <button  type="button" className="btn btn-primary me-2"   onClick={()=>handleClick('*')} > * </button>
             <button  type="button" className="btn btn-primary me-2"  onClick={()=>handleClick('/')} > / </button>
             <button  type="button" className="btn btn-primary me-2"    onClick={()=>handleClick('%')} > % </button>
            <h1>Result : {result}</h1> 
        </div>
  )
}

export default StateDemo1
