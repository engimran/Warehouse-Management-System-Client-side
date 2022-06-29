import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'


const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/itemsQty?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyItems(data));
        }
    }, [user])
    return (
        <div>
            <h1 className='Items-title'>MY ITEMS</h1>
            <div className='Items-container'>
                {
                    myItems.map(myItem => <div key={myItem._id} className='item'>
                        <img src={myItem.img} alt="" />
                        <h5>ITEM: {myItem.name}</h5>
                        <p>Price: {myItem.price}</p>
                        <p>Quantity: {myItem.quantity}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;