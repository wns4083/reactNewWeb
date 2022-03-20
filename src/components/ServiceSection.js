import React from 'react'

import ServiceItem from './ServiceItem'
import '../App.css'
import './ServiceSection.css'

function ServiceSection() {
  return (
    <>
        <div className='serviceContainer'>
            <ul className='services'>
                <ServiceItem
                href='https://google.com'
                src='/images/img-1.jpg'
                alt='Vanila JS'
                name='JSinfo'
                text='javascript'
                details='Tranditional CODE'
                />
                <ServiceItem
                href='https://google.com'
                src='/images/img-2.jpg'
                alt='ES6'
                name='JS Plus'
                text='Evolution JS'
                details='Tranditional CODE'
                />
                <ServiceItem
                href='https://google.com'
                src='/images/img-3.jpg'
                alt='React'
                name='react'
                text='for using Web, we Learn React'
                details='How to Create easy?'
                />
            </ul>
        </div>
    </>
  )
}

export default ServiceSection