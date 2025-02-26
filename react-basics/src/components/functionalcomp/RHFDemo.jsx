import React, { useEffect } from 'react'
import {  Button, Col, Container, FloatingLabel, Form, Image, InputGroup, Row } from 'react-bootstrap'
import Image1 from '/src/assets/a.jpg'
import { BsEnvelopeAtFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

const RHFDemo = ({title}) => {
    const {register,handleSubmit,getValues , formState: { errors } , trigger,setFocus} = useForm()
    let handleForm=()=>{
        alert(JSON.stringify(getValues()))
    }

    useEffect(()=>{
        setFocus('username')
    },[])

  return (
    <Container>
    <h1>{title}</h1><hr/>
    <Row>   <Col xs={4}> <Image src={Image1} fluid/> </Col>
        <Col>
            <Form onSubmit={handleSubmit(handleForm)}>
                <Form.Group className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder='enter username'
                    {...register('username' , {required : "Username is required" , 
                         maxLength : {value:20 , message:"max 20 char"},
                        minLength : {value:5 , message:"min 5 char"}
                    } )} 
                    onBlur={()=>trigger('username')}
                    />
                    {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                    <InputGroup.Text><BsEnvelopeAtFill /></InputGroup.Text>
                    <Form.Control type="text" name="email" placeholder='enter email'
                     {...register('email' , {required : {value:true, message:"email is required"} ,
                        pattern : {value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message:'Invalid Email'}
                      } )}
                     onBlur={()=>trigger('email')}/>
                    </InputGroup>
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}

                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder='enter password'
                       {...register('password' , {required : {value:true, message:"password is required"}
                      })}  onBlur={()=>trigger('password')}/>
                       {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </Form.Group>
                <FloatingLabel className='mb-3'         
                label="Confirm Password">
                    <Form.Control type="password" name="cpassword" placeholder='enter confirm password'  {...register('cpassword' , {required:true , 
                        validate:(cpwd)=>{
                            let {password} = getValues()
                            return password==cpwd  || "password not match"
                        } }
                    )} onBlur={()=>trigger('cpassword')}/>
                </FloatingLabel>
                {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                <div className="d-grid gap-2">
                 <Button variant='danger' type="submit">Submit</Button>
                </div>          
            </Form>
        </Col>
    </Row>
    </Container>
  )
}

export default RHFDemo
