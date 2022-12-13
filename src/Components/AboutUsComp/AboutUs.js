import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import colors from "../../DefaultColors";
import AppTitle from "../../ReusableComponents/AppTitle";

import "./index.css";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import AppSubHeading from "../../ReusableComponents/AppSubHeading";
import FeatureCard from "./FeatureCard";

const provide = [
  {
    id: "1",
    bgColor: colors.blue,
    icon: "favorite",
    text: "End-to-End cost effective Post-operative Brain health Management system",
  },
  {
    id: "2",
    bgColor: colors.blue,
    icon: "cognition",
    text: "Targeted cognitive status classification algorithm > 80% accuracy",
  },
  {
    id: "3",
    bgColor: colors.blue,
    icon: "health_and_safety",
    text: "Beneficial Interventions (Audio-Visual Training) to improve well-being",
  },
  {
    id: "4",
    bgColor: colors.blue,
    icon: "monitoring",
    text: "Multimodal data collection and continuous analysis",
  },
];

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

function AboutUs() {
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
    <div className="about-us-container" id="ABOUT-US">
      <AppTitle title="About Us" />
      <AppSubHeading
        text="We are a team of 45 persons' years with good combination of
            experience and skills across Neuroscience, Biomedical sciences and
            Neuropsychiatry"
      />
      <div className="about-us">
        <motion.div
          className="main-content"
          ref={ref}
          variants={cardComponent}
          initial="hidden"
          animate={controls}
        >
          <div>
            <div className="we-provide">
            
              <div className="right-content">
                <p className="we-provide-subheading">What we Provide</p>
                <div className="features-cards">
                  {provide.map((item) => (
                    <FeatureCard item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="final-content">

            <p className="about-us-final-content">
                  With the strong need for evidence-based diagnostic technology
                  as a complementary to existing technology likely to include a
                  multimodal approach and consolidates it in a holistc report
                  with a wide range of compliance rates of assessmennt tools
                  with better accuracy. Our mission is to redefine neurohealth
                  and serve as unique solution for all rehabilitation centers /
                  organizations looking to take control of their patient's
                  health.
                </p>
                <AppButtonRound
                  text="Learn More"
                  bgColor={colors.navy}
                  border={colors.navy}
                  />
                  </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
