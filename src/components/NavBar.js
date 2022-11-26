import React from 'react'
import styles from '../styles/NavBar.module.css';
import {
    NavLink
  } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    
    <Navbar bg="primary" className={`${styles.NavBar}`}  variant="dark" expand="lg">
    
    <NavLink to="/"  className={styles.NavLink}>
    <Navbar.Brand className={`"ml-auto" ${styles.BrandLogo}`}> Music&Movie </Navbar.Brand>
    </NavLink>

    <Container>
      <Nav className="me-auto">
        <NavLink to="/"  className={styles.NavLink} > Home</NavLink>
        <NavLink to="/movies"  className={styles.NavLink} > Movies </NavLink>
        <NavLink to="/music"  className={styles.NavLink} > Music </NavLink>
      </Nav>
      </Container>
  </Navbar>

  )
}

export default NavBar