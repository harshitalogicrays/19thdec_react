import React, { Fragment } from 'react'

const PropsDemo1 = (props) => {
    //{heading,children}
  return (
    <Fragment>
        <h1>{props.heading}</h1>
        {props.children.length > 0 ?
           <div> {props.children[0]}</div>
        :
        <h1>{props.children}</h1>
    }

    {/* {props?.children?.[0]} */}
    </Fragment>
  )
}

export default PropsDemo1
