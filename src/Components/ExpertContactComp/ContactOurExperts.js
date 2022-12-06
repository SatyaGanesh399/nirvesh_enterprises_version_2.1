import React from "react";
import "./ContactOurExpert.css";
import colors from "../../DefaultColors";
import AppTitle from "../../ReusableComponents/AppTitle";
import mapImage from "./Assests/map.png";
import AppInputWithLabel from "../../ReusableComponents/AppInputWithLabel";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import { TiLocation } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { RiContactsFill } from "react-icons/ri";

function ContactOurExperts() {
  return (
    <div className="expert-container">
      <AppTitle title="Contact Our Experts" />
      <div className="expert-contact">
        <div className="expert-contact-details">
          <div className="contact-details-content">
            <div className="contact-details-icons">
              <TiLocation size={30} color="white" />
            </div>
            <div>
              <p className="contact-subheading">Location</p>
              <p className="contact-item">
                Plot No 5 & 6, Road No 12 F, New Maruthinagar, Kothapet,
                Dilsukhnagar, Hyderabad 500 060, INDIA
              </p>
            </div>
          </div>
          <div className="contact-details-content">
            <div className="contact-details-icons">
              <TfiEmail size={30} color="white" />
            </div>
            <div>
              <p className="contact-subheading">Email</p>
              <p className="contact-item">info@nirveshenterprises.in</p>
            </div>
          </div>
          <div className="contact-details-content">
            <div className="contact-details-icons">
              <RiContactsFill size={30} color="white" />
            </div>
            <div>
              <p className="contact-subheading">Call</p>
              <p className="contact-item">91 8019604914</p>
            </div>
          </div>

          <img src={mapImage} alt="googleImage" className="google-map-image" />
        </div>
        <div className="expert-contact-form">
          <p className="contact-form-heading">
            Submit Your queries or suggestions
          </p>
          <div className="expert-contact-content">
            <AppInputWithLabel labelText="Your Name" width="45%" />
            <AppInputWithLabel labelText="Your Email" width="45%" />
            <AppInputWithLabel labelText="Subject" width="100%" />
            <p>
              <label className="message-label">Message</label>
            </p>
            <textarea className="message-text-area" />
            <div className="form-submit-button">
              <AppButtonRound
                text="Submit"
                bgColor={colors.blue}
                border={colors.blue}
                width="150px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactOurExperts;