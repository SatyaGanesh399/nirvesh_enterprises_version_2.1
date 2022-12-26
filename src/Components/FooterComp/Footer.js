import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import { BsFillCaretRightFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import iphone from "../../Assets/iphone-synapsil.png";
import qr from "../../Assets/qr-code.png";
import colors from "../../DefaultColors";
const whyUslinks = [
  {
    id: "1",
    link: "newsletter",
    text: "Our Vision",
  },
  {
    id: "2",
    link: "careers",
    text: "Strategy",
  },
  {
    id: "3",
    link: "termsofservice",
    text: "values",
  },
  {
    id: "4",
    link: "privacypolicy",
    text: "Innovation",
  },
];
const listData = [
  {
    id: "1",
    link: "aboutus",
    text: "About Us",
  },
  {
    id: "2",
    link: "milestones",
    text: "Milestones",
  },
  {
    id: "3",
    link: "portfolio",
    text: "Portfolio",
  },
  {
    id: "4",
    link: "ourteam",
    text: "Our Team",
  },
  {
    id: "5",
    link: "contactus",
    text: "Contact Us",
  },
  {
    id: "6",
    link: "login",
    text: "Synpasil Login",
  },
];
const usefulLinks = [
  {
    id: "1",
    link: "newsletter",
    text: "Newsletter",
  },
  {
    id: "2",
    link: "careers",
    text: "Careers",
  },
  {
    id: "3",
    link: "termsofservice",
    text: "Terms of Service",
  },
  {
    id: "4",
    link: "privacypolicy",
    text: "Privacy Policy",
  },
];
const listItems = ({ item }) => {
  return (
    <div className="item-container">
      <p className="footer-item list-item">{item.text}</p>
    </div>
  );
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="playstore-comp">
          <div className="newsletter-comp">
            {/* <div className="useful-links">
    <p className="footer-heading">Subscribe to Newsletter</p>
    <p className="newsletter-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
      doloribus sit porro maxime nihil corrupti in distinctio.
    </p>
    <div className="newsletter-subscription">
      <input
        type="text"
        className="newsletter-input"
        placeholder="Please enter your email id"
      />
      <div className="newsletter-icon">
        <BsFillArrowRightSquareFill size={32} color={colors.navy} />
      </div>
    </div>
  </div> */}
            {/* Playstore- iphone download */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={iphone} alt="iphone" className="iphone-footer" />
              <div>
                <img src={qr} alt="qr-code" className="footer-qr" />
                <p className="playstore-message">
                  Scan the QR to download our Synapsil App
                </p>
                <p className="playstore-message">
                  Recommanded only for patients
                </p>
                <u className="playstore-message click-here">
                  click here to rate our app in the play store
                </u>
              </div>
            </div>
          </div>
        </div>
        <div className="useful-links">
          <p className="footer-heading useful-links-heading">Why Us</p>
          <div>{whyUslinks.map((item) => listItems({ item }))}</div>
        </div>
        <div className="useful-links">
          <p className="footer-heading useful-links-heading">Quick Links</p>
          <div>{listData.map((item) => listItems({ item }))}</div>
        </div>
        <div className="useful-links">
          <p className="footer-heading useful-links-heading">Company</p>
          <div>{usefulLinks.map((item) => listItems({ item }))}</div>
        </div>
        <div className="social-networks">
          <p className="footer-heading follow-us">Follow us on</p>
          <div>
            <BsTwitter
              size={32}
              className="social-media-icon"
            />
            <BsFacebook
              size={32}
              className="social-media-icon"
            />
            <AiFillInstagram
              size={32}
              className="social-media-icon"
            />
            <BsSkype
              size={32}
              className="social-media-icon"
            />
            <BsLinkedin
              size={32}
              className="social-media-icon"
            />
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
