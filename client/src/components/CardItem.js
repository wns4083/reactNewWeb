import React from 'react';
import {Link} from 'react-router-dom';
function CardItem(props) {
  return (
    <>
        <div className='cardItem'>
            <Link className="cardItemLink"
            to={props.path}
            >
                <figure 
                className='cardItemWrap'
                data-category={props.label}
                >
                    <img 
                    src={props.src}
                    alt="Travel" 
                    className='cardItemImg'/>
                </figure>
                <div className='cardInfo'>
                    <h5 className='cardText'>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </div>
    </>
  )
}

export default CardItem