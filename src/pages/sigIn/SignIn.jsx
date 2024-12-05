import React from 'react';
import Button from '../../components/button/Button';
import './css/sign_in.css';
import Input from '../../components/input/Input';


const SignIn = () => {
    return (
        <div className='sign_in'>
            <div className="wrapper">
                <div className="logo">Logo</div>
                <h2>Enter your login and password</h2>
                <form action="">
                    <Input label={'LOGIN'} placeholder={'Enter login'} type={'text'}/>
                    <Input label={'PASSWORD'} placeholder={'Enter password'} type={'password'}/>
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