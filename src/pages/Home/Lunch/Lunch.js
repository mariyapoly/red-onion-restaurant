import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MenuItem from '../MenuItem/MenuItem';

const Lunch = () => {

    const { menus } = useAuth();

    const LunchMenu = menus.slice(12, 18);

    return (
        <>
            <Container>
                <Row>
                    {
                        LunchMenu.map(item => <MenuItem
                            key={item.menuId}
                            item={item}></MenuItem>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Lunch;