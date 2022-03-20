import React from 'react'


function ProductItem(props) {
  return (
    <div className='productItem'>
        <img src={props.src}
             alt={props.alt}
             className={props.name}
        />
    </div>
  )
}

export default ProductItem