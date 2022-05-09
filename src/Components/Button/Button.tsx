import React from 'react';
import './Button.css'

const Button = (props: any) => {
    return <button onClick={props.onClick} type = {props.type} className = {props.className}>{props.text}</button> 
}


export default Button