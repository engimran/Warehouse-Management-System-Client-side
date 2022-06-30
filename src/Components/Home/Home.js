import React from 'react';
import Items from './Items/Items';
import Banner from '../../Images/Banner.png';
import OurClient from './OurClient/OurClient';

const Home = () => {
    return (
        <div>
            <div>

                <img className='w-100' height={400} src={Banner} alt="" />
            </div>
            <Items></Items>
            <OurClient></OurClient>
        </div>

    );
};

export default Home;