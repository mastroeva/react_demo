import React from 'react';
import Button from '../Button';
import Input from '../Input';
import './Page.css'


const Page = () => {
    return (
        <div className='page'>
            <div className='page__title'>
                <h2 className='page__login'>Login</h2>
                <h2 className='page__registration'>Registration</h2>
            </div>
            <form>
                {/* <label for ="email">Email</label> */}
                <Input id='email'></Input>
                <label>Password <Input></Input></label>
            </form>
            <Button></Button>
        </div>
    )
}

export default Page