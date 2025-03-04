import React, { createContext, useContext, useState } from 'react'

export const con1 =  createContext()

const MyContext = ({children}) => {
    const [data,setData] = useState("Ram")
    const addData = (item)=>{
        setData(item)
    }

  return (
    <con1.Provider value={{data,addData,setData}}>
      {children}
    </con1.Provider>
  )
}

export default MyContext
export const useConDemo = ()=>useContext(con1)
