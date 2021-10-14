import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Copyright.css'

const Copyright = () => {
    return (
        <div className="copyright">
            <Container>
                <Row>
                    <Col lg={6}>
                        <p>Copyright &copy; 2021 Online food</p>
                    </Col>
                    <Col lg={6}>
                        <ul>
                            <li><NavLink to="/">Privacy Policy.</NavLink></li>
                            <li><NavLink to="/">Terms of Use</NavLink></li>
                            <li><NavLink to="/">Pricing</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Copyright;