import React from "react";
import "./Careers.css";
import { employeeVideoData } from "./CareerData";
import CareerEmployeeCard from "./CareerEmployeeCard";

function Careers() {
  return (
    <div className="careers-main-container">
      <div class="careers-header">
        <h2 className="careers-header-title">Join us</h2>
        <p className="careers-header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
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
            {employeeVideoData.map(item => <CareerEmployeeCard item={item} />)}
        </div>
      </div>

      <div className="careers-about-us">
        <img
          src="https://images.unsplash.com/photo-1625750331870-624de6fd3452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="career-commitment-image"
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
      </div>

      
    </div>
  );
}

export default Careers;
