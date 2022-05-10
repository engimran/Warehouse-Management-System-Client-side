import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center fw-bold'>Fill up your information</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-info'>Booking Confirm</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;