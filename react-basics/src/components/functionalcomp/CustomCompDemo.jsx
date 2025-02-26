import React from 'react'
import MyBtn from './MyBtn'

const CustomCompDemo = () => {
  return (
    <div>
      <MyBtn style={{borderRadius:"20px"}}
      onClick = {()=>alert("button clicked")}>Add</MyBtn><hr/>

      <MyBtn type="submit" class1="text-danger" id="btn1" name="btn1" disabled="disabled"></MyBtn><hr/>

    </div>
  )
}

export default CustomCompDemo
