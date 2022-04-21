import React from 'react';
import Card from '../../Components/Card';
import './CardPage.css'


const CardPage = (props: any) => {
    const data = {
        id: Math.random(),
        image: "https://cutewallpaper.org/21/apple-ipad-backgrounds/PAPERS.co-iPad-wallpaper-bj42-apple-iphone-ios13-.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit expedita amet consectetur ducimus molestias suscipit placeat consequuntur accusamus error fugiat distinctio maxime dolorum, repellat sed inventore! Explicabo, eos dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit expedita amet consectetur ducimus molestias suscipit placeat consequuntur accusamus error fugiat distinctio maxime dolorum, repellat sed inventore! Explicabo, eos dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit expedita amet",
        date: "2021-12-12",
        lesson__num: 0,
        title: "What lorem?",
        author: 0
    }
    return (
        <div className='card__page'>
            <p> &#9776; &#128100; Username</p>
            <h1>Content title</h1>
            <Card src = {data.image} title = {data.title} text = {data.text} date = {data.date}></Card>
        </div>
    )
}

export default CardPage