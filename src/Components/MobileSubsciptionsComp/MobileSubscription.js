import React from "react";
import { BsClipboardData } from "react-icons/bs";
import "./MobileSubscription.css";
import { leftData, rightData, subscriptionData } from "./Data";
import AppTitle from "../../ReusableComponents/AppTitle";
import iphone from "../../Assets/iphone.png";
import colors from "../../DefaultColors";

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
const subscriptionCard = (item) => {
  return (
    <div 
    style={{
        
        marginTop : item.id==='3' ? '0' :  '100px',
        }} className="subscription-card-container">
      <div 
      style={{backgroundColor : item.id==='3' ? '#FFD700' :  colors.blue}}
      className="subscription-title-header">
      <p 
      className="subscription-title"
      >{item.title}</p>
      <p className="subscription-cost">{item.cost}</p>
      </div>
      <div style={{paddingTop : '30px'}}>
      {item.advantages.map((item) => (
          <p className="subscription-benefits">{item}</p>
          ))}
          </div>
    </div>
  );
};

function MobileSubscription() {
  return (
    <div className="mobile-subscription-container">
      <div className="subscription-top">
        <AppTitle title="Mobile Application Subscription(s)" />

        <div className="mobile-application-benefits">
          <div className="mobile-left">
            {leftData.map((item) => benefitCard(item))}
          </div>
          <img src={iphone} alt="mobileImage" className="iphone-subscription" />
          <div className="mobile-right">
            {rightData.map((item) => benefitCard(item))}
          </div>
        </div>
      </div>
      <div className="mobile-subscription-benefits">
        {subscriptionData.map((item) => subscriptionCard(item))}
      </div>
    </div>
  );
}

export default MobileSubscription;
