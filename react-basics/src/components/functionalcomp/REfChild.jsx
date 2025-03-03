import React from 'react'

const REfChild = ({innerRef}) => {
  return (
    <div>
         <button type="button"  onClick={()=>innerRef.current.value--}>-</button>
         <button type="button"  onClick={()=>innerRef.current.value++}>+</button>
    </div>
  )
}

export default REfChild
