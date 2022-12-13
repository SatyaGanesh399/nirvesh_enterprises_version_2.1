import React from "react";
import "./Footer.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";

import iphone from "../../Assets/iphone-synapsil.png";
import qr from "../../Assets/qr-code.png";
import colors from "../../DefaultColors";

const listData = [
  "About us",
  "Milestones",
  "Terms of service",
  "privacy policy",
];
const listItems = ({ item }) => {
  return (
    <div className="item-container">
      <BsFillCaretRightFill size={12} color={colors.dark} />
      <p className="footer-item list-item">{item}</p>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="useful-links">
          <p className="footer-heading">Useful Links</p>
          <div>{listData.map((item) => listItems({ item }))}</div>
        </div>
        <div className="social-networks">
          <p className="footer-heading">Our Social Networks</p>
          <div>
            <BsTwitter
              size={30}
              color={colors.navy}
              className="social-media-icon"
            />
            <BsFacebook
              size={30}
              color={colors.navy}
              className="social-media-icon"
            />
            <AiFillInstagram
              size={30}
              color={colors.navy}
              className="social-media-icon"
            />
            <BsSkype
              size={30}
              color={colors.navy}
              className="social-media-icon"
            />
            <BsLinkedin
              size={30}
              color={colors.navy}
              className="social-media-icon"
            />
          </div>
          <div className="newsletter-comp">
            <div className="footer-heading">
              <p>Subscribe to Newsletter</p>
              <div className="newsletter-subscription">
                <input
                  type="text"
                  className="newsletter-input"
                  placeholder="Please enter your email id"
                />
                <BiRightArrowCircle size={30} color={colors.dark} />
              </div>
            </div>
          </div>
        </div>
        <div className="playstore-comp">
          <img src={iphone} alt="iphone" className="iphone-footer" />
          <div>
            <img src={qr} alt="qr-code" className="footer-qr" />
            <p className="playstore-message">
              Scan the QR to download our Synapsil App
            </p>
            <p className="playstore-message">Recommanded only for patients</p>
            <u className="playstore-message click-here">
              click here to rate our app in the play store
            </u>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-content">
          © Copyright Nirvesh Enterprises. All Rights Reserved 2021
        </p>
      </div>
    </div>
  );
}

export default Footer;
