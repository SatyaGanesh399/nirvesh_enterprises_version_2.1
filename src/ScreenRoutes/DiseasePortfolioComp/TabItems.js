import * as React from "react";
import "./DiseasePortfolio.css";
import ReactCardFlip from "react-card-flip";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import { useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import colors from "../../DefaultColors";

const panelContainer = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export default function TabItems({ item, clickHandler, clickFlipBack}) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Card flip Logic here

  const handleClick = () => {
    clickHandler(item.id);
  };
  const handleFlipback = () =>{
    clickFlipBack()
  }

  // Card hover logic here

  const [hovered, setHovered] = React.useState(false);

  const handleHover = () => {
    setTimeout(() => {
      setHovered(!hovered);
    }, 500);
  };
  const handleRelease = () => {
    setHovered(!hovered);
  };

  // Dynamic routing
  const navigation = useNavigate();
  const handleRoute =() =>{
    navigation(`/detailspage/${item.id}`);
  }

  return (
    // Card front goes here
    <motion.div
      variants={panelContainer}
      ref={ref}
      initial="hidden"
      animate={controls}
      key={item.id}
      className="portfolio-card-container"
    >
      <ReactCardFlip isFlipped={item.flipped} flipDirection="vertical">
        <div className="disease-container">
          <img
            src={item.url}
            alt="imageForReference"
            className="disease-image"
            onMouseEnter={handleHover}
            onMouseLeave={handleRelease}
            onMouse
          />
          <div className="disease-titles">
            <p className="disease-type">{item.type}</p>
            <p className="disease-name">{item.disease}</p>
          </div>
          <AppButtonRound
            text="Know more"
            bgColor={colors.blue}
            border={colors.blue}
            width="150px"
            afterClick={handleClick}
          />
        </div>
        <div className="disease-container">
          <p className="disease-name-back">{item.disease}</p>
          <p className="disease-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <u className="click-here-link"
          onClick={handleRoute}>Click here for more details</u>
          <AppButtonRound
            text="Go back"
            bgColor={colors.blue}
            border={colors.blue}
            width="150px"
            afterClick={handleFlipback}
          />
        </div>
      </ReactCardFlip>
    </motion.div>
  );
}
