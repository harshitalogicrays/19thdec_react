import React, { useEffect, useState, useTransition } from 'react'
import { Button, Spinner } from 'react-bootstrap'

const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition()
  const [mydata,setMyData] = useState([])
  const loadItems = ()=>{
      startTransition(async()=>{
        // await new Promise(res=>setTimeout(res,3000))
        try{
          const res = await fetch("https://jsonplaceholder.typicode.com/comments") //get method
          const data = await res.json()
          // console.log(data)
          setMyData(data)
        }
        catch(error){console.log(error)}
      })
  }
  // useEffect(()=>{ loadItems() },[])
  return (
    <div className='mt-5'>
      <Button onClick={loadItems} disabled={isPending}
      >{isPending ? "Loading..." : "Load Data"}</Button>
     <br></br>
      {isPending ?  
            <Spinner animation="border" variant="danger" />
      :
        // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, illo? At temporibus ea ducimus fuga sapiente earum eveniet quae odio dolorem non vel explicabo culpa perferendis sed nobis, similique deserunt.</p>
        
        <div  class="table-responsive"   >
            <table  class="table table-bordered table-striped table-hover" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PostId</th>
                        <th>name</th><th>email</th><th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.length==0 && <tr><td colSpan={5} className='text-center'>No data found</td></tr>}
                    {mydata.map((d,index)=> 
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.postId}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.body}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        }
    </div>
  )
}

export default UseTransitionDemo
