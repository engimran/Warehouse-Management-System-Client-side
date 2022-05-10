import React from 'react';
import photo from '../../Images/imran.jpg'

const About = () => {
    return (
        <div className='text-center'>
            <img style={{ height: 200 }} src={photo} alt="" />
            <h1>Md. Imran Hossen</h1>
            <p>I want to be a full-stack developer</p>
        </div>
    );
};

export default About;