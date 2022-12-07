import React from "react";

import AppTitle from '../../ReusableComponents/AppTitle';

import ProfileCard from "./ProfileCard";
import image1 from "./Assests/team-1.jpg";
import image2 from "./Assests/team-2.jpg";
import image3 from "./Assests/team-3.jpg";
import image4 from "./Assests/team-5.jpg";

const profileData = [
  {
    id: "1",
    profileName: "Anvesh Jallapally ",
    profileDesign: "Founder & Chief Technology Officer",
    description:
      "Expert in delivering overall technology leadership and direction encompassing application development, technology strategy and staff management",
    url: image1,
    linkedin: "",
  },
  {
    id: "2",
    profileName: "Akhila Reddy Lingannagari",
    profileDesign: "Co-Founder & Chief Executive Officer",
    description:
      "Expert in Neuroscience and a serial entrepreneur who has developed a thorough knowledge of the global technology and innovation marketplace during his 10-year executive career.",
    url: image2,
    linkedin: "",
  },
  {
    id: "3",
    profileName: "Prabitha Urwyler",
    profileDesign: "Co-Founder",
    description:
      "Experienced biomedical scientist who has spent more than 25 years developing and bringing to market innovative sensor technologies in the arena of mental health.",
    url: image3,
    linkedin: "",
  },
  {
    id: "4",
    profileName: "Rajnish Kumar Gupta",
    profileDesign: "Biomedical Scientist",
    description: "Expert in Trauma & Stroke Management",
    url: image4,
    linkedin: "",
  },
];

function Team() {
  return (
    <div>
      <AppTitle title="Meet Our Team" />
      <p
      className="teams-subtitle"
      >
        We are a team with good combination of experience and skills across
        Information technology, Neuroscience, Biomedical sciences and Trauma /
        Stroke Research.
      </p>
      <div className='profileCards'>
        {profileData.map((item) => (
          <ProfileCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Team;
