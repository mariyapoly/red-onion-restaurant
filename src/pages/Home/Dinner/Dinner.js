import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useLoadData from '../../../hooks/useLoadData';
import MenuItem from '../MenuItem/MenuItem';
import './Dinner.css'

const Dinner = () => {
    const { menus } = useLoadData();

    const dinnerMenu = menus.slice(6, 12);

    return (
        <>
            <Container>
                <Row>
                    {
                        dinnerMenu.map(item => <MenuItem
                            key={item.menuId}
                            item={item}>
                        </MenuItem>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Dinner;