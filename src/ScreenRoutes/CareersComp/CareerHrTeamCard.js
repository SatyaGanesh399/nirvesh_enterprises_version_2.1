import React from "react";
import { BsLinkedin } from "react-icons/bs";

function CareerHrTeamCard({ item }) {
  return (
    <div className="career-hr-team-container">
      <img src={item.img} className="career-hr-team-image" />
      <div
      style={{
        width : "100%",
        display : 'flex',
        alignItems : "flex-end",
        justifyContent : "space-between"
        }}
        >
        <div className="career-hr-details">
          <p className="career-hr-name">{item.name}</p>
          <p className="career-hr-base">{item.base}</p>
          <p className="career-hr-position">{item.position}</p>
        </div>
        <BsLinkedin className="career-hr-linkedin" />
      </div>
    </div>
  );
}

export default CareerHrTeamCard;
