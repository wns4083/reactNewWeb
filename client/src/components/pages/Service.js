import React, {useEffect} from 'react'
import '../../App.css'

import ImageSlider from '../ImageSlider';
import ServiceSection from '../ServiceSection';


function Service() {
  useEffect(()=>{
    const getTitle = document.getElementsByTagName("title")[0];
    getTitle.innerHTML = "Service"
  },[])
  return (
    <div className='service'>
        <ImageSlider/>
        <ServiceSection/>
        
    </div>
  )
}

export default Service;