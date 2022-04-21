import React from 'react';
import './RegConfirm.css'
import Button from '../../Components/Button';

const RegConfirm = () => {
    return (
        <div className='reg__confirm'>
            <h2>Refistration Confirm</h2>
            <p>
                Please active your accont with the activation link in the email             
                <span> test@gmail.com</span> Please, check your email
            </p>
            <Button text = {'Home'}></Button>
        </div>
    )
}


export default RegConfirm