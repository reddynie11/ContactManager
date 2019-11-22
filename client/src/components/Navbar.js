import React,{Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import AuthContext from '../context/auth/AuthContext';
import ContactContext from '../context/contact/ContactContext';



const Header = ()=>{
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext);

    const {isAuth, logout, user} = authContext
    const {clearContacts} = contactContext

    useEffect(()=>{
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])

    const onLogout=()=>{
        logout();
        clearContacts();
    }
    const authLinks = (
        <Fragment>
            <Nav.Link href="/add">Add Contact</Nav.Link>
            <Nav.Link href="#" onClick={onLogout} > <i className="fas fa-sign-out-alt "> <span>Logout</span> </i> </Nav.Link>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Fragment>
    )

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <i className="fas fa-id-card mr-2" ></i>
            {' Contact Manager'}
            </Navbar.Brand>
            <Nav className=" ml-auto mr-5">
                { isAuth ? authLinks : guestLinks }
            </Nav>
            
        </Navbar>
    )
}

export default Header;
