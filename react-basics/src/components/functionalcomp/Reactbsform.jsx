import React from 'react'
import {  Button, Col, FloatingLabel, Form, Image, InputGroup, Row } from 'react-bootstrap'
import Image1 from '/src/assets/a.jpg'
import { BsEnvelopeAtFill } from 'react-icons/bs'

const Reactbsform = ({title}) => {
  return (
    <>
        <h1>{title}</h1><hr/>
        <Row>
            <Col xs={4}>
                <Image src={Image1} fluid/>
            </Col>
            <Col>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder='enter username'/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                        <InputGroup.Text><BsEnvelopeAtFill /></InputGroup.Text>
                        <Form.Control type="text" name="email" placeholder='enter email'/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder='enter password'/>
                    </Form.Group>
                    <FloatingLabel className='mb-3'         
                    label="Confirm Password">
                        <Form.Control type="password" name="cpassword" placeholder='enter confirm password'/>
                    </FloatingLabel>
                    <div className="d-grid gap-2">
                     <Button variant='danger'>Submit</Button>
                    </div>
                   
                </Form>
            </Col>
        </Row>
    </>
  )
}

export default Reactbsform
