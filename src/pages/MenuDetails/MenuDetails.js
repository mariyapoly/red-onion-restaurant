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

    const [menus, setMenus] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mariyapoly/red-onion-restaurant/main/public/Fakedata/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenus(data)
            })
    }, [])


    const detail = menus.find(food => food.menuId === id);

    const [cart, setCart] = useAuth();

    useEffect(() => {
        if (menus.length) {
            const storedData = getStoredCart();
            const addedCart = [];
            for (const key in storedData) {
                const addedmenu = menus.find(menu => menu.menuId === key);
                if (addedmenu) {
                    const quantity = storedData[key];
                    addedmenu.quantity = quantity;
                    addedCart.push(addedmenu);

                }
            }
            setCart(addedCart)
        }
    }, [menus])

    const handleAddToCart = (meal) => {
        console.log(meal)
        const exits = cart.find(pd => pd?.menuId === meal?.menuId);
        let newCart = []
        if (exits) {
            const rest = cart.filter(pd => pd?.menuId !== meal?.menuId);
            exits.quantity++
            newCart = [...rest, exits]
        } else {
            meal.quantity = 1;
            newCart = [...cart, meal]
        }
        console.log(exits)
        setCart(newCart);
        addToDb(meal?.menuId)
    }

    console.log(cart)




    return (
        <>
            <Header></Header>
            <div className="single-breakfast-container">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={10}>
                            <SignleMenuItem
                                singleMenu={detail}
                                handleAddToCart={handleAddToCart}
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