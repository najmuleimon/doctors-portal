import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableService = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/get-service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-32 px-12'>
            <div className="text-center mb-14">
                <h4 className='text-xl font-semibold text-secondary'>Available Services on {format(date, 'PP')}</h4>
                <p>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />
            }
        </div>
    );
};

export default AvailableService;