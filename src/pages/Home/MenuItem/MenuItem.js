import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = ({ item }) => {


    const { menuId, menuThumb, menuTitle, menuDes, price } = item;

    const history = useHistory();

    const handleMeuItem = () => {
        history.push(`/menu/${menuId}`)
    }


    return (
        <Col lg={4} className="signle-item">
            <div onClick={handleMeuItem} className="menu-item">
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