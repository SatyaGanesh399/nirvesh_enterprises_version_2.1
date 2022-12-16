import React, { useState } from "react";
import "./MobileSubscription.css";
import SubscriptionModal from './SubscriptionModal';

import iphonex from './Assets/iphonex.png'
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import colors from "../../DefaultColors";


function OffersAndSubscription() {

  const [modal, setModal] = useState("0");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (itemNumber) =>{
    setModal(itemNumber);
    setShow(true);
  }

  return (
    <div className="offers-subscription-content">
      <div className="offer-content">
        <p className="offers-subTitle">A ONE STOP SOLUTION <br/> FOR ALL YOUR PROBLEMS</p>
        <p className="offers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="offers-guidance">
          <button className="download-playstore">Download from playstore</button>
        </div>
      </div>
      <div className="offers-right-container">
      <div className="mobile-subscription-benefits">
        <div
        className="subscription-option-button"
        style={{marginBottom : "-50px"}}>
          <p className="subscription-card-title">Basic Plan</p>
          <p className="subscription-card-price">888/Month</p>
          <AppButtonRound text="Details" 
          bgColor={colors.blue}
          border={colors.blue}
          width = '100px'
          afterClick={()=>{handleClick("1")}} />
        </div>
        <div
        className="subscription-option-button"
        style={{marginBottom : "50px"}}>
          <p className="subscription-card-title">Premium Plan</p>
          <p className="subscription-card-price">888/Month</p>
          <AppButtonRound text="Details" 
          bgColor={colors.blue}
          border={colors.blue}
          width = '100px'
          afterClick={()=>{handleClick("3")}} />
        </div>
        <div
        className="subscription-option-button"
        style={{marginBottom : "-50px"}}>
          <p className="subscription-card-title">Standard Plan</p>
          <p className="subscription-card-price">888/Month</p>
          <AppButtonRound text="Details" 
          bgColor={colors.blue}
          border={colors.blue}
          width = '100px'
          afterClick={()=>{handleClick("2")}} />
        </div>
        <SubscriptionModal showItem={modal} show={show} hideModal = {handleClose} />
      </div>
      <div className="iphonex-container">
        <img src={iphonex} alt="iphone" className="subscription-iphone" />
      </div>
      </div>
    </div>
  )
}

export default OffersAndSubscription;
