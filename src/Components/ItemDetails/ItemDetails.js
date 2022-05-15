import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const navigated = useNavigate()
    const [itemsQty, setItemsQty] = useState([]);
    const [item, setItem] = useState([]);

    const handleDecrement = () => {
        const url = `https://guarded-retreat-88426.herokuapp.com/itemsQty/${itemId}?oldQuantity=${itemsQty.quantity}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload()

            });

        navigated(`/item/${itemId}`);
    }
    useEffect(() => {
        const url = `https://guarded-retreat-88426.herokuapp.com/itemsQty/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItemsQty(data));

    }, [])

    console.log()

    return (
        <div className='text-center fw-bold'>
            <h2 >Item Name:{itemsQty.name}</h2>
            <p>Price: <input type="text" value={itemsQty.price} /></p>
            <p>Quantity: <input type="text" value={itemsQty.quantity} /></p>

            <div className='text-center'>
                <button onClick={handleDecrement} className='btn btn-info'>Stock Out</button>

            </div>
        </div>
    );
};

export default ItemDetails;