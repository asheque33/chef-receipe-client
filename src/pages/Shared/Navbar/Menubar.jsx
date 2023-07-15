/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Menubar.css'
import { BsFillPersonBadgeFill } from "react-icons/bs";


const Menubar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to="/" className='d-flex fw-bold'>Chef Palace</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-info text-decoration-underline" : "" }>Home</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "text-info text-decoration-underline" : "" }>Blog</NavLink>
            
          </Nav>
          <Nav>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-info text-decoration-underline" : "" }>Login</NavLink>
            <NavLink to='/register'><BsFillPersonBadgeFill /></NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Menubar;