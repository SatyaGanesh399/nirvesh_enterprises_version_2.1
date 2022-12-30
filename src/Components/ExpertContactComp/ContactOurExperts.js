import React, { useEffect } from "react";
import AppHeader from "../../ReusableComponents/AppHeader";
import contactUs from './Assests/contact-us.jpg';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./ContactOurExpert.css";
import colors from "../../DefaultColors";
import AppTitle from "../../ReusableComponents/AppTitle";
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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ContactOurExperts() {
  const controls = useAnimation();
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  // Alertbox

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="expert-container" id="CONTACT-US">
      <AppHeader 
      image={contactUs}
      title="Contact Us"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non accumsan odio, ut volutpat eros. Nullam porta"
      />
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
              <p className="contact-item">info@nirveshenterprises.com</p>
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

          <iframe
            class="gmap_iframe"
            className="google-map-image"
            src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=nirvesh enterprises&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
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
            <div className="first-details">
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
                afterClick={handleClickOpen}
              />
            </div>
          </div>
        </motion.div>
      </div>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Submission Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your Message was submitted successfully.
            Thank you!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
      
    </div>
  );
}

export default ContactOurExperts;
