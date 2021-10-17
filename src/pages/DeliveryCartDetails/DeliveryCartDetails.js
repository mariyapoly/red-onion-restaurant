import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const DeliveryCartDetails = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={8}>
                        <DeliveryInfo></DeliveryInfo>
                    </Col>
                    <Col lg={4}>
                        <Cart></Cart>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default DeliveryCartDetails;