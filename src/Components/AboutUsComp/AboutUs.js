import React from "react";

import colors from "../../DefaultColors";
import AppButton from '../../ReusableComponents/AppButton';

import "./index.css";


const provide = [
  {
    id:'1',
    bgColor : colors.blue,
    text : "End-to-End cost effective Post-operative Brain health Management system",
  },
  {
    id: '2',
    bgColor : colors.navy,
    text : "Targeted cognitive status classification algorithm > 80% accuracy",
  },
  {
    id: '3',
    bgColor : colors.orange,
    text : "Beneficial Interventions (Audio-Visual Training) to improve well-being",
  },
  {
    id: '4',
    bgColor : colors.red,
    text : "Multimodal data collection and continuous analysis",
  },
];

function AboutUs() {
  return (
    <div className="container">
      <p className="container-header">About Us</p>
      <div className="about-us">
        <div className="main-content">
            <p
              className="sub-heading">
              We are a team of 45 persons' years with good combination of
              experience and skills across Neuroscience, Biomedical sciences and
              Neuropsychiatry
            </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <div>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>We Provide</p>
              {provide.map((item) => {
                return (
                  <div key={item.id} className='list-points'>
                    <div style={{width : '20px', height : '20px', margin : '15px', borderRadius : '10px', backgroundColor : item.bgColor}}></div>
                    <p className='list'>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p
              style={{ fontSize: "16px", fontWeight: "medium", color: "grey" }}
            >
              With the strong need for evidence-based diagnostic technology as a
              complementary to existing technology likely to include a
              multimodal approach and consolidates it in a holistc report with a
              wide range of compliance rates of assessmennt tools with better
              accuracy. Our mission is to redefine neurohealth and serve as
              unique solution for all rehabilitation centers / organizations
              looking to take control of their patient's health.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              margin: "15px",
            }}
          >
            <AppButton text='Know More' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
