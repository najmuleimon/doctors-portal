import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from '../Shared/PrimaryBtn';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:px-20" style={{ background: `url(${bg})` }}>
            <div class="hero-content max-w-full flex-col justify-between lg:flex-row-reverse">
                <div className="flex-1">
                    <img src={chair} alt="chair" />
                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn>get started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;