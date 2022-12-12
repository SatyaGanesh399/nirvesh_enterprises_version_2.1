import React from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

import personImage from "./Assets/person.jpg";

function TestimonialCard({item}) {
  return (
    <div className="testimonial-card-container">
      <div className="testimonial-container">
        <div className="testimonial-person-details">
          <div className="testimonial-image-background1"></div>
          <div className="testimonial-image-background2"></div>
          <img src={personImage} alt="" className="testimonial-image" />
          <p className="testimonial-person-name">Kalyan Krishna</p>
          <p className="testimonial-person-design">Senior Accountant</p>
        </div>
        <div className="testimonial-content">
          
          <p className="testimonial-comment"><span><ImQuotesLeft className="quotes quote-left" /></span>Best of all</p>
          <p className="testimonial-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <span><ImQuotesRight className="quotes quote-right" /></span>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
