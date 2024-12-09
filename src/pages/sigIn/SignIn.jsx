import React, { useState } from 'react';
import Button from '../../components/button/Button';
import './css/sign_in.css';
import Input from '../../components/input/Input';
import Api from '../../utils/Api';


const SignIn = () => {

    const [error, setError] = useState(false)

    const signIn = async (e) => {
        e.preventDefault()
        let res = await Api.signIn()

        if(res === 'error') {
            return false
        }

        localStorage.setItem('accessToken')
        window.location.reload()
    }

    return (
        <div className='sign_in'>
            <div className="wrapper">
                <div className="logo">Logo</div>
                <h2>Enter your login and password</h2>
                <form action="" onSubmit={signIn}>
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