import React from "react";
import { BsClipboardData } from "react-icons/bs";
import {TiTick} from 'react-icons/ti';
import {TiDelete} from 'react-icons/ti';
import "./MobileSubscription.css";
import { leftData, rightData, subscriptionData } from "./Data";
import AppTitle from "../../ReusableComponents/AppTitle";
import iphone from "../../Assets/iphone.png";
import colors from "../../DefaultColors";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";

// Card component side to the mobile Phone
const benefitCard = (item) => {
  return (
    <div
      key={item.id}
      className="benefit-card"
      style={{ backgroundColor: item.bgColor }}
    >
      <BsClipboardData
        size={30}
        color={colors.primaryWhite}
        className="benefit-card-icon"
      />
      <p className="benefit-card-title">{item.title}</p>
      <p className="benefit-card-description">{item.description}</p>
    </div>
  );
};

// Subscription card component for prices
const subscriptionCard = (item) => {
  return (
    <div
      style={{
        marginTop: item.id === "3" ? "0" : "100px",
        backgroundColor : colors.white
      }}
      className="subscription-card-container"
    >
      <div
        style={{
          backgroundColor:
            item.id === "3"
              ? colors.navy
              : colors.dark
        }}
        className="subscription-title-header"
      >
        <p className="subscription-title">{item.title}</p>
        <p className="subscription-cost">{item.cost}</p>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <table>
            <tr>
            <th>Service</th>
            <th>Available</th>
            </tr>
            {item.advantages.map((listItem, index) =>
            <tr>
                <td>{listItem}</td>
                <td>{item.accesable[index] === 1 ? <TiTick size={24} color='green' /> : <TiDelete size={24} color='red' />}</td>
            </tr>)}
        
            </table>
            {item.id === "2" && (
          <AppButtonRound
            text="Subscribe"
            width="80%"
            bgColor={colors.dark}
            border={colors.dark}
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
            bgColor={colors.dark}
            border={colors.dark}
          />
        )}
      </div>
    </div>
  );
};



function MobileSubscription() {


  return (
    <div className="mobile-subscription-container">
      <div 
      className="subscription-top">
        <AppTitle title="Mobile Application Subscription(s)" />

        <div 
        className="mobile-application-benefits">
          <div className="mobile-left">
            {leftData.map((item) => benefitCard(item))}
          </div>
          <img src={iphone} alt="mobileImage" className="iphone-subscription" />
          <div className="mobile-right">
            {rightData.map((item) => benefitCard(item))}
          </div>
        </div>
      </div>
      <div className="offers-subscription-content">
      <p className="subscription-maintitle">Offers & Subscriptions</p>
      <div 
      className="mobile-subscription-benefits">
        {subscriptionData.map((item) => subscriptionCard(item))}
      </div>
      </div>
    </div>
  );
}

export default MobileSubscription;
