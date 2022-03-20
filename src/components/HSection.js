import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Button} from './Button';
import './HSection.css';

function HSection() {
  return (
    <div className='hContainer'>
        <video src='/videos/video1.mp4' autoPlay loop muted />
        <h1>ADVENTRUE REACT</h1>
        <h2>HI, WE ARE INTO THE REACT!</h2>
        <p> Here we go! </p>
        <div className='hBtns'>
            <Button className='btns' buttonStyle="btnOutline" buttonSize="btnLarge">GET iT</Button>
            <Button className='btns' buttonStyle="btnPrimary" buttonSize="btnLarge">INTO THE REACT
            <FontAwesomeIcon icon={faCircleArrowRight} className="fontAwesomeCA"/>
            </Button>
        </div>
    </div>
  )
}

export default HSection