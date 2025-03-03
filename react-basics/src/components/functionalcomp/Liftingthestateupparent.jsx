import React from 'react'
import Liftingthestateupchild from './Liftingthestateupchild'

const Liftingthestateupparent = () => {
        let [count , setCount ] = React.useState(0)
        let calculation = (op)=>{
          switch(op){
            case '+' :   setCount(count+1);break
            case '-' :   setCount(count-1);break
            case 'reset' :   setCount(0);break
            case 'change' :   setCount(-count);break
          }
        }
  return (
    <div className='container mt-5'>
        <Liftingthestateupchild calculation ={calculation}/>
         <h1>Count : {count}</h1>
    </div>
  )
}

export default Liftingthestateupparent
