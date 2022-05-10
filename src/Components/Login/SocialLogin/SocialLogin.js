import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <p className='text-center'>OR</p>
            {errorElement}
            <div className='text-center'>
                <Button onClick={() => signInWithGoogle()} variant="info w-50"> <img style={{ height: 20 }} src={google} alt="" /> Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;