import React from 'react';
import { isPropertySignature } from 'typescript';
import './Card.css'

const Card = (props: any) => {
    return (
    <div className='card'>
        <div className='card__img'>
            <img src={props.src} alt="image"/>
        </div>
        <h1 className='card__title'>{props.title}</h1>
        <h2 className='card__text'>{props.text}</h2>
        <p className='card__date'>{props.date}</p>
    </div>
    )
}

export default Card





