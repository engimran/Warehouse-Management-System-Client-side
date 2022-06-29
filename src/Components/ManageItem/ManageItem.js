import React, { useEffect, useState } from 'react';
import './../MyItems/MyItems.css'

const ManageItem = () => {
    const [items, setItems] = useState([]);
    console.log(items)
    useEffect(() => {
        fetch('http://localhost:5000/itemsQty')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        console.log(handleDelete)
        if (proceed) {
            const url = `http://localhost:5000/itemsQty/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                });

        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='Items-title'>Manage Item</h1>
            <div className='Items-container'>
                {
                    items.map(item => <div key={item._id} className='item'  >
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <button className='btn btn-primary' onClick={() => handleDelete(item._id)}>Delete</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;