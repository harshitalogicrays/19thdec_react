import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackdemo = () => {
  const [randomVal,setRandomVal] = useState('')
  const [length,setLength] = useState(10)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const selectRef =  useRef()
  // const generateRandom  =()=>{
  //   let str = 'abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   if(numAllowed){str +='0987654321'}
  //   if(charAllowed){str +='!@#$%^&_+=-.'}
  //   let data = ''
  //   for(let i=1;i<=length;i++){
  //     data+=`${str.charAt(Math.floor(Math.random()*str.length))}`
  //   }
  //   setRandomVal(data)
  // }

  const generateRandom  = useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numAllowed){str +='0987654321'}
    if(charAllowed){str +='!@#$%^&_+=-.'}
    let data = ''
    for(let i=1;i<=length;i++){
      data+=`${str.charAt(Math.floor(Math.random()*str.length))}`
    }
    setRandomVal(data)
  },[length,numAllowed,charAllowed])

  useEffect(()=>{
    generateRandom()
  },[length,numAllowed,charAllowed])

  const handleCopy = ()=>{
   
    // document.getElementById("select").select()
   let ss =  selectRef.current.selectionStart
   let se =  selectRef.current.selectionEnd
   selectRef.current.select()
   selectRef.current.setSelectionRange(ss,se)
   selectRef.current.style.fontSize ="30px"
   window.navigator.clipboard.writeText(randomVal.substring(ss,se))
   alert(randomVal.substring(ss,se))
  }
  return (
    <div className='container mt-5 col-8'> <h1>UseCallback Demo</h1><hr/>
        <div className="input-group">
          <input type="text" className="form-control" value={randomVal} id="select" ref={selectRef}/>
          <button type="button" class="btn btn-primary" onClick={handleCopy}
          >copy </button> </div>
        <input type="range" className='me-2' name="length" 
        value={length} onChange={(e)=>setLength(e.target.value)} min="5" max={100} />
        <label htmlFor="">Length :({length})</label>&emsp;
        <input type="checkbox" className='me-2' onChange={()=>setNumAllowed(!numAllowed)}/> <label htmlFor="">Numbers</label>&emsp;
        <input type="checkbox" className='me-2' onChange={()=>setCharAllowed(!charAllowed)}/> <label htmlFor="">Special Chars</label>&emsp;
    </div>
  )
}

export default UseCallbackdemo
