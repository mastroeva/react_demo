import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import { Theme, useThemeContext } from '../../../context/themeModeContext';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    
    const { theme, onChangeTheme } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const onClickTheme = () =>{
        onChangeTheme && onChangeTheme(Theme.Dark)
        console.log('hello')
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква');
    
    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!res.test(String(e.target.value).toLowerCase())){
            setEmailError('Email не может быть пустым');
        } else{
            setEmailError('')
        }
    }
    
    const dispatch = useDispatch()

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

    const blurHandler = (e: any) => {
        console.log('hi')
        switch(e.target.id) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const onClick = (isPlus: boolean) => {
        const PLUS_ACTION = { type: "counter/incremented" };
        const MINUS_ACTION = { type: "counter/decremented" };
        dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
    };


    return(
        <div className={classNames("container", { ["_dark"]: !isLightTheme })}>

            {/* <button onClick={onClickTheme}>сменить тему</button> */}
            <form className='authorizationForm'>
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
                <Button text = {'Login'}></Button>
                <p className='authorizationForm__fotter'>
                    Forgot your password? <span>Reset password</span>
                </p>
            </form>
            <Button className="btm"  text={"ПЛЮС"} onClick = {() => onClick(false)}/>
            <Button className="btm" text={"МИНУС"}  onClick = {() => onClick(true)} />
        </div>
    )
}

export default LoginForm

