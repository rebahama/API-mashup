import React from 'react'
import {
    NavLink
  } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <NavLink to="/">Navbar</NavLink>
      <Nav className="me-auto">
        <NavLink to="/hello"> Home</NavLink>
  
      </Nav>
    </Container>
  </Navbar>
  

  )
}

export default NavBar