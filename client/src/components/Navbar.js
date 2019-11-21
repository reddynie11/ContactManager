import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'


const Header = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <i className="fas fa-id-card mr-2" ></i>
            {' Contact Manager'}
            </Navbar.Brand>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>

        </Navbar>
    )
}

export default Header;
