import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <About />
            <Appointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;