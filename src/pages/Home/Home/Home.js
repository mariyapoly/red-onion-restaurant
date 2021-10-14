import React from 'react';
import AboutUs from '../AboutUs/Aboutus/AboutUs';
import Banner from '../Banner/Banner';
import MenuItems from '../MenuItems/MenuItems';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MenuItems></MenuItems>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;