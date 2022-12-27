import React, { useState } from "react";
import colors from "../../DefaultColors";
import "./Navbar2.css";
import { Link, useLocation } from "react-router-dom";

import { RxCrossCircled } from "react-icons/rx";

function ResponsiveNavbar({ closeNavbar }) {
  const handleClick = () => {
    closeNavbar(false);
  };

  const location = useLocation();

  const [expand, setExpand] = useState(false);

  const handleExpand =() =>{
    setExpand(!expand);
  }

  return (
    <div className="responsive-navbar-container">
      <div className="responsive-navbar-items">
        <ul>
          <li className="why-us-responsive"
          onClick={handleExpand}>
            Why us? <span class="material-symbols-outlined"
            style={{position: "relative",
              top: "5px"}}
            >expand_more</span>
            {expand && 
            <ul
            style={{
              transition : "0.4s all ease-in-out"
            }}>
              <li>Our Vision</li>
              <li>Strategy</li>
              <li>Our Values</li>
            </ul> }
          </li>
          <li>
            <Link to="/milestones" onClick={handleClick}>
              Our Milestones
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={handleClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={handleClick}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={handleClick}>
              Careers
            </Link>
          </li>
          <li>
            <a href="/contactus" onClick={handleClick}>
              Contact Us
            </a>
          </li>
          <li>
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
        </ul>
        <div onClick={handleClick}>
          <RxCrossCircled size={36} color="grey" />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
