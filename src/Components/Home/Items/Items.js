import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/itemsQty')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id='Items' className='Items-title'>
            <h2>Grocery Items</h2>
            <div className='Items-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={items._id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div >
    );
};

export default Items;