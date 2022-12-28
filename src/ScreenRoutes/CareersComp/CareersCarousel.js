import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CareerHrTeamCard from "./CareerHrTeamCard";
import { hrEmployeeDetails, employeeVideoData } from "./CareerData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Careers.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import CareerEmployeeCard from "./CareerEmployeeCard";

export default function CareersCarousel({hr, employee, slides}) {
  return (

      <Swiper
        slidesPerView={slides}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        { hr && hrEmployeeDetails.map(item => 
            <SwiperSlide>{<CareerHrTeamCard item={item} />}</SwiperSlide>
        )}
        { employee && employeeVideoData.map(item => 
            <SwiperSlide>{<CareerEmployeeCard item={item} />}</SwiperSlide>
        )}
        
      </Swiper>
  );
}
