import React, { useEffect } from 'react'
import { Container, Row,Table, Col, Card } from 'react-bootstrap'
import { useCart } from './CartContext'
import { BsTrash } from 'react-icons/bs'

const Cart = () => {
    const {cartItems,increase,decrease,removefromcart,emptycart,calculatetotal,total} = useCart()
    useEffect(()=>{
        calculatetotal()
    },[cartItems])
  return (
   <Container className='mt-5 shadow p-4 bg-light'>
    <h1>My Cart</h1><hr/>
        <Row>
            <Col xs={8}>
                <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th><th>Total Price</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length==0 && <tr><td colspan="6" className='text-center'>No Item in Cart</td></tr>}
                    {cartItems.map((item,index)=>
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name} &emsp; <img src={item.image} width={50} height={50}/></td>
                            <td>&#8377; {item.price}</td>
                            <td>
                                <div className="input-group">
                                <button  type="button" className='btn btn-primary' onClick={()=>decrease(item)}>-</button>
                                <input type="text" value={item.qty} readOnly  style={{width:'40px',textAlign:'center'}}/>
                                <button type="button" className='btn btn-primary' onClick={()=>increase(item)}>+</button>
                                </div>     
                            </td>
                            <td>&#8377; {item.price * item.qty}</td>
                            <td><button className='btn btn-danger' onClick={()=>removefromcart(item)}><BsTrash/></button></td>
                            </tr>)}
                </tbody>
                </Table>
            </Col>
            <Col>
                    <Card>
                        <Card.Body>
                            <h5 className='mb-2'>Sub Total:<span className='float-end'>&#8377; {total}</span></h5>
                            <h5 className='mb-2'>Shipping:<span className='float-end'>&#8377; 
                                {(total>0 && total <=400) ? <>50</> :<> 0</>}</span></h5><hr/>
                            <h4 className='mb-2'>Total Price:<span className='float-end'>&#8377;  
                                {(total>0 && total <=400) ? <>{total+50}</> :<> {total}</>}</span></h4><hr/>
                            <Row>
                                <Col><div className="d-grid gap-2">
                                    <button className='btn btn-danger btn-lg' onClick={()=>emptycart()}>Empty Cart</button></div></Col>
                                <Col><div className="d-grid gap-2"><button className='btn btn-info btn-lg'>Checkout</button></div></Col>
                            </Row>
                            
                            
                        </Card.Body>    
                    </Card>    
            </Col>
        </Row>
   </Container>
  )
}

export default Cart
