import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Appointment = () => {
    return (
        <div className="hero px-5 xl:px-32" style={{ background: `url(${appointment})` }}>
            <div className="hero-content max-w-full flex justify-center items-center">
                <div className="flex-1 hidden lg:block -mt-[100px]">
                    <img src={doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-xl font-bold text-secondary'>Appointment</h3>
                    <h2 className='text-4xl text-white font-medium'>Make an appointment Today</h2>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Appointment;