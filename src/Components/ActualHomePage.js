import React from "react";


import AboutUs from './AboutUsComp/AboutUs';
import CarouselHeader from './CarouselComp/CarouselHeader';
import WeAreUnique from './uniqueComp/WeAreUnique';
// import CurrentStatus from './CurrentStatusComp/CurrentStatus';
import Achieved from './AchievedSoFar/Achieved';
import MobileSubscription from './MobileSubsciptionsComp/MobileSubscription';
import Testimonial from "./TestimonialsComponent/Testimonial";
import SupportedBy from './SupportedByComp/SupportedBy';
import OffersAndSubscription from "./MobileSubsciptionsComp/OffersAndSubscription";

function ActualHomePage() {
  return (
    <div>
      <CarouselHeader />
      <AboutUs />
      <WeAreUnique />
       {/* <Achieved /> */}
      <MobileSubscription />
      <OffersAndSubscription />
      <Testimonial />

    </div>
  );
}

export default ActualHomePage;
