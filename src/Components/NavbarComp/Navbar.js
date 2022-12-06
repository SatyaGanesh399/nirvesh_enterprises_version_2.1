import React, { useState } from "react";
import "./index.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import logo from "./Assets/logo.png";
import BlobComp from '../../ReusableComponents/BlobComp';
import colors from '../../DefaultColors';
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import AppButton from "../../ReusableComponents/AppButton";

function Navbar() {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () =>{
    setChecked(!checked);
  }
  console.log(checked);
  const navigate = useNavigate();
  const handleLoginRoute =() =>{
    navigate("/login");
  }
  const handleHomeRoute =() =>{
    navigate("/");
  }


  return (
    <div>
      <div>
        <nav>
          <div className="navbar">
            <div className="container nav-container">
              <div className="logo"
              onClick={handleHomeRoute}
              >
                <img src={logo} alt="logo" />
              </div>
              <div className='blob-comp'>
                <BlobComp />
                </div>
                <div className="navbar-login-button">
                <AppButtonRound 
                text="Login" 
                bgColor={colors.orange}
                border={colors.orange}
                textColor = {colors.primaryWhite}
                width= '100px'
                afterClick={handleLoginRoute}/>
                </div>
              <input className="checkbox" type="checkbox" name="" id="" checked={checked} onChange={handleCheckBox} />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <li
                onClick={handleCheckBox}>
                  <Link to="/">Home</Link>
                </li>
                <li
                onClick={handleCheckBox}>
                  <Link to="/">About Us</Link>
                </li>
                <li
                onClick={handleCheckBox}>
                  <Link to="/milestones">Milestones</Link>
                </li>
                <li
                onClick={handleCheckBox}>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li
                onClick={handleCheckBox}>
                  <Link to="/team">Team</Link>
                </li>
                <li
                onClick={handleCheckBox}>
                  <Link to="/">Contact Us</Link>
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
