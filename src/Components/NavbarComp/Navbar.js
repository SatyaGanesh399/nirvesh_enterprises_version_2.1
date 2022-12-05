import React from "react";
import "./index.css";

import logo from "./Assets/logo.png";
import BlobComp from '../../ReusableComponents/BlobComp';

function Navbar() {
  return (
    <div>
      <div>
        <nav>
          <div className="navbar">
            <div className="container nav-container">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className='blob-comp'>
                <BlobComp />
                </div>
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Milestones</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
