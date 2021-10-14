import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-part">
            <Container>
                <Row>
                    <Col lg={12} className="text-center">
                        <h1>Best food waiting for your belly</h1>
                        <form>
                            <input type="text" placeholder="Search food items" />
                            <button className="regular-btn">Search</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;