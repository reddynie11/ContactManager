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
        </Navbar>
    )
}

export default Header;
