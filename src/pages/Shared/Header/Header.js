import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import logo from '../../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../../images/ICON/cart.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const [cart] = useAuth();

    const totalQuantity = cart.reduce((previous, food) => previous + food.quantity, 0)

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
                            <NavLink className="cart" to="/cart"><img src={cartIcon} alt="" />
                                <span>{totalQuantity}</span>
                            </NavLink>
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