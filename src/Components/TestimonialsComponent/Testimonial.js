import React, { useRef, useState } from "react";

import './Testimonial.css';
import AppTitle from "../../ReusableComponents/AppTitle";
import TestimonialCard from "./TestimonialCard";
import comments from "./TestimonialData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import AppSubHeading from "../../ReusableComponents/AppSubHeading";

function Testimonial() {
  return (
    <div className="test-container">
      <div>
        <AppTitle title="Testimonials" />
        <div className="testimonial-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {comments.map((item) => 
            <SwiperSlide>
              <TestimonialCard item={item} />
            </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Testimonial;
