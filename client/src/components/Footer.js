
import {}  from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footerContainer'>
        <dl className='footerWrap'>
            <dt>Create LJH</dt><dd>KEEP LEARNING</dd>
            <dt>PHONE</dt><dd>010-0000-0000</dd>
            <dt>E-mail</dt><dd>wns1395@naver.com</dd>
        </dl>
        <dl className="iconSNS">
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
        </dl>
    </div>
  )
}

export default Footer;