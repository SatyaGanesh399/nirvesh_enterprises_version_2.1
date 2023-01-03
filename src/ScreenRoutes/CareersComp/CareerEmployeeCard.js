import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';

import ReactCardFlip from "react-card-flip";

function CareerEmployeeCard({ item }) {

  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  }
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <div className="career-employee-card" key={item.id}>
        <img src={item.img} className="career-employee-video-image" />
        <p className="career-employee-video-title">{item.title}</p>
        <p className="career-employee-video-sub-title">{item.subTitle}</p>
        <p className="career-employee-comment">"Pleasure working in nirvesh"</p>
        <p className="career-employee-know"
        onClick={handleFlip}
        >
          know more <BsArrowRight className="career-employee-arrow" />
        </p>
      </div>
      <div className="career-employee-card-backside">
        <FaQuoteLeft className="employee-quote-left" />
        <p className="career-employee-words">{item.words}</p>
        <FaQuoteRight className="employee-quote-right" />

        <p className="career-employee-know"
        onClick={handleFlip}
        >
          Go back <BsArrowLeft className="career-employee-arrow" />
        </p>
      </div>
    </ReactCardFlip>
  );
}

export default CareerEmployeeCard;
