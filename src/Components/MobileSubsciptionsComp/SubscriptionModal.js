import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SubscriptionCard from './SubscriptionCard';
import './MobileSubscription.css';
import Payment from './PaymentSection/Payment';

import { subscriptionData } from "./Data";

function SubscriptionModal({showItem, hideModal, show, handleModal }) {
  const handleClose = () =>{
    hideModal();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {showItem === '1' && <SubscriptionCard item={subscriptionData[0]} closeModal={handleClose} openPayment = {handleModal} />}
        {showItem === '2' && <SubscriptionCard item={subscriptionData[2]} 
        closeModal={handleClose} openPayment = {handleModal}/>}
        {showItem === '3' && <SubscriptionCard item={subscriptionData[1]} 
        closeModal={handleClose} openPayment = {handleModal}/>}
        {showItem === '4' && <Payment />}
      </Modal>
    </>
  );
}

export default SubscriptionModal