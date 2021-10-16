import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MenuItem from '../MenuItem/MenuItem';
import './Breakfast.css';

const Breakfast = () => {

    const { menus } = useAuth();

    const breakFastMenu = menus.slice(0, 6);

    return (
        <Container>
            <Row>
                {
                    breakFastMenu.map(item => <MenuItem
                        key={item.menuId}
                        item={item}></MenuItem>)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;