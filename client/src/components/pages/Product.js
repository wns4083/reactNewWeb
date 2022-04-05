import React, {useEffect} from 'react'

import '../../App.css';
import ImageSlider from '../ImageSlider';
import CheckIt from '../CheckIt';


function Product() {
  useEffect(()=>{
    const getTitle = document.getElementsByTagName("title")[0];
    getTitle.innerHTML = "Product"
  },[])
  return (
    <div className='product'>
        <ImageSlider/>
        <CheckIt/>
    </div>
  )
}

export default Product