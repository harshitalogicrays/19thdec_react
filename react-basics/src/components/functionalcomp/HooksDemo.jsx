import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router'

const HooksDemo = () => {
    const navlinkcss = ({isActive})=>({
        color:isActive?"red":"",
        backgroundColor:isActive ?"yellow":""
    })
    const links =  [
        {text:"usestate demo",url:"/fun/hooks"},
        {text:"useeffect demo",url:"/fun/hooks/useeffect"},
        {text:"usecallback demo",url:"/fun/hooks/usecallback"},
        {text:"usememo demo",url:"/fun/hooks/usememo"},
        {text:"useref demo",url:"/fun/hooks/useref"},
        {text:"useimperativehandle demo",url:"/fun/hooks/useih"},
        {text:"usetransition demo",url:"/fun/hooks/usetransition"},
        {text:"usecontext demo",url:"/fun/hooks/usecontext"},
        {text:"custom hook demo",url:"/fun/hooks/custom"},
    ]
  return (
   <Row>
    <Col xs={3}>
    <Nav className="flex-column">
        {links.map((link,index)=><Nav.Link key={index} as={NavLink} to={link.url} style={navlinkcss}end>{link.text}</Nav.Link>)}
    </Nav>
    </Col>
    <Col><Container className='mt-5'><Outlet/></Container></Col>
   </Row>
  )
}

export default HooksDemo
