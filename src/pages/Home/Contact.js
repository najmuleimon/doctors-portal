import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="py-16 px-5">
            <div className='text-center pb-14 text-white'>
                <h3 className='text-xl font-bold text-secondary'>Contact Us</h3>
                <h2 className='text-4xl font-normal'>Stay connected with us</h2>
            </div>
            <div className="sm:w-full md:w-[450px] mx-auto grid grid-cols-1 justify-items-center gap-5">
                <input type="email" placeholder="Email address" class="input input-bordered w-full" />
                <input type="text" placeholder="Subject" class="input input-bordered w-full" />
                <textarea placeholder="Your message" class="input input-bordered w-full h-32" />
                <PrimaryBtn>Submit</PrimaryBtn>
            </div>
        </div>
    );
};

export default Contact;