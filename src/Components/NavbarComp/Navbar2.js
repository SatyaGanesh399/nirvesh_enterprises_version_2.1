import React, { useState } from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import logo from "./Assets/logo.png";
import BlobComp from "../../ReusableComponents/BlobComp";
import colors from "../../DefaultColors";
import ResponsiveNavbar from "./ResponsiveNavbar";

function Navbar2({ onClickMenu }) {
  const navigate = useNavigate();
  const handleLoginRoute = () => {
    navigate("/login");
  };
  const handleHomeRoute = () => {
    navigate("/");
  };

  // location hook
  const location = useLocation();

  const handleClick = () => {
    onClickMenu();
  };

  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      {!navbar &&
      <div className="navbar-container">
        <div className="navbar-content">
          <div onClick={handleHomeRoute} className="navbar-logo">
            <img src={logo} alt="logo" className="nirvesh-logo" />
          </div>
          {location.pathname === "/" && (
            <div className="navabar-blob">
              <BlobComp />
            </div>
          )}
          <div
            className={
              location.pathname !== "/" ? "navbar-items-rest" : "navbar-items"
            }
          >
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

          {/* Responsive code */}
          <div className="navbar-menu-icon" onClick={handleNavbar}>
            <BiMenu size={35} color={colors.navy} />
          </div>
        </div>
      </div>
      }
      {navbar && 
      <div className="responsive-navbar-container">
        <ResponsiveNavbar closeNavbar = {setNavbar} />
      </div>
      }
    </div>
  );
}

export default Navbar2;
