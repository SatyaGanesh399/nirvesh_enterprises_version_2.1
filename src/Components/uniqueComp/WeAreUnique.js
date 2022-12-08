import React, { useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import "./index.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image from "./Assets/why-us.png";
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
    title: "Real-time data driven personalized cognitive management",
    descrption:
      "Seamless integration of hardware hearables and software platform",
  },
  {
    id: "03",
    title: "Improving patient-doctor relationship",
    descrption:
      "Follow-up routine consultations doctors and other healthcare professional Generate actionable RWE for precision medicine and innovative study.",
  },
];

const imageContainer = {
  hidden: {
    x: "100",
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const contentContainer = {
  hidden: {
    x: "-100",
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
    },
  },
};

// function Accordin({ id, title, descrption }) {

//   return (
//     <Box sx={{ width: "80%"}}>
//       <Accordion sx={{ margin: "20px" }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: colors.light,
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 marginRight: "20px",
//               }}
//             >
//               {id}
//             </Typography>
//             <Typography>{title}</Typography>
//           </Box>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>{descrption}</Typography>
//         </AccordionDetails>
//       </Accordion>
//     </Box>
//   );
// }

function Unique() {
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
            color: colors.navy,
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
      {/* <motion.div variants={imageContainer} initial="hidden" animate={controls}>
        <img src={image} alt="uniqueImage" width="100%" height="100%" />
      </motion.div> */}
    </div>
  );
}

export default Unique;
