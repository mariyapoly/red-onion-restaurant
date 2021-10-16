import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './SingleMenuItem.css'

const SignleMenuItem = ({ singleMenu, handleAddToCart }) => {

    const { menuThumb, menuTitle, price } = singleMenu;

    console.log(singleMenu)

    const [number, setNumber] = useState(1);
    const [mealPrice, setmealPrice] = useState(price);

    const handleDecrise = () => {
        if (number > 1) {
            const decrise = number - 1;
            setNumber(decrise);
            setmealPrice(mealPrice - price);
        }
    }

    const handleIncrise = () => {
        if (number < 100) {
            const incrise = number + 1;
            setNumber(incrise);
            setmealPrice(price * incrise)
        }

    }


    return (
        <Row className="align-items-center">
            <Col lg={6} className="menu-content">
                <h2>{menuTitle}</h2>
                <p className="menu-text">Gay one the what then she. Demese mention promise you justice arived way. Amazing foods are Or and increasign to in especially inquietiude companions acceptase admiration. Outweight it families distance wandered ye</p>
                <div className="d-flex pricing align-items-center">
                    <h4>${mealPrice}</h4>
                    <div className="d-flex button align-items-center">
                        <button onClick={handleDecrise}>-</button>
                        <p id="number">{number}</p>
                        <button onClick={handleIncrise}>+</button>
                    </div>
                </div>
                <button onClick={() => handleAddToCart(singleMenu)} className="regular-btn">Add to Cart</button>
            </Col>
            <Col lg={6} className="menu-thumb">
                <img src={menuThumb} alt="" />
            </Col>
        </Row>
    );
};

export default SignleMenuItem;