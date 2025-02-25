import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/src/assets/logo.webp'
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { BsCart, BsSearch } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router';

const Header = () => {
  const navlinkcss = ({isActive})=>({
        color:isActive?"red":"",
        backgroundColor:isActive ?"yellow":""
    })
  
  return (
   <>
     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><Image src={logo} height={40} width={40} fluid/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={navlinkcss}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={navlinkcss}>About</Nav.Link>
            <NavDropdown title="Functional Components" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link">Class Components</Nav.Link>
          </Nav>
          <Form inline>
            <InputGroup>
            <Form.Control  type="text"  placeholder="Search"  name="search" />
            <Button type="submit"variant='danger'><BsSearch/></Button>
            </InputGroup>
          </Form>
          <Nav>
          <Nav.Link href="#link" style={{position:'relative'}}>
            <BsCart style={{fontSize:'30px'}}/>
            <span class="badge rounded-pill text-bg-danger" 
            style={{position:'absolute',right:"-1px" ,top:"-1px"}}>0</span >     
          </Nav.Link>
            <Nav.Link as={NavLink} to="/register" style={navlinkcss}>Register</Nav.Link>
            <Nav.Link as={NavLink} to="/login" style={navlinkcss}>Login</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
   </>
  )
}

export default Header
