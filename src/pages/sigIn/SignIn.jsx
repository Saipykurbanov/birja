import React, { useState } from 'react';
import Button from '../../components/button/Button';
import './css/sign_in.css';
import Input from '../../components/input/Input';
import Api from '../../utils/Api';
import Panel from './components/Panel';


const SignIn = () => {

    const [error, setError] = useState(false)
    const [input, setInput] = useState({
        login: undefined,
        password: undefined
    })

    const signIn = async (e) => {
        e.preventDefault()
        let res = await Api.signIn(input)
        
        if(res === 'error') {
            setError('Invalid username or password')
            return false
        }
        
        setError('')
        localStorage.setItem('accessToken', res.token)
        localStorage.setItem('timestamp', Date.now() + 43200000) //+ 12 часов
        localStorage.setItem('user', JSON.stringify(res.user))

        if(res.user.isAdmin) {
            localStorage.setItem('role', 'admin')
        } else {
            localStorage.setItem('role', JSON.stringify(res.user.roles))
        }

        return window.location.reload()
    }

    return (
        <div className='sign_in'>
            <div className="wrapper">
                <div className="logo">Logo</div>
                <h2>Enter your login and password</h2>
                <form action="" onSubmit={signIn}>
                    <Input mode={error ? 'input_error' : ''} label={'LOGIN'} placeholder={'Enter login'} type={'text'} value={input.login} callback={(e) => setInput(prev => ({...prev, login: e.target.value}))}/>
                    <Input mode={error ? 'input_error' : ''} label={'PASSWORD'} placeholder={'Enter password'} type={'password'} value={input.password} callback={(e) => setInput(prev => ({...prev, password: e.target.value}))}/>
                    <Button mode={'full blue uppercase'}>
                        LOGIN
                    </Button>
                </form>
                <a href="№">Sign In</a>
                <div className="error">{error || ''}</div>
            </div>
            <Panel />
        </div>
    );
};

export default SignIn;