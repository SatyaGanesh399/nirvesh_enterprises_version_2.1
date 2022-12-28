import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  withRouter
} from "react-router-dom";
import {RxCross2} from 'react-icons/rx';
import botImage from './ChatBotComp/Assets/eyes-open.png';
import botImageClose from './ChatBotComp/Assets/eyes-close.png';
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
import LoginPageVer2 from '../ScreenRoutes/LoginPageComp/LoginPageVer2';
import LoaderPage from "./LoaderPage/LoaderPage";
import ChatBot from './ChatBotComp/ChatBot';
import PrivacyPolicy from '../UsefulLinksComponents/PrivacyPolicyComp/PrivacyPolicy';
import DiseaseDetailsPage from "../ScreenRoutes/DiseasePortfolioComp/DiseaseDetailsPage";
import ScrollToTopPage from "./ScrollToTopPage";
import Careers from "../ScreenRoutes/CareersComp/Careers";
import JobSearchPage from "../ScreenRoutes/JobSearchPage/JobSearchPage";

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
  const [botMessage, setBotMessage] = useState(true);

  // if(chatBotOpen){
  //   document.querySelector("body").style.overflow = "hidden"
  // }else{
  //   document.querySelector("body").style.overflow = "auto"
  // }

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

  const handleChatMessage = () =>{
    setBotMessage(false);
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
          <ScrollToTopPage />
          <Navbar2 />
          <Outlet />
          <Routes>
            <Route exact path="/" element={<ActualHomePage />} />
            <Route path="milestones" element={<OurMilestones />} />
            <Route path="portfolio" element={<Diseaseportfolio />} />
            <Route path="detailspage/:id" element={<DiseaseDetailsPage />} />
            <Route path="team" element={<Team2 />} />
            <Route path="careers" element={<Careers />} />
            <Route path="jobsearch" element={<JobSearchPage />} />
            <Route path="login" element={<LoginPageVer2 />} />
            <Route path="contactus" element={<ContactOurExperts />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />

          </Routes>
        </Router>
          <CookieConsent 
          debug={true}
          style={{
            backgroundColor : colors.primaryWhite,
            color : colors.dark,
            padding : "0px 60px 0px 20px",
          }}
          buttonStyle={{
            backgroundColor : colors.blue,
            color : colors.primaryWhite,
            fontSize : "1.1rem",
          }}>
            By clicking "I Understand", You accept our cookies and <a href="#">privacy policy</a> of our website
          </CookieConsent>
        <Footer />
        {showBot && <img src={botImage} alt="botImage" className="bot-image-open" onClick={handleOpenChatbot} /> }
        {(chatBotOpen && showBot) && <ChatBot />}
        {showBot && <img src={botImageClose} alt="botImage" className="bot-image-close" onClick={handleOpenChatbot} /> }
        {(chatBotOpen && showBot) && <ChatBot />}
        {(showBot && botMessage && !chatBotOpen) &&
        <div className="chat-bot-message">
          <RxCross2 className="chat-message-close"
          onClick={handleChatMessage} />
          <p>Hello welcome,<br/>
            I'm Veda a chatbot,
            Let me know if you need any help!!
          </p>
        </div>
  }
      </motion.div>
    );
  }
}

export default HomePage;
