import { NavLink, Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify';

export default class ClassHeader extends Component {
  links = [
    {text:"first class comp" , url:'/class'},
    {text:"props" , url:'/class/props'},
    {text:"event and state" , url:'/class/es'},
    {text:"form" , url:'/class/form'},
    {text:"ref" , url:'/class/ref'},
    {text:"pure" , url:'/class/pure'},
    {text:"life cycle" , url:'/class/lifecycle'},
    {text:"hoc" , url:'/class/hoc'},
  ]

  render() {
    return (
              <>
               <ToastContainer position="top-left"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="colored"/>
                    
                    <Navbar expand="lg" bg="light" data-bs-theme="light">
                    <Container fluid>
                      <Navbar.Brand as={NavLink} to='/'>Back</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          {this.links.map((link,index)=> <Nav.Link key={index} as={NavLink} to={link.url} end>{link.text}</Nav.Link>)}
                         
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>

                  <Container>
                      <Outlet/>
                  </Container>
              </>
    )
  }
}
