import React, { useEffect } from "react";
import {
  Typography,
} from "@mui/material";
import "./index.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import colors from "../../DefaultColors";
import UniqueCards from "../../ReusableComponents/UniqueCards";

const data = [
  {
    id: "01",
    title: "Integrated intelligent sensors",
    descrption:
      "Has EEG, PPG and fNIRS sensors which work in tandem to sense brain waves, bio-potentials and cerebral blood flow representing current brain health of patients in affordable price than standard brain health diagnosis",
  },
  {
    id: "02",
      title: "Improving patient-doctor relationship",
    descrption:
      "Follow-up routine consultations doctors and other healthcare professional Generate actionable RWE for precision medicine and innovative study.",
    
  },
  {
    id: "03",
    title: "Real-time data driven personalized cognitive management",
    descrption:
      "Seamless integration of hardware hearables and software platform",
    
  },
];
const contentContainer = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function Unique() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="unique-container">
      <motion.div
        variants={contentContainer}
        initial="hidden"
        animate={controls}
        className="unique-content-container"
      >
        <Typography
          gutterBottom
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: colors.dark,
            margin: "20px",
            padding: "20px",
            textAlign : 'center',
          }}
        >
          We are unique...
        </Typography>
        <div className="unique-main-cards">

            <UniqueCards
              number={data[0].id}
              title={data[0].title}
              description={data[0].descrption}
            />

            <UniqueCards
              number={data[1].id}
              title={data[1].title}
              description={data[1].descrption}
              special={true}
              />
            <UniqueCards
              number={data[2].id}
              title={data[2].title}
              description={data[2].descrption}
            />

        </div>
      </motion.div>
    </div>
  );
}

export default Unique;
