/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Menubar.css'
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { AuthContext } from '../../../Provider/AuthProvider';


const Menubar = () => {

const {user,logOut} = useContext(AuthContext);

// LogOut with Email & Password
const handleLogout = () => {
  logOut()
  .then()
  .catch((error) => {console.log(error) })
};

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
          { user ? <NavLink onClick={handleLogout} className={({ isActive }) => isActive ? "text-info text-decoration-underline" : "" }><BsFillPersonBadgeFill className='fs-1 w-75 h-75' title={user?.displayName || 'User'} /></NavLink>    :
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-info text-decoration-underline" : "" }>Login</NavLink>}
            {/* { user && <NavLink to='/register'><BsFillPersonBadgeFill /></NavLink>} */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
};

export default Menubar;