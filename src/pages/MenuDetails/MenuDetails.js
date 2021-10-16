import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { addToDb, getStoredCart } from '../../utilites/fakeDb';
import Cart from '../Cart/Cart';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SignleMenuItem from '../SignleMenuItem/SignleMenuItem';
import './MenuDetails.css'


const MenuDetails = () => {

    const [menu, setMenu] = useState([])
    const [cart, setCart] = useState([]);

    const { id } = useParams();

    const { menus } = useAuth();



    useEffect(() => {
        const singleMenu = menus.find(item => item?.menuId === id);
        setMenu(singleMenu)

        console.log(menus, singleMenu)
    }, [id, menus])


    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);
        addToDb(meal.menuId)
    }

    useEffect(() => {
        if (menus.length) {
            const storedData = getStoredCart();
            console.log(storedData)
            const addedCart = [];
            for (const key in storedData) {
                const addedmenu = menus.find(menu => menu.menuId === key);
                addedmenu.quantity = 1;
                addedCart.push(addedmenu);
            }
            setCart(addedCart)
        }
    }, [menus])

    return (
        <>
            <Header></Header>
            <div className="single-breakfast-container">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <SignleMenuItem
                                handleAddToCart={handleAddToCart}
                                singleMenu={menu}
                            ></SignleMenuItem>
                        </Col>
                        {/* <Col lg={2}>
                            <Cart cart={cart}></Cart>
                        </Col> */}
                    </Row>
                </Container>

            </div>
            <Footer></Footer>
        </>
    );
};

export default MenuDetails;