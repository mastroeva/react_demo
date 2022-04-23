import React from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './Authorization.css'


const Authorization = () => {
    return (
        <div className='login'>
            <div className='login__title'>
                <h2 className='login__login'>Login</h2>
                <h2 className='login__registration'>Registration</h2>
            </div>
            <form>
                <label htmlFor="email"> Email</label>
                <Input id='email'></Input>
                <label htmlFor="password"> Password</label>
                <Input id='Password'></Input>
            </form>
            <Button text = {'Login'}></Button>
            <p>
                Forgot your password? <span>Reset password</span>
            </p>
        </div>
    )
}

export default Authorization