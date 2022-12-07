import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./index.css";
import colors from "../../DefaultColors";
import CardItem from "./CardItem";
import AppTitle from "../../ReusableComponents/AppTitle";

const cardData = [
  {
    id: "1",
    icon: "golf_course",
    subHeading: "Profitable Business Model",
    description:
      "We partner with leading rehabilitation centers to increase the standard of care with sole goal of improving patient outcomes",
  },
  {
    id: "2",
    icon: "description",
    subHeading: "Realistic, Scalable Marketing Strategy",
    description:
      "Our Marketing Strategies is through direct sales, channel partners, Licensing of our technology",
  },
  {
    id: "3",
    icon: "speed",
    subHeading: "Hire and Train a Solid Team",
    description: "Our strength is Our team",
  },
  {
    id: "4",
    icon: "layers",
    subHeading: "Gain Authority in Your Industry",
    description:
      "We would like to Capture indian market by 2025. US and Europe markets by 2027",
  },
];

const cardVarient = {
  hidden: {
    scale : 0
  },
  visible: {
    scale : 1,

    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};

function OurMilestones() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      className="milestones-container"
    >
      <AppTitle title="Our Milestones" />
      <p
        className="milestones-subtitle"
      >
        Our company milestones are the significant moments of accomplishment
        that mark our companys' development and growth.
      </p>
      <motion.div
        ref={ref}
        variants={cardVarient}
        initial="hidden"
        animate={controls}
        className="cardComponent"
      >
        {cardData.map((item) => (
          <CardItem item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default OurMilestones;
