import * as React from "react";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {motion, useAnimation} from 'framer-motion';

import {HiMail} from 'react-icons/hi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

import "./index.css";

const cardContainer = {
  hidden : {
    scale:0.8,
    opacity : 0
  },
  visible : {
    scale:1,
    opacity : 1,
  transition  : {
    type : 'tween',
    ease : 'easeIn',
    duration : 0.5,
  },
},
}

export default function ProfileCard({ item }) {

  const {inView, ref} = useInView();
  const controls = useAnimation();

  useEffect(()=> {
    if(inView){
      controls.start("visible");
    }

  },[inView, controls]);

  return (
    <motion.div
    ref={ref}
    variants = {cardContainer}
    initial = 'hidden'
    animate = {controls}
    className='profileCardContainer'
    >
      <div className="profile-image">
        <img src={item.url} alt="profile-face" className="cardImage" />
      </div>
      <div className="profile-main-content">
        <p
          className="profile-name"
        >
          {item.profileName}
        </p>
        <p
          className="profile-subheading"
        >
          {item.profileDesign}
        </p>
        <p className="profile-description">
          {item.description}
        </p>
      </div>
        <div className="social-media-group">
          <HiMail className="social-media-icons" />
          <AiFillInstagram className="social-media-icons" />
          <BsTwitter className="social-media-icons" />
        </div>
    </motion.div>
  );
}
