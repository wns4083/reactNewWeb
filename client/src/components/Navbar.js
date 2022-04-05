import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import  './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [toggleState, isToggleState] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => isToggleState(!toggleState);
    const closeMobileMenu = () => isToggleState(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
                    PRT+More
                </Link>
                <div className="menuIcon" onClick={handleClick}>
                    { toggleState ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                <ul className={toggleState ? 'navMenuActive' : 'navMenu' }>
                    <li className='navItem'>
                        <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/service' className='navLinks' onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/product' className='navLinks' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/signup' className='navLinksMobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStlye='btnOutline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;