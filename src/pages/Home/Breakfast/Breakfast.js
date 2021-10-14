import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from '../MenuItem/MenuItem';
import './Breakfast.css';

const Breakfast = () => {

    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch('./Fakedata/breakfast.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
    }, [])




    return (
        <Container>
            <Row>
                {
                    menuItems.map(item => <MenuItem
                        key={item.menuId}
                        item={item}></MenuItem>)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;