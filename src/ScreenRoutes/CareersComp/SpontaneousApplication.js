import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Alert from 'react-bootstrap/Alert';


import {MdClose} from 'react-icons/md'

function SpontaneousApplication({ show, handleClose }) {
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
        <div className="careers-application-container">
          <div className="careers-application-header">
            <MdClose
            onClick={closeModal}
            className="modal-close-button" />
            <p>Fill in the Application</p>
          </div>
          <div className="careers-application-content">
            <label for="name" className="careers-application-label">
              Name of the applicant
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="careers-application-input"
            />
            <label for="phoneNumber" className="careers-application-label">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              className="careers-application-input"
            />
            <label for="email" className="careers-application-label">
              Email ID
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email ID"
              className="careers-application-input"
            />
            <label for="message" className="careers-application-label">
              Message
            </label>
            <textarea id="message" className="careers-application-input" />
          </div>
            <div className="job-desciprtion-file-container">
              <label for="cv">Upload your resume:</label>
              <input type="file" id="cv" name="cv" />
              <label for="ml">Upload your motivation letter</label>
              <input type="file" id="ml" name="ml" />
            </div>
            <div className="job-button-container">
              <button 
              onClick={handleSubmit}
              className="job-application-button">Apply</button>
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

export default SpontaneousApplication;
