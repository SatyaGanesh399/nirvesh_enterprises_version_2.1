import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import ActualHomePage from "./ActualHomePage";
import Navbar from './NavbarComp/Navbar';
import Footer from './FooterComp/Footer';
import OurMilestones from '../ScreenRoutes/OurMilestonesComp/OurMilestones';
import Diseaseportfolio from '../ScreenRoutes/DiseasePortfolioComp/Diseaseportfolio';
import Team from '../ScreenRoutes/TeamComp/Team';
import LoginPage from "../ScreenRoutes/LoginPageComp/LoginPage";

function HomePage() {
  return (
    <div>
      <Router>
      <Navbar />
      <Outlet />
      <Routes>
      <Route exact path="/" element={<ActualHomePage />}/>
            <Route  path="milestones" element={<OurMilestones />} />
            <Route  path="portfolio" element={<Diseaseportfolio />} />
            <Route  path="team" element={<Team />} />
            <Route  path="login" element={<LoginPage />} />
      </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default HomePage;
