import React from 'react'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';
function ImageSlider(props) {
    let setting = {
        dots: true,
        Infinity: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 30000,
        shildesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    }
  return (
    <Slider {...setting}>
        <div className='imageWrap'>
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
        </div>
        <div className='imageWrap'>
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
        </div>
        <div className='imageWrap'>
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
        </div>
        <div className='imageWrap'>
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
        </div>
        <div className='imageWrap'>
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
        </div>
    </Slider>
  )
}

export default ImageSlider