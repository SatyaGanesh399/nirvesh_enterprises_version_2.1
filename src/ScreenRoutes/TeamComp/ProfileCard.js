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
    scale:0
  },
  visible : {
    scale : 1,
  transition  : {
    type : 'tween',
    delay : 0.2,
    ease : 'easeIn'
  },
},
}

export default function ProfileCard({ item }) {

  const {inView, ref} = useInView();
  const controls = useAnimation();

  useEffect(()=> {
    if(inView){
      controls.start("visible");
    }else{
      controls.start("hidden");
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
