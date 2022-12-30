import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Alert from 'react-bootstrap/Alert';

import JobDescription from "./JobDescription";

import {MdClose} from 'react-icons/md';

function JobDescriptionCard({ show, item, handleClose }) {
  const closeModal = () => handleClose();

  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
    setTimeout(() =>{
      setSubmit(false)
    }, 4000)
  }
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <div className="job-description-container">
        <MdClose
            onClick={closeModal}
            className="close-modal-button" />
          <p className="job-application-title">{item.position}</p>
          <div className="job-application-container">
            <JobDescription title="Experience" description={item.experience} experience={true} />
            <JobDescription title="Department" description={item.department} />
            <JobDescription title="Skills" description={item.skills} skills={true} />
            <JobDescription
              title="Job Description"
              description={item.description}
            />
            <JobDescription title="Location" description={item.location} />
            <JobDescription
              title="Published On"
              description={item.datePublished}
            />
          </div>
          <div className="job-desciprtion-file-container">
            <label for="cv">Upload your resume:</label>
            <input type="file" id="cv" name="cv" />
            <label for="ml">Upload your motivation letter</label>
            <input type="file" id="ml" name="ml" />
          </div>
          <div 
          onClick={handleSubmit}
          className="job-button-container">
            <button className="job-application-button">Apply</button>
          </div>
          {submit &&
          <Alert variant="success"
          style={{textAlign : 'center'}}>
          Application Submitted
        </Alert> }
        </div>
      </Modal>
    </>
  );
}

export default JobDescriptionCard;
