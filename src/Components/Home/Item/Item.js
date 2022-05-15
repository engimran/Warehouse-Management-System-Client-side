import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, img, supplier, price, quantity } = item;

    const navigate = useNavigate();
    const navigateItemDetails = id => {
        navigate(`/item/${id}`);
        console.log(navigateItemDetails)
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <p>Item:{name}</p>
            <p>Supplier:{supplier}</p>
            <p>Quantity:{quantity}</p>
            <p>Price:{price}</p>

            <button className='btn btn-primary' onClick={() => navigateItemDetails(_id)}>Stock Update</button>
        </div>
    );
};

export default Item;