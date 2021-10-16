import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './MenuItems.css'

const MenuItems = () => {

    const [menuItems, setMenuItems] = useState(<Breakfast></Breakfast>);


    const handleBreakfastBtn = (e) => {
        setMenuItems(<Breakfast></Breakfast>);
    }

    const handleLunchBtn = (e) => {
        setMenuItems(<Lunch></Lunch>);
    }

    const handleDinnerhBtn = (e) => {
        setMenuItems(<Dinner></Dinner>);
    }


    return (
        <section className="menu-container text-center">
            <ul className="d-flex menu-items justify-content-center">
                <li><button onClick={handleBreakfastBtn}>breakfast</button></li>
                <li><button onClick={handleLunchBtn}>lunch</button></li>
                <li><button onClick={handleDinnerhBtn}>dinner</button></li>
            </ul>
            <div className="menu-items-container">{menuItems}</div>
            <button className="checkout-btn">cheackout your food</button>
        </section>
    );
};

export default MenuItems;