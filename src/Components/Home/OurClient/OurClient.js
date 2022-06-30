import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const OurClient = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center text-primary'>Our Corporate Clients</h1>
            <CardGroup className='mt-3'>
                <Card className=''>
                    <Card.Img variant="top" src='https://i.ibb.co/vjvQwJZ/bashundhara-group-vector-logo.png' />
                </Card>
                <Card>
                    <Card.Img variant="top" src='https://i.ibb.co/F0dSrw7/download.png' />

                </Card>
                <Card>
                    <Card.Img variant="top" src='https://i.ibb.co/YL2sV2w/download-2.jpg' />

                </Card>
            </CardGroup>
        </div>
    );
};

export default OurClient;