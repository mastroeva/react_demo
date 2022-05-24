import React, { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './Authorization.css'
import HeaderForm from './HeaderForm';
import RegConfirm from '../RegConfirm';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Authorization = () => {
    const [tabName, setTabName] = useState('login')
    const [isConfirm, setConfirm] = useState(false)

    const onHeaderClick = (name: string) => {
        setTabName(name)
    }

    const onFooterClick = (name: string) => {
        setTabName(name)
    }

    const onRegClick = () => {
        setConfirm(true)
    }
    
    return (
        isConfirm ? (
            <RegConfirm></RegConfirm>
        ) : 
        <div className='authorizationWrapper'>
            <HeaderForm onHeaderClick={onHeaderClick} tabName={tabName}></HeaderForm>  
            {tabName === 'login' ? <LoginForm></LoginForm> : <RegistrationForm onFooterClick={onFooterClick} onRegClick={onRegClick}></RegistrationForm>}
        </div>
        
    )
}

export default Authorization