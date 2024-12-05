import React from 'react';
import Button from '../../components/button/Button';
import './css/sign_in.css';


const SignIn = () => {
    return (
        <div className='sign_in'>
            <div className="wrapper">
                <img src="/Logo.png" alt="" />
                <h2>Enter your login and password</h2>
                <form action="">
                    <Button mode={'full blue uppercase'}>
                        LOGIN
                    </Button>
                </form>
                <a href="№">Sign In</a>
            </div>
        </div>
    );
};

export default SignIn;