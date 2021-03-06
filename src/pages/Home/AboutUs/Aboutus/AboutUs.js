
import { Container, Row } from 'react-bootstrap';
import About from '../About/About';
import './AboutUs.css';
import useLoadData from '../../../../hooks/useLoadData';

const AboutUs = () => {

    const { about } = useLoadData();

    return (
        <section className="about-area">
            <Container>
                <div className="section-title">
                    <h2>Why you choose us</h2>
                    <p>Barton waited twenty always repair in within we do. An delightted offending curiosity my is daswoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <Row>
                    {
                        about.map(aboutItem => <About
                            key={aboutItem.aboutId}
                            aboutItem={aboutItem}></About>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;