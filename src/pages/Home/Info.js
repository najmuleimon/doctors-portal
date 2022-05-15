import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
            <InfoCard img={clock} bg="bg-gradient-to-r from-secondary to-primary" title="Opening Hours" content="Lorem Ipsum is simply dummy text of the pri" />
            <InfoCard img={marker} bg="bg-accent" title="Visit our location" content="Brooklyn, NY 10036, United States" />
            <InfoCard img={phone} bg="bg-gradient-to-r from-secondary to-primary" title="Contact us now" content="+000 123 456789" />
        </div>
    );
};

export default Info;