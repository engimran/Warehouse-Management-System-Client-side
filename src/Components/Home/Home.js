import React from 'react';
import Items from './Items/Items';
import Banner from '../../Images/Banner.png';

const Home = () => {
    return (
        <div>
            <div>

                <img className='w-100' height={400} src={Banner} alt="" />
            </div>


            <Items></Items>
        </div>

    );
};

export default Home;