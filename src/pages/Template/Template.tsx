import React from 'react';
import './Template.css'
import Button from '../../Components/Button';

const Template = () => {
    return (
        <div className='template dark'>
            <p>&#9776;</p>
            <div className='templati__title'>
                <h1>Template title</h1>
                <h3>Template body</h3>
                <Button text = {'button'}></Button>
            </div>
        </div>
    )
}



export default Template