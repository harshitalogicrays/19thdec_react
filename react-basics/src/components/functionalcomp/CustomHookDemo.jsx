import React from 'react'
import useToggle from './useToggle'
import useFetchApiData from './useFetchApiData'

const CustomHookDemo = () => {
  const {isToggle,handleToggle} =  useToggle()
  const data = useFetchApiData("https://jsonplaceholder.typicode.com/comments")
  console.log(data)
  return (
    <div>
      <button  type="button" class="btn btn-primary me-2" onClick={()=>handleToggle(false)}>Hide</button>
      <button  type="button" class="btn btn-primary me-2" onClick={()=>handleToggle(true)}>Show</button>
      <button  type="button" class="btn btn-primary me-2" onClick={handleToggle}>Toggle</button>
      
      {isToggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam vero eum! Dolores accusantium aut facilis a tempora iste dolor consequuntur officiis, rerum consequatur delectus provident omnis, beatae numquam id!</p> }
    </div>
  )
}

export default CustomHookDemo
