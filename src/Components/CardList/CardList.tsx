import React from "react";
import Card from "../Card/Card";
import  "./CardList.css";


const data = [
    {
    id: Math.random(),
    image: "http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    date: "2021-12-12",
    lesson__num: 0,
    title: "what lorem?",
    author: 0
    },

    {
    id: Math.random(),
    image: "http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    date: "2021-12-12",
    lesson__num: 0,
    title: "what lorem?",
    author: 0
    },

    {
    id: Math.random(),
    image: "http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    date: "2021-12-12",
    lesson__num: 0,
    title: "what lorem?",
    author: 0
    },
    {
    id: Math.random(),
    image: "http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    date: "2021-12-12",
    lesson__num: 0,
    title: "what lorem?",
    author: 0
    },
    {
    id: Math.random(),
    image: "http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    date: "2021-12-12",
    lesson__num: 0,
    title: "what lorem?",
    author: 0
    },

]
const CardList  = () => {
    return (
        <div className="cardList"> 
            {data.map(item => <Card key={item.id} src={item.image} title={item.title} text={item.text} date={item.date}></Card>)}
        </div>
    )
}

export default CardList
/* <Card src={"http://www.kartinkioboi.ru/_ph/19/903586119.jpg?1650314729"} title={'what lorem?'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '} date={'11/11/2001'}></Card> */