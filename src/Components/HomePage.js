import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { motion } from "framer-motion";
import ActualHomePage from "./ActualHomePage";
import Navbar2 from "./NavbarComp/Navbar2";
import Footer from "./FooterComp/Footer";
import OurMilestones from "../ScreenRoutes/OurMilestonesComp/OurMilestones";
import Diseaseportfolio from "../ScreenRoutes/DiseasePortfolioComp/Diseaseportfolio";
import ContactOurExperts from './ExpertContactComp/ContactOurExperts';
import Team from "../ScreenRoutes/TeamComp/Team";
import LoginPageVer2 from "../ScreenRoutes/LoginPageComp/LoginPageVer2";
import LoaderPage from "./LoaderPage/LoaderPage";

const pathContainer = {
  hidden : {
    opacity : 1,
    pathLength : 0,
    scale: 0.6,
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    scale: 1,
    transition : {
      type : "tween",
      duration : 2,
      delay : 0.5,
      ease : "easeOut",
    }
  }
}
const homeContainer = {
  hidden : {
    opacity : 1,
  },
  visible : {
    opacity : 1,
    transition : {
      type : "tween",
      delay : 0.2,
      duration : 1,
      ease : "easeOut",
    }
  }
}

let strokeWidth = 70;

function HomePage() {
  const [loader, setLoader] = useState(false);

  // setTimeout(()=>{
  //   setLoader(false);
  // }, 4000);

  if (loader) {
    return (
      <div className="loader-page">
        <LoaderPage />
      </div>
    );
  } else {
    return (
      <motion.div
      variants={homeContainer}
      initial="hidden"
      animate="visible">
        <Router>
          <Navbar2 />
          <Outlet />
          <Routes>
            <Route exact path="/" element={<ActualHomePage />} />
            <Route path="milestones" element={<OurMilestones />} />
            <Route path="portfolio" element={<Diseaseportfolio />} />
            <Route path="team" element={<Team />} />
            <Route path="contactus" element={<ContactOurExperts />} />
            <Route path="login" element={<LoginPageVer2 />} />
          </Routes>
        </Router>

        <Footer />
      </motion.div>
    );
  }
}

export default HomePage;
