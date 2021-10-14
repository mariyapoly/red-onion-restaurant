import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './About.css';

const About = ({ aboutItem }) => {

    const { aboutThumb, aboutTitle, aboutDes, aboutIcon } = aboutItem

    return (
        <Col lg={4}>
            <div className="single-about">
                <div className="about-thumb">
                    <img src={aboutThumb} alt="" />
                </div>
                <div className="about-body d-flex">
                    <img src={aboutIcon} alt="" />
                    <div className="about-context">
                        <h4>{aboutTitle}</h4>
                        <p>{aboutDes}</p>
                        <NavLink to="/">See more</NavLink>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default About;