import React, {useState} from "react";
import "./Careers.css";

import careerbackground from './Assets/career-background.jpg';
import { useNavigate } from "react-router-dom";

import CareersCarousel from "./CareersCarousel";
import SpontaneousApplication from "./SpontaneousApplication";
import AppHeader from "../../ReusableComponents/AppHeader";



function Careers() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () =>{
    setScreenWidth(window.innerWidth);
  }

  const navigation = useNavigate();

  // modal for application
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div 
    onResize={handleResize}
    className="careers-main-container">
      <AppHeader
      image={careerbackground}
      title="Careers" 
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      {/* <AppTitle title="Join us" />
        <AppSubHeading text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua" /> */}
      <div className="careers-about-us">
        <div className="careers-about-content">
          <h4 className="career-side-heading">Our Commitment</h4>
          <p className="career-sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            esse?
          </p>
          <p className="career-sub-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            distinctio in atque molestiae, unde minima officia voluptas quae
            laudantium ex eius numquam? Consequatur, exercitationem et! Fugit
            quibusdam fuga, voluptas ipsum, aut accusamus necessitatibus numquam
            et animi facere molestiae consectetur, sint voluptatibus tempore
            nemo. Sequi omnis error dignissimos a ea.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
          className="career-commitment-image"
        />
      </div>

      <div className="careers-employee-voices">
        <div>
          <h4 className="career-employee-heading">
            In the words of our employee
          </h4>
          <p className="career-employee-sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            esse?
          </p>
        </div>
        <div className="employee-video-carousel">
          <CareersCarousel employee={true} slides={screenWidth > 1000 ? 3 : screenWidth < 500 ? 1 : 2} />
        </div>
      </div>
    <SpontaneousApplication show={show} handleClose={handleClose} />
      <div className="career-page-buttons">
      <button 
      onClick={handleShow}
      className="career-job-buttons">Send a spontaneous application</button>
      <button 
      onClick={()=> navigation('/jobsearch')}
      className="career-job-buttons">Job Search Page</button>
      </div>

      <div className="careers-about-us">
        <img
          src="https://images.unsplash.com/photo-1625750331870-624de6fd3452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="career-commitment-image responsive-large"
        />
        <div className="careers-about-content">
          <h4 className="career-side-heading">
            Shape your future with excellence
          </h4>
          <p className="career-sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            esse?
          </p>
          <p className="career-sub-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            distinctio in atque molestiae, unde minima officia voluptas quae
            laudantium ex eius numquam? Consequatur, exercitationem et! Fugit
            quibusdam fuga, voluptas ipsum, aut accusamus necessitatibus numquam
            et animi facere molestiae consectetur, sint voluptatibus tempore
            nemo. Sequi omnis error dignissimos a ea.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1625750331870-624de6fd3452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="career-commitment-image responsive-small"
        />
      </div>

      <div className="careers-about-us">
        <div className="careers-about-content">
          <h4 className="career-side-heading">Your Exalting Project</h4>
          <p className="career-sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            esse?
          </p>
          <p className="career-sub-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            distinctio in atque molestiae, unde minima officia voluptas quae
            laudantium ex eius numquam? Consequatur, exercitationem et! Fugit
            quibusdam fuga, voluptas ipsum, aut accusamus necessitatibus numquam
            et animi facere molestiae consectetur, sint voluptatibus tempore
            nemo. Sequi omnis error dignissimos a ea.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="career-commitment-image"
        />
      </div>
      

      <div className="career-hr-team">
        <div>
          <h4 className="career-employee-heading">
            Get in touch
          </h4>
          <p className="career-employee-sub-heading career-hr-sub-heading">
          Our Recruitment Team is always available to discuss what joining Excelya would mean for you. Don’t hesitate to get in touch with them via LinkedIn!
          </p>
          <div
          className="contact-hr-div">

          <button className="hr-contact-number">Contact Our HR</button>
          </div>
        </div>
        <div className="employee-linkedin-carousel">
          <CareersCarousel hr={true} 
          slides={screenWidth < 500 ? 1 : 2}
          />
        </div>
      </div>
      
    </div>
  );
}

export default Careers;
