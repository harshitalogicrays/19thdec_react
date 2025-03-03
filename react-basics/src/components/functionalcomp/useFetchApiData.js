import React, { useEffect, useState } from 'react'

const useFetchApiData = (url) => {
    
const [myData,setMyData] = useState([])

    const getData =async()=>{
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMyData(data)
          }
          catch(error){console.log(error)}
    }
    useEffect(()=>{getData()},[])

  return myData
  
}

export default useFetchApiData
