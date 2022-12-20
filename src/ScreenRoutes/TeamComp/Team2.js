import React from "react";
import "./index2.css";
import "./index.css";

import AppTitle from "../../ReusableComponents/AppTitle";

// import ProfileCard from "./ProfileCard";

import { TeamData, FoundersData, AdvisoryBoardData } from "./TeamMembersData";
import SecondaryCard from "./SecondaryCard";
import PrimaryCard from "./PrimaryCard";
import SupportedBy from '../../Components/SupportedByComp/SupportedBy';

function Team2() {
  return (
    <div style={{ marginTop: "120px" }}>
      <AppTitle title="Meet The Team" />
      <div className="team-mini-container1">
        <p className="teams-subtitle">
          We are a team with good combination of experience and skills across
          Information technology, Neuroscience, Biomedical sciences and Trauma /
          Stroke Research.
          We are a team with good combination of experience and skills across
          Information technology, Neuroscience, Biomedical sciences and Trauma /
          Stroke Research.
        </p>

      </div>
      <div className="team-mini-container1">
        {/* <p className="teams-mini-heading">Founders</p> */}
        <AppTitle title="Founders" />
        <div className="founder-cards">
          {FoundersData.map((item) => (
            <PrimaryCard item={item} />
          ))}
        </div>
      </div>
      <div className="team-mini-container2">
        {/* <p className="teams-mini-heading">Our Team</p> */}
        <AppTitle title="Team" />

        <div className="secondary-cards">
          {TeamData.map((item) => (
            <SecondaryCard item={item} />
          ))}
        </div>
      </div>
      <div className="team-mini-container2">
        {/* <p className="teams-mini-heading">Advisory Board</p> */}
        <AppTitle title="Advisors" />

        <div className="secondary-cards">
          {AdvisoryBoardData.map((item) => (
            <SecondaryCard item={item} />
          ))}
        </div>
      </div>
      <div >
        <AppTitle title="Our Collaborators" />
        <SupportedBy />
      </div>
    </div>
  );
}

export default Team2;
