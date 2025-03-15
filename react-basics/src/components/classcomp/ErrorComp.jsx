import React from 'react'
const ErrorComp = ({username}) => {
        if(username=="Joker") {
        throw new Error("something went wrong")  }
    else {
        return (
            <div> <h1>Hello {username}</h1> </div>
          )
    }
 
}

export default ErrorComp
