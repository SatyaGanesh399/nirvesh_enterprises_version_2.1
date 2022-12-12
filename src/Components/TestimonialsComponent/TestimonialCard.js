import React from "react";
import "./Testimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


function TestimonialCard({item}) {
  return (
    <div className="testimonial-card-container">
      <div className="testimonial-container">
        <div className="testimonial-person-details">
          <div className="testimonial-image-background1"></div>
          <div className="testimonial-image-background2"></div>
          <img src={item.image} alt="" className="testimonial-image" />
          <p className="testimonial-person-name">{item.name}</p>
          <p className="testimonial-person-design">{item.designation}</p>
        </div>
        <div className="testimonial-content">
          
          <p className="testimonial-comment"><span><ImQuotesLeft className="quotes quote-left" /></span>{item.statement}</p>
          <p className="testimonial-description">
            {item.comment}
            <span><ImQuotesRight className="quotes quote-right" /></span>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
