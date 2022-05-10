import React from 'react';
import Services from './Services/Services';
import Banner from '../../Images/image (1).jpg'

const Home = () => {
    return (
        <div>
            <div>

                <img className='w-100' src={Banner} alt="" />
            </div>


            <Services></Services>
        </div>

    );
};

export default Home;