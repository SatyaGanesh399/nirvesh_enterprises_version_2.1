import React from "react";
import "./index.css";

import logo from'./Assets/logo.png';

function Navbar() {


  return (
    <div>
      <div>
      <nav>
      <div className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src={logo} alt='logo' />
          </div>
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
        </div>
      </div>
    </nav>
      </div>
    </div>
  );
}

export default Navbar;
