import React from 'react'

const ForwardRefDemo = (props,ref) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <input type="text" className='form-control' defaultValue={1}  ref={ref}/>
    </div>
  )
}

export default React.forwardRef(ForwardRefDemo)
