import React from 'react'
import './Card.css';
import CardItem from './CardItem';

function CardSection() {
  return (
    <div className='cardSection'>
        <h2>Check out</h2>
        <div className='cardContainer'>
            <ul className='cardItems'>
                <CardItem
                src='images/img-9.jpg'
                text="Explore deep inside JS"
                label="Adventure"
                path='/service'
                />
                <CardItem
                src='images/img-8.jpg'
                text="Hellow React!"
                label="EXPLORER"
                path='/service'
                />
                <CardItem
                src='images/img-7.jpg'
                text="You will learn TYPESCRIPT"
                label="TYPE_SCRIPT"
                path='/service'
                />
                <CardItem
                src='images/img-6.jpg'
                text="WHAT IT IS SASS"
                label="UPGRADE CSS"
                path='/service'
                />
            </ul>
        </div>
    </div>
  )
}

export default CardSection