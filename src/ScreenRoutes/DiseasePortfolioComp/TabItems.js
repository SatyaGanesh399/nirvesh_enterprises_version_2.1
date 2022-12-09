import * as React from "react";
import "./DiseasePortfolio.css";
import ReactCardFlip from "react-card-flip";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";

import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import colors from "../../DefaultColors";
import { hover } from "@testing-library/user-event/dist/hover";

const panelContainer = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 1,
      stiffness: 40,
      ease: "easeIn",
    },
  },
};

export default function TabItems({ item }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Card flip Logic here

  const [flipped, setFlipped] = React.useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

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

  return (
    // Card front goes here
    <div>
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical" key={item.id}>
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
          <u className="click-here-link">Click here for more details</u>
          <AppButtonRound
            text="Go back"
            bgColor={colors.blue}
            border={colors.blue}
            width="150px"
            afterClick={handleClick}
          />
        </div>
      </ReactCardFlip>
    </div>
  );
}
