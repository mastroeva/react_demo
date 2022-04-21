import React from 'react';
import './Button.css'

const Button = (props: any) => {
    return <button type = {props.type} className = {props.className}/> 
}


export default Button