import React, { useState } from "react";
import { BsClipboardData } from "react-icons/bs";

import "./MobileSubscription.css";
import { leftData, rightData } from "./Data";
import AppTitle from "../../ReusableComponents/AppTitle";
import iphone from "../../Assets/iphone.png";
import colors from "../../DefaultColors";

import OffersAndSubscription from "./OffersAndSubscription";

const benefitCard = (item, handleMouseOver) => {
  const handleChange = () => {
    handleMouseOver(item);
  };

  return (
    <div
      key={item.id}
      className="benefit-card"
      style={{
        backgroundColor: item.hover ? colors.navy : colors.white,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        scale: item.hover ? "1.1" : "1",
      }}
      onMouseEnter={handleChange}
    >
      <BsClipboardData
        className="benefit-card-icon"
        style={{
          color: item.hover ? colors.white : colors.navy,
          size: item.hover ? "30px" : "40px",
        }}
      />
      <p
        className="benefit-card-title"
        style={{
          color: item.hover ? colors.white : colors.navy,
        }}
      >
        {item.title}
      </p>
      <p
        className="benefit-card-description"
        style={{
          color: item.hover ? colors.white : colors.navy,
        }}
      >
        {item.description}
      </p>
    </div>
  );
};

function MobileSubscription() {
  let [leftCardData, setLeftCardData] = useState(leftData);
  let [rightCardData, setRightCardData] = useState(rightData);
  let [photo, setPhoto] = useState(leftData[0].image);

  const handleMouseOver = (hoveredItem) => {
    let leftDataChange = [];
    let hoveredLeftChange = [];
    let rightDataChange = [];
    let hoveredRightChange = [];
    leftDataChange = leftCardData.map((item) => {
      return {
        ...item,
        hover: false,
      };
    });
    hoveredLeftChange = leftDataChange.map((item) => {
      if (hoveredItem.id === item.id) {
        return {
          ...item,
          hover: true,
        };
      } else {
        return item;
      }
    });
    rightDataChange = rightCardData.map((item) => {
      return {
        ...item,
        hover: false,
      };
    });
    hoveredRightChange = rightDataChange.map((item) => {
      if (hoveredItem.id === item.id) {
        return {
          ...item,
          hover: true,
        };
      } else {
        return item;
      }
    });

    hoveredLeftChange.map((item) => {
      if (item.hover === true) {
        setPhoto(item.image);
      }
    });
    hoveredRightChange.map((item) => {
      if (item.hover === true) {
        setPhoto(item.image);
      }
    });
    setLeftCardData(hoveredLeftChange);
    setRightCardData(hoveredRightChange);
  };

  return (
    <div className="mobile-subscription-container">
      <div className="subscription-top">
        <AppTitle title="Mobile Application Subscription(s)" />
        <p className="side-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="iphone-background"></div>

        <div className="mobile-application-features">
          <div>
            <img
              src={photo}
              alt="mobileImage"
              className="iphone-subscription"
            />
          </div>
          <div className="features-content">
            <p className="features-title">Our Main Features</p>
            <div className="mobile-left">
              {leftCardData.map((item) => benefitCard(item, handleMouseOver))}
            </div>
            <div className="mobile-right">
              {rightCardData.map((item) => benefitCard(item, handleMouseOver))}
            </div>
          </div>
        </div>
      </div>
      <OffersAndSubscription />
    </div>
  );
}

export default MobileSubscription;
