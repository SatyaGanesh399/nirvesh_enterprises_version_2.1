import React from 'react'
import './Navbar2.css';

import {RxCrossCircled} from 'react-icons/rx'

function ResponsiveNavbar({closeNavbar}) {

  const handleClick = () =>{
    closeNavbar(false);
  }
  return (
    <div className='responsive-navbar-container'>
      <div className="responsive-navbar-items">
            <ul>
                <li>
                <a >Home</a>
                </li>
                <li>
                <a >About Us</a>
                </li>
                <li>
                <a >Our Milestones</a>
                </li>
                <li>
                <a >Portfolio</a>
                </li>
                <li>
                <a >Our Team</a>
                </li>
                <li>
                <a >Contact Us</a>
                </li>
                <li>
                <a to="/login">Login</a>
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