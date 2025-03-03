import React, { useState } from 'react'

//custom hook
const useToggle = () => {
    const [isToggle,setIsToggle] = useState(true)
    const handleToggle=(val)=>{
        if(typeof val == "boolean"){
            setIsToggle(val)
        }
        else setIsToggle(!isToggle)
    }
  return {isToggle,handleToggle}
}

export default useToggle
