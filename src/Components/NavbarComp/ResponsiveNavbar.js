import React from 'react'
import './Navbar2.css';
import { Link } from "react-router-dom";

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
                <Link to="/" >Home</Link>
                </li>
                <li>
                <Link to="/" >About Us</Link>
                </li>
                <li>
                <Link to='/milestones' >Our Milestones</Link>
                </li>
                <li>
                <Link to='/portoflio' >Portfolio</Link>
                </li>
                <li>
                <Link to='/team' >Our Team</Link>
                </li>
                <li>
                <Link to="/" >Contact Us</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
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