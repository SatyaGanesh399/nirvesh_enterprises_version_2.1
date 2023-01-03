import React, { useState, useContext } from "react";
import "./MobileSubscription.css";
import SubscriptionModal from "./SubscriptionModal";
import {FaGooglePlay} from 'react-icons/fa';

import iphonex from "./Assets/iphonex.png";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import colors from "../../DefaultColors";

import ModalContext from "../../Contexts/ModalContext/SubscriptionModalContext";

function OffersAndSubscription() {
  const [modal, setModal] = useState("0");
  const {openModal, setOpenModal} = useContext(ModalContext);

  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  const handleClick = (itemNumber) => {
    setModal(itemNumber);
    handleShow();
  };

  return (
    <div className="offers-subscription-content">
      <div className="offer-content">
        <p className="offers-subTitle">
          A ONE STOP SOLUTION <br /> FOR ALL YOUR PROBLEMS
        </p>
        <p className="offers-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="offers-guidance">
          <button className="download-playstore">
          <FaGooglePlay className="playstore-icon"/>
            Download from playstore
          </button>
        </div>
      </div>
      <div className="offers-right-container">
        <div className="mobile-subscription-benefits">
          <div className="subscription-option-button regular-card">
            <p className="subscription-card-title">Basic Plan</p>
            <p className="subscription-card-price">666/Month</p>
            <AppButtonRound
              text="Details"
              bgColor={colors.blue}
              border={colors.blue}
              width="100px"
              afterClick={() => {
                handleClick("1");
              }}
            />
          </div>
          <div className="subscription-option-button special-card">
            <p className="subscription-card-title">Premium Plan</p>
            <p className="subscription-card-price">1199/Month</p>
            <AppButtonRound
              text="Details"
              bgColor={colors.blue}
              border={colors.blue}
              width="100px"
              afterClick={() => {
                handleClick("3");
              }}
            />
          </div>
          <div className="subscription-option-button regular-card">
            <p className="subscription-card-title">Standard Plan</p>
            <p className="subscription-card-price">888/Month</p>
            <AppButtonRound
              text="Details"
              bgColor={colors.blue}
              border={colors.blue}
              width="100px"
              afterClick={() => {
                handleClick("2");
              }}
            />
          </div>
          <SubscriptionModal
            showItem={modal}
            handleModal={()=> setModal("4")}
            show={openModal}
            hideModal={handleClose}
          />
        </div>
        <div className="iphonex-container">
          <img src={iphonex} alt="iphone" className="subscription-iphone" />
        </div>
      </div>
    </div>
  );
}

export default OffersAndSubscription;
