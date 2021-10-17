import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadData from '../../../hooks/useLoadData';
import MenuItem from '../MenuItem/MenuItem';
import './Breakfast.css';

const Breakfast = () => {

    const { menus } = useLoadData();

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