import React, { useState } from 'react';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';

const RegistrationForm = (props: any) => {
    const {onFooterClick, onRegClick} = props
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userNameDirty, setUserNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDitty] = useState(false);
    const [userNameError, setUserNameError] = useState ('Одна буква должна быть прописной')
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква');
    const [confirmPasswordError, setConfirmPasswordError] = useState('пароли не совпадают')

    const userNameHandler = (e:any) => {
        setUserName(e.target.value)
        const res = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
        if(!res.test(String(e.target.value))){
            setUserNameError('Одна буква должна быть прописной')
        } else {
            setUserNameError('')
        }
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!res.test(String(e.target.value).toLowerCase())){
            setEmailError('Email не может быть пустым');
        } else{
            setEmailError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква');
            if(!e.target.value) {
                setPasswordError('2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква');
            }
        } else {
            setPasswordError('')
        }
    }

    const confirmPasswordHandler = (e: any) => {
        setConfirmPassword(e.target.value)
        if(password !== e.target.value){
            setConfirmPasswordError('пароли не совпадают')
        } else {
            setConfirmPasswordError('')
        }
    }

    const blurHandler = (e: any) => {
        console.log('hi')
        switch(e.target.id) {
            case 'userName':
                setUserNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'confirmPassword':
                setConfirmPasswordDitty(true)
                break
        }
    }
    return (
        <form className='authorizationForm'>
            <div>
                <label>
                    User name
                    <Input onChange={userNameHandler} value={userName} onBlur={blurHandler} className='authorizationForm__input' id='userName'></Input>
                </label>
                {(userNameDirty && userNameError) && 
                    <p className='authorizationForm__text'>{userNameError}</p>}
            </div>
            <div>
                <label> 
                    Email
                    <Input onChange={emailHandler} value={email} onBlur={blurHandler} className='authorizationForm__input' id='email'></Input>
                </label>
                {(emailDirty && emailError) && 
                    <p className='authorizationForm__text'>{emailError}</p>}
            </div>
            <div>
                <label> 
                    Password
                    <Input onChange={passwordHandler} value={password} onBlur={blurHandler} className='authorizationForm__input' id='password'></Input>
                </label>
                {(passwordDirty && passwordError) && 
                <p className='authorizationForm__text'>{passwordError}</p>}
            </div>
            <div>
                <label> 
                    Confirm Password
                    <Input onChange={confirmPasswordHandler} value={confirmPassword} onBlur={blurHandler} className='authorizationForm__input' id='confirmPassword'></Input>
                </label>
                {(confirmPasswordDirty && confirmPasswordError) &&
                <p className='authorizationForm__text'>{confirmPasswordError}</p>}
            </div>
            <Button 
                text={'Registration'} 
                onClick={(event: any) => {
                    event.preventDefault()
                    console.log(event)
                    onRegClick()
                }
                }
            ></Button>
            <p className='authorizationForm__fotter'>
                If you have account you can <span onClick={() => onFooterClick('login')}>login</span>
            </p>
    </form>
    )
}

export default RegistrationForm