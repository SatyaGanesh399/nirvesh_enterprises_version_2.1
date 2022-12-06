import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {motion, useAnimation} from 'framer-motion';

import "./index.css";
import colors from "../../DefaultColors";

const cardContainer = {
  hidden : {
    opacity : 0,
    y : 100
  },
  visible : {
    opacity : 1,
    y : 0,
  transition  : {
    type : 'spring',
    stiffness : 60,
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
    <Box
    ref={ref}
    component = {motion.div}
    variants = {cardContainer}
    initial = 'hidden'
    animate = {controls}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "400px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 22px 40px 4px",
        padding: "20px",
        margin: "20px",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      className='profileCardContainer'
    >
      <Box sx={{ position: "relative", top: "-70px" }}>
        <img src={item.url} className="cardImage" />
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "-40px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            color: colors.navy,
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {item.profileName}
        </Typography>
        <Typography
          sx={{ fontSize: "16px", color: colors.blue, marginBottom: "10px" }}
        >
          {item.profileDesign}
        </Typography>
        <Typography sx={{ fontSize: "16px", color: colors.dark }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
}
