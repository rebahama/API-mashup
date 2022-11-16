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
    <Navbar.Brand className={`"ml-auto" ${styles.BrandLogo}`}> API </Navbar.Brand>
    </NavLink>
  
      <Nav className="me-auto">
        <NavLink to="/hello"  className={styles.NavLink} > Home</NavLink>
        <NavLink to="/homee"  className={styles.NavLink} > Another</NavLink>
      </Nav>
    
    
  </Navbar>
  

  )
}

export default NavBar