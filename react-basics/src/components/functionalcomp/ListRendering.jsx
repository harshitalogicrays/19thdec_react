import React, { Fragment } from 'react'
import DisplayNames from './DisplayNames'
import products from '../../assets/productslist'
const ListRendering = () => {
    let names = ["Shivam","Pranab","dilip","harshita","priya","chirag","krunal","aditi"]
// console.log(products[0].name)
    
let mystyles  = {
    color:"pink" ,  TextDecoration:"underline" , border:"2px solid blue" , borderRadius:"10px"
}
  return (
    <div>
      <h1 style={mystyles}>List Rendering</h1>
      <h2 className='app'>heading</h2>
        <h1 className={cssmodule.error}>Hello React</h1>
        
      {/* {names.join(",")} */}
{/* 
        {names.map((name,index)=><h3 key={index}>{name}</h3>)} */}

        {/* {names.map((name,index)=><Fragment key={index}>{name}</Fragment>)} */}


        {/* {names.map((name,index)=><DisplayNames key={index} name={name}/>)} */}

        {/* {names.map((name,index)=>{return <DisplayNames key={index} name={name}/> })} */}

        {/* {products.map((product)=><h5 key={product.id}>{JSON.stringify(product)}</h5>)} */}
        {/* {products.map((product)=><h5 key={product.id}>{product.name}</h5>)} */}


        <div  class="table-responsive"   >
            <table  class="table table-bordered table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Sr. NO</th>
                        <th>Name</th>
                        <th>Image</th><th>Category</th><th>price</th><th>stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length==0 && <tr><td colSpan={6} className='text-center'>No product found</td></tr>}
                    {/* {products.map((product,index)=> 
                    <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} height="60px" width={60}/></td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                    </tr>)} */}
                   
                   {/* {products.map((product,index)=> {
                    return  <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} height="60px" width={60}/></td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                    </tr>      }
                    )} */}


                {products.map((product,index)=> {
                    let {id,name,image,price,category,stock} = product
                    return  <tr key={id}>
                        <td>{index+1}</td>
                        <td>{name}</td>
                        <td><img src={image} height="60px" width={60}/></td>
                        <td>{category}</td>
                        <td>${price}</td>
                        <td>{stock}</td>
                    </tr>      }
                    )}
                </tbody>
            </table>
        </div>
        

    </div>
  )
}

export default ListRendering
