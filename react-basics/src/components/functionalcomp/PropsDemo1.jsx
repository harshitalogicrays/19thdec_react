import React from 'react'

const PropsDemo1 = (props) => {
    //{heading,children}
  return (
    <div>
        <h1>{props.heading}</h1>
        {props.children.length > 0 ?
           <div> {props.children[0]}</div>
        :
        <h1>{props.children}</h1>
    }

    {/* {props?.children?.[0]} */}
    </div>
  )
}

export default PropsDemo1
