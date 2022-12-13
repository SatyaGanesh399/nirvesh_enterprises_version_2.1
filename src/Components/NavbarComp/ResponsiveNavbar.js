import React, { useEffect } from 'react'
import './Navbar2.css';
import { Link, useLocation } from "react-router-dom";

import {RxCrossCircled} from 'react-icons/rx'

function ResponsiveNavbar({closeNavbar}) {

  const handleClick = () =>{
    closeNavbar(false);
  }

  const location = useLocation();

  

  return (
    <div className='responsive-navbar-container'>
      <div className="responsive-navbar-items">
            <ul>
                <li >
                <Link to="/"
                onClick={handleClick} >Home</Link>
                </li>
                <li>
                <a href="#ABOUT-US"
                onClick={handleClick} >About Us</a>
                </li>
                <li>
                <Link to='/milestones' 
                onClick={handleClick}>Our Milestones</Link>
                </li>
                <li>
                <Link to='/portfolio'
                onClick={handleClick} >Portfolio</Link>
                </li>
                <li>
                <Link to='/team'
                onClick={handleClick} >Our Team</Link>
                </li>
                <li>
                <a href="#CONTACT-US" 
                onClick={handleClick}>Contact Us</a>
                </li>
                <li>
                <Link to="/login" 
                onClick={handleClick}>Login</Link>
                </li>
            </ul>
            <div onClick={handleClick}>
        <RxCrossCircled size={36} color='grey' />
            </div>
        </div>
    </div>
  )
}

export default ResponsiveNavbar