import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/itemsQty`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Item</h2>
            <form className='flex-column d-flex' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Item Image url' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;