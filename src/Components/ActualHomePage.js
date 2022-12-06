import React from "react";


import AboutUs from './AboutUsComp/AboutUs';
import CarouselHeader from './CarouselComp/CarouselHeader';
import WeAreUnique from './uniqueComp/WeAreUnique';
import CurrentStatus from './CurrentStatusComp/CurrentStatus';
import Achieved from './AchievedSoFar/Achieved';
import MobileSubscription from './MobileSubsciptionsComp/MobileSubscription';
import ContactOurExperts from './ExpertContactComp/ContactOurExperts';

function ActualHomePage() {
  return (
    <div>
      <CarouselHeader />
      <AboutUs />
      <WeAreUnique />
      <CurrentStatus />
      <Achieved />
      <MobileSubscription />
      <ContactOurExperts />
    </div>
  );
}

export default ActualHomePage;
