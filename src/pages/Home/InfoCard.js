import React from 'react';

const InfoCard = ({ img, bg, title, content }) => {
    return (
        <div className={`card flex-col lg:card-side shadow-xl p-6 ${bg}`}>
            <figure><img src={img} alt="icon" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-white'>{content}</p>
            </div>
        </div>
    );
};

export default InfoCard;