import React from 'react'

import '../../App.css';
import ImageSlider from '../ImageSlider';
import CheckIt from '../CheckIt';


function Product() {
  return (
    <div className='product'>
        <ImageSlider/>
        <CheckIt/>
    </div>
  )
}

export default Product