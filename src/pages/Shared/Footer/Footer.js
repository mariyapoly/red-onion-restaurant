import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../../images/logo.png';
import Copyright from '../Copyright/Copyright';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="footer-logo">
                            <NavLink to="/">
                                <img src={footerLogo} alt="" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to="/">About online food</NavLink></li>
                                <li><NavLink to="/">Read our blog</NavLink></li>
                                <li><NavLink to="/">Sign up to deliver</NavLink></li>
                                <li><NavLink to="/">Add your restaurent</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to="/">Get help</NavLink></li>
                                <li><NavLink to="/">Read FAQs</NavLink></li>
                                <li><NavLink to="/">View all cities</NavLink></li>
                                <li><NavLink to="/">Restaurants near me</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Copyright></Copyright>
        </footer>
    );
};

export default Footer;