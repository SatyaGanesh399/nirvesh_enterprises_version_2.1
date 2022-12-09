import React, {useEffect} from 'react'
import { Box, Typography } from '@mui/material'

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


import image from './Assets/skills.png'
import colors from '../../DefaultColors'
import './CurrentStatus.css';
import Statusbar from './Statusbar';


  const imageContainer = {
    hidden: {
      x: "-100",
      opacity: 0,
      scale : 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale : 1,
      transition: {
        type : 'tween',
          ease : 'easeOut',
          duration : 1,
      },
    },
  };
  const contentContainer = {
    hidden: {
      x: "100",
      opacity: 0,
      scale:0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale : 1,
      transition: {
        type : 'tween',
        ease : 'easeOut',
        duration : 1,
      },
    },
  };

function CurrentStatus() {

  const controls = useAnimation();
  const {ref, inView} = useInView({
    threshold : 0.2,
  });

  useEffect(() => {

    if (inView) {
      controls.start('visible');
    } else{
      controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <div
    ref={ref}
    className="status-container"
  >
    <motion.div
    variants={imageContainer}
    initial="hidden"
    animate={controls}
    >
      <img src={image} className='status-image' alt="vectorimage"/>
    </motion.div>
    <div>
      <Box
      component={motion.div}
      variants={contentContainer}
      initial="hidden"
      animate={controls}
      gutterBottom
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          color: colors.navy,
          margin: "20px",
          padding : '20px',
        }}
      >
        Our current status...
        <Typography>Acquired three strategic partners for validating our product and iterated prototype designs</Typography>
        <Box sx={{
          marginTop : '30px',
          maxWidth : '400px',
          maxHeight : '400px',
          display : 'flex',
          flexDirection : 'column',
          alignItems : 'center',
          justifyContent : 'space-between',
          gap : '20px',
        }}>
          <Statusbar title="MARKET RESEARCH" progress="100" />
          <Statusbar title="PRODUCT DEVELOPMENT AND VALIDATION" progress="10" />
          <Statusbar title="SOFTWARE DEVELOPMENT AND VALIDATION" progress="25" />
          <Statusbar title="CLINICAL VALIDATION" progress="1" />
        </Box>
      </Box>



      
    </div>
  </div>
  )
}

export default CurrentStatus