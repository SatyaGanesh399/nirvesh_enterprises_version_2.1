import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./ContactOurExpert.css";
import colors from "../../DefaultColors";
import AppTitle from "../../ReusableComponents/AppTitle";
import mapImage from "./Assests/map.png";
import AppInputWithLabel from "../../ReusableComponents/AppInputWithLabel";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import { TiLocation } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { RiContactsFill } from "react-icons/ri";

// Animation

const cardComponent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

function ContactOurExperts() {
  const controls = useAnimation();
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="expert-container" id="CONTACT-US">
      <AppTitle title="Contact Our Experts" />
      <div className="expert-contact">
        <motion.div
          className="expert-contact-details"
          ref={ref}
          variants={cardComponent}
          initial="hidden"
          animate={controls}
        >
          <div className="contact-details-content">
            <div className="contact-details-icons">
              <TiLocation size={30} color="white" />
            </div>
            <div className="address">
              <p className="contact-subheading">Location</p>
              <p className="contact-item ">
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
        </motion.div>
        <motion.div
          className="expert-contact-form"
          variants={cardComponent}
          initial="hidden"
          animate={controls}
        >
          <p className="contact-form-heading">
            Submit Your queries or suggestions
          </p>
          <div className="expert-contact-content">
            <div
            className="first-details">
            <AppInputWithLabel labelText="Your Name" width="100%" />
            <AppInputWithLabel labelText="Your Email" width="100%" />
            </div>
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
        </motion.div>
      </div>
    </div>
  );
}

export default ContactOurExperts;
