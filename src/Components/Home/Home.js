import React from 'react';
import Services from './Services/Services';
import Banner from '../../Images/Banner.png';

const Home = () => {
    return (
        <div>
            <div>

                <img className='w-100' height={400} src={Banner} alt="" />
            </div>


            <Services></Services>
        </div>

    );
};

export default Home;