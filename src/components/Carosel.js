import React from 'react'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import './ImageSlider.css';
import '../../node_modules/slick-carousel/slick.jquery.json';
function Carosel(props) {
    let setting = {
        dot: true,
        Infinity: true,
        speed: 500,
        shildesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease-in-out"
    }
  return (
    <Slider {...setting}>
        
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src='/images/img-1.jpg'
                         alt='slideOne'
                         className='sliderImg'
                    />
                </div>
                <ul className='social-icons'>
                    <li><Link to='service'><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-youtube"></i></Link></li>
                </ul>
                <div className='details'>
                    <p><span className='imgTitle'>Subject</span>thisis</p>
                </div>
            </div>
        
        
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src='/images/img-2.jpg'
                         alt='slideTwo'
                         className='sliderImg'
                    />
                </div>
                <ul className='social-icons'>
                    <li><Link to='service'><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-youtube"></i></Link></li>
                </ul>
                <div className='details'>
                    <p><span className='imgTitle'>Subject</span>thisis</p>
                </div>
            </div>
        
        
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src='/images/img-3.jpg'
                         alt='slideThree'
                         className='sliderImg'
                    />
                </div>
                <ul className='social-icons'>
                    <li><Link to='service'><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-youtube"></i></Link></li>
                </ul>
                <div className='details'>
                    <p><span className='imgTitle'>Subject</span>thisis</p>
                </div>
            </div>
        
        
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src='/images/img-4.jpg'
                         alt='slideFour'
                         className='sliderImg'
                    />
                </div>
                <ul className='social-icons'>
                    <li><Link to='service'><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-youtube"></i></Link></li>
                </ul>
                <div className='details'>
                    <p><span className='imgTitle'>Subject</span>thisis</p>
                </div>
            </div>
        
        
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src='/images/img-5.jpg'
                             alt='slideFive'
                             className='sliderImg'
                    />
                </div>
                <ul className='social-icons'>
                    <li><Link to='service'><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-instagram"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to='service'><i className="fa fa-youtube"></i></Link></li>
                </ul>
                <div className='details'>
                    <p><span className='imgTitle'>Subject</span>thisis</p>
                </div>
            </div>
        
    </Slider>
  )
}

export default Carosel;