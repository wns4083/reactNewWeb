import React from 'react'


function ServiceItem(props) {
  
  return (
    <div className='serviceItems'>
      <div className='serviceWrap'>
        <a className='serviceLink'
         href={props.href}
         
         target="_blank"
         rel="noopener"
        >
        <img
         src={props.src}
         alt={props.alt}
         className={props.name}
        />
        </a>
      </div>
      <div className='serviceInfo'>
        <a className='serviceLink'
           href={props.href}
           target="_blank"
           rel="noopener"
        >
        <h2 className='serviceSubject'>
          {props.text}
        </h2>
        <p className='serviceDetails'>
          {props.details}
        </p>
        </a>
      </div>
    </div>
    
  )
}

export default ServiceItem