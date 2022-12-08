import React, {useState} from "react";
import "./Navbar2.css";
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router-dom";

import logo from "./Assets/logo.png";
import BlobComp from "../../ReusableComponents/BlobComp";

function Navbar2() {

  const navigate = useNavigate();
  const handleLoginRoute =() =>{
    navigate("/login");
  }
  const handleHomeRoute =() =>{
    navigate("/");
  }

  // location hook
  const location = useLocation();


  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div 
        onClick={handleHomeRoute}
        className="navbar-logo">
          <img src={logo} alt="logo" className="nirvesh-logo" />
        </div>
        {location.pathname === '/' && 
        <div className="navabar-blob">
          <BlobComp />
        </div> }
        <div className={location.pathname !=="/" ? "navbar-items-rest":"navbar-items"}>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">About Us</Link>
                </li>
                <li>
                <Link to="/milestones">Our Milestones</Link>
                </li>
                <li>
                <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                <Link to="/team">Our Team</Link>
                </li>
                <li>
                <Link to="/">Contact Us</Link>
                </li>
            </ul>
            <span className="navbar-login-button">
            <Link to="/login">Login</Link>
              </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
