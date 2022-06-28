import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [items, setItems] = useState([]);
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
            <h1>Manage Item</h1>
            {
                items.map(item => <div key={item._id}>

                    <h3>{item.name}<button onClick={() => handleDelete(item._id)}>X</button></h3>

                </div>)
            }
        </div>
    );
};

export default ManageItem;