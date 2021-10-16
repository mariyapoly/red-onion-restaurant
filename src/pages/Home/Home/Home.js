import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/Aboutus/AboutUs';
import Banner from '../Banner/Banner';
import MenuItems from '../MenuItems/MenuItems';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <MenuItems></MenuItems>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;