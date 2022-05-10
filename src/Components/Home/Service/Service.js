import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateServiceDetails = id => {
        navigate(`/service/${id}`);
        console.log(navigateServiceDetails)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button className='btn btn-primary' onClick={() => navigateServiceDetails(id)}>Booking Now</button>
        </div>
    );
};

export default Service;