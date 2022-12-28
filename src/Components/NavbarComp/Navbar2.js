import React, { useState, useEffect } from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";

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
  let mainLocation = location.pathname;

  const handleClick = () => {
    onClickMenu();
  };

  // Responsive navbar

  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  // sticky Navbar

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);



  return (
    <div>
      {!navbar && !isSticky && (
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
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" 
                    style={{
                      color : mainLocation === '/' ? colors.white : colors.navy,
                      transition : "0.4s all ease-in-out"
                    }}
                    >
                      Why us?{" "}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        Our Vision
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Strategy
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Our Values
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>

              <span className="navbar-login-button"
              onClick={handleLoginRoute}
              >
                <Link to="/login">Login</Link>
              </span>
            </div>

            {/* Responsive code */}
            <div className="navbar-menu-icon" onClick={handleNavbar}>
              <BiMenu
                size={35}
                color={location.pathname !== "/" ? colors.dark : colors.white}
              />
            </div>
          </div>
        </div>
      )}

      {/* Sticky navbar Code */}

      {!navbar && isSticky && (
        <div className="navbar-container-isSticky">
          <div className="navbar-content navbar-content-isSticky">
            <div
              onClick={handleHomeRoute}
              className="navbar-logo navbar-logo-isSticky"
            >
              <img src={logo} alt="logo" className="nirvesh-logo" />
            </div>
            <div
              className={
                location.pathname !== "/"
                  ? "navbar-items-rest"
                  : "navbar-items navbar-items-isSticky"
              }
            >
              <ul>
                <li>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" 
                    style={{
                      color : colors.navy,
                      transition : "0.4s all ease-in-out"
                    }}
                    >
                      Why us?{" "}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{colors : colors.nav}}>
                      <Dropdown.Item href="#/action-1">
                        Our Vision
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Strategy
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Our Values
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>

              <span className="navbar-login-button"
              onClick={handleLoginRoute}>
                <Link to="/login">Login</Link>
              </span>
            </div>

            {/* Responsive code */}
            <div className="navbar-menu-icon" onClick={handleNavbar}>
              <BiMenu size={35} color={colors.dark} />
            </div>
          </div>
        </div>
      )}

      {navbar && (
        <div className="responsive-navbar-container">
          <ResponsiveNavbar closeNavbar={setNavbar} />
        </div>
      )}
    </div>
  );
}

export default Navbar2;
