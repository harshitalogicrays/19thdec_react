import React from 'react'

const Liftingthestateupchild = ({calculation}) => {
  return (
  <>
       <button type="button" className='btn btn-primary me-2' onClick={()=>calculation('+')}>+</button>
      <button type="button" className='btn btn-primary me-2' onClick={()=>calculation('-')}>-</button>
      <button type="button" className='btn btn-primary me-2' onClick={()=>calculation('reset')}>reset</button>
      <button type="button" className='btn btn-primary me-2' onClick={()=>calculation('change')}>changeSign</button>

  </>
  )
}

export default Liftingthestateupchild
