import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import botImage from './ChatBotComp/Assets/bot-image.jpg';
import CookieConsent from "react-cookie-consent";
import colors from "../DefaultColors";

import { motion } from "framer-motion";
import ActualHomePage from "./ActualHomePage";
import Navbar2 from "./NavbarComp/Navbar2";
import Footer from "./FooterComp/Footer";
import OurMilestones from "../ScreenRoutes/OurMilestonesComp/OurMilestones";
import Diseaseportfolio from "../ScreenRoutes/DiseasePortfolioComp/Diseaseportfolio";
import ContactOurExperts from "./ExpertContactComp/ContactOurExperts";
import Team2 from "../ScreenRoutes/TeamComp/Team2";
import LoaderPage from "./LoaderPage/LoaderPage";
import ChatBot from './ChatBotComp/ChatBot';
import PrivacyPolicy from '../UsefulLinksComponents/PrivacyPolicyComp/PrivacyPolicy';

const homeContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  const [loader, setLoader] = useState(true);
  const [chatBotOpen, setChatBotOpen] = useState(false);
  const [showBot, setShowBot] = useState(false);

  useEffect(()=>{
      window.addEventListener("scroll", () => {
          if(window.scrollY >100){
            setShowBot(true)
          }else{
            setShowBot(false);
          }
      })
  }, []);

  const handleOpenChatbot = (e) =>{
    e.stopPropagation()
    setChatBotOpen(!chatBotOpen);
  }

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  if (loader) {
    return (
      <div className="loader-page">
        <LoaderPage />
      </div>
    );
  } else {
    return (
      <motion.div variants={homeContainer} initial="hidden" animate="visible">
        <Router>
          <Navbar2 />
          <Outlet />
          <Routes>
            <Route exact path="/" element={<ActualHomePage />} />
            <Route path="milestones" element={<OurMilestones />} />
            <Route path="portfolio" element={<Diseaseportfolio />} />
            <Route path="team" element={<Team2 />} />
            <Route path="contactus" element={<ContactOurExperts />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            {/* <Route path="login" element={<LoginPageVer2 />} />
            <Route path="login" element={<LoginPageVer2 />} />
            <Route path="login" element={<LoginPageVer2 />} /> */}
          </Routes>
        </Router>
          <CookieConsent 
          debug={true}
          style={{
            backgroundColor : colors.primaryWhite,
            color : colors.dark,
            padding : "0px 30px",
          }}
          buttonStyle={{
            backgroundColor : colors.blue,
            color : colors.primaryWhite,
            fontSize : "1.1rem",
          }}>
            By clicking "I Understand", You accept our cookies and <a href="#">privacy policy</a> of our website
          </CookieConsent>;
        <Footer />
        {showBot && <img src={botImage} alt="botImage" className="bot-image-open" onClick={handleOpenChatbot} /> }
        {(chatBotOpen && showBot) && <ChatBot />}
      </motion.div>
    );
  }
}

export default HomePage;
