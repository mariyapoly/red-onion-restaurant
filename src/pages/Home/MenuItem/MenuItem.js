import React from 'react';
import { Col } from 'react-bootstrap';
import './MenuItem.css'

const MenuItem = ({ item }) => {

    const { menuThumb, menuTitle, menuDes, price } = item


    return (
        <Col lg={4} className="signle-item">
            <div className="menu-item">
                <div className="menu-thumb">
                    <img src={menuThumb} alt="" />
                </div>
                <h4>{menuTitle}</h4>
                <p>{menuDes}</p>
                <span>${price}</span>
            </div>
        </Col>
    );
};

export default MenuItem;