import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";

import { subscriptionData } from "./Data";
import colors from "../../DefaultColors";

import "./MobileSubscription.css";
import { leftData, rightData } from "./Data";
import AppTitle from "../../ReusableComponents/AppTitle";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
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
      <span
        style={{
          color: item.hover ? colors.white : colors.navy,
          fontSize: item.hover ? "30px" : "40px",
        }}
        class="material-symbols-rounded benefit-card-icon"
      >
        {item.icon.toString()}
      </span>
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

const subscriptionCard = (item) => {
  return (
    <div
      style={{
        marginTop: item.id === "3" ? "0" : "100px",
        backgroundColor: colors.white,
      }}
      className="subscription-card-container"
    >
      <div className="subscription-title-header">
        <p className="subscription-title">{item.title}</p>
        <p className="subscription-cost">{item.cost}</p>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <table>
          <tr>
            <th style={{ color: colors.dark }}>Service</th>
            <th style={{ color: colors.dark }}>Available</th>
          </tr>
          {item.advantages.map((listItem, index) => (
            <tr>
              <td style={{ color: colors.dark }}>{listItem}</td>
              <td>
                {item.accesable[index] === 1 ? (
                  <TiTick size={24} color="green" />
                ) : (
                  <TiDelete size={24} color="red" />
                )}
              </td>
            </tr>
          ))}
        </table>
        {item.id === "2" && (
          <AppButtonRound
            text="Subscribe"
            width="80%"
            bgColor={colors.navy}
            border={colors.navy}
          />
        )}
        {item.id === "3" && (
          <AppButtonRound
            text="Subscribe"
            width="80%"
            bgColor={colors.navy}
            border={colors.navy}
          />
        )}
        {item.id === "1" && (
          <AppButtonRound
            text="Subscribe"
            width="80%"
            bgColor={colors.navy}
            border={colors.navy}
          />
        )}
      </div>
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
        return setPhoto(item.image);
      }
      return null;
    });
    hoveredRightChange.map((item) => {
      if (item.hover === true) {
        return setPhoto(item.image);
      }
      return null;
    });
    setLeftCardData(hoveredLeftChange);
    setRightCardData(hoveredRightChange);
  };

  return (
    <div className="mobile-subscription-container">
      <div className="subscription-top" id="mobile-subscription-top">
        <AppTitle title="Mobile Application Subscription(s)" />
        <p className="side-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        {/* <p className="features-title-responsive">Our Main Features</p> */}
        <div className="iphone-background"></div>
        <div className="mobile-application-features">
          {/* <div className="mobile-left-responsive">
            {leftCardData.map((item) => benefitCard(item, handleMouseOver))}
          </div> */}
          <div>
            <img
              src={photo}
              alt="mobileImage"
              className="iphone-subscription"
            />
          </div>
          {/* <div className="mobile-right-responsive">
            {rightCardData.map((item) => benefitCard(item, handleMouseOver))}
          </div> */}
          <div className="features-content">
            <p className="features-title">Our Main Features</p>
            <div className="all-the-features">
              <div className="mobile-left">
                {leftCardData.map((item) => benefitCard(item, handleMouseOver))}
              </div>
              <div className="mobile-right">
                {rightCardData.map((item) =>
                  benefitCard(item, handleMouseOver)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offers-subscription-content">
        {/* <OffersAndSubscription /> */}
      </div>
    </div>
  );
}

export default MobileSubscription;
