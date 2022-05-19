import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen lg:px-20" style={{ background: `url(${bg})` }}>
            <div className="hero-content max-w-full flex-col justify-between md:flex-row">

                <div className='flex-1'>
                    <DayPicker mode="single" selected={date} onSelect={setDate} />
                </div>
                <div className="flex-1">
                    <img src={chair} alt="chair" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;