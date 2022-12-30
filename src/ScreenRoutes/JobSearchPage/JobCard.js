import React, { useState } from 'react';
import './JobSearchPage.css';


function JobCard({ item, openModal, handleOpenItem}) {

  const handleModal = () =>{
    handleOpenItem(item);
    openModal();
  }

  return (
    <div className="job-card-container">
      
      <div className="job-card-main-content">
        <div className="job-card-position job-card-box">
          <p className="job-card-sub-heading">Position</p>
          <p className="job-card-items">{item.position}</p>
        </div>
        <div className="job-card-skills job-card-box">
          <p className="job-card-sub-heading">Skills</p>
          <div className="job-card-skills">
            {item.skills.map((skill) => (
              <span className="job-card-items">{skill}, </span>
            ))}
          </div>
        </div>
        <div className="job-card-experience job-card-box">
          <p className="job-card-sub-heading">Experience</p>
          <p className="job-card-items">
            {item.experience[0]} to {item.experience[1]}
          </p>
        </div>
        <div className="job-card-department job-card-box">
          <p className="job-card-sub-heading">Department</p>
          <p className="job-card-items">{item.department}</p>
        </div>
        <div className="job-card-location job-card-box">
          <p className="job-card-sub-heading">Location</p>
          <p className="job-card-items">{item.location}</p>
        </div>
        <div className="job-card-dateposted job-card-box">
          <p className="job-card-sub-heading">Published on</p>
          <p className="job-card-items">{item.datePublished}</p>
        </div>
      </div>
      <button
      onClick={handleModal}
      className="job-card-apply-button">Know More</button>
    </div>
  );
}

export default JobCard;
