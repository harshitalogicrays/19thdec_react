import React from 'react'

const MyBtn = ({type="button",children,
     class1="" , ...props
}) => {
    
  return (
   <>
   <button type={type} className={class1}
   {...props}
   >
        {children ? children : 
        <>
            {type=="submit" ? "submit" : 
            <>
            {type=="reset"? "reset" :
            "Click Me"
            }
        </>
        }
        </>}
    </button>
   </>
  )
}

export default MyBtn
