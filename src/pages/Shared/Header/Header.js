import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import logo from '../../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import cart from '../../../images/ICON/cart.png'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={HashLink} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink to="/cart"><img src={cart} alt="" /></NavLink>
                            <NavLink to="/login">login</NavLink>
                            <NavLink to="/signup" className="regular-btn">signup</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;