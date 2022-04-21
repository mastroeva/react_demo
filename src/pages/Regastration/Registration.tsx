import React from 'react';
import './Registration.css';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Registration = () => {
    return (
        <div className='registration'>
            <div className='registration__title'>
                <h2 className='registration__login'>Login</h2>
                <h2 className='registration__registration'>Registration</h2>
            </div>
            <form>
                <label htmlFor="userName"> User name</label>
                <Input id='userName'></Input>
                <label htmlFor="email"> Email</label>
                <Input id='email'></Input>
                <label htmlFor="password"> Password</label>
                <Input id='Password'></Input>
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <Input id='confirmPassword'></Input>
            </form>
            <Button text = {'Login'}></Button>
            <p>
                If you have account you can <span>login</span>
            </p>
        </div>
    )
}

export default Registration