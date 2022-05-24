import React from 'react';
import './Input.css'


const Input = (props: any) => {
    return <input onChange={props.onChange} value={props.value} onBlur={props.onBlur} id={props.id} type = {props.type} className = {props.className}/>
}

export default Input