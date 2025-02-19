/*import React from 'react'

const Propsdemoinfun = (props) => {
    console.log(props)
    let a  = 10
    // props.username = "Tops" //Cannot assign to read only property 'username' of object
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>username: {props.username}</h2>
      <h3>{a}</h3>
    </div>
  )
}

export default Propsdemoinfun
 */


import React from 'react'
import PropsDemo1 from './PropsDemo1'
import FirstFuncomp from './FirstFuncomp'

const Propsdemoinfun = ({title,username="Ram",mobile,isActive}) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{username}</h2>
      {/* {isActive ? <h3>{username} is active</h3> : "user is not active" }<br/>

      {isActive && <h3>{username} is active</h3>}

      {isActive || <h3>{username} is not active</h3>} */}

        <PropsDemo1 heading="children props demo">
            <span>span tag</span>
        </PropsDemo1>
        <hr/>

        <PropsDemo1 heading="children props demo">
            <b>bold tag</b>
            <FirstFuncomp></FirstFuncomp>
            <h3>heading3</h3>
        </PropsDemo1>
    </React.Fragment>
  )
}

export default Propsdemoinfun
