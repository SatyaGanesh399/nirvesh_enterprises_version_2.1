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

  const [subscription, setSubscription] = useState({});

  const handlePayment = (item) =>{
    setSubscription(item);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {showItem === '1' && <SubscriptionCard item={subscriptionData[0]}  openPayment = {handleModal} openPlan={handlePayment} />}
        {showItem === '2' && <SubscriptionCard item={subscriptionData[2]} 
         openPayment = {handleModal} openPlan={handlePayment}/>}
        {showItem === '3' && <SubscriptionCard item={subscriptionData[1]} 
         openPayment = {handleModal} openPlan={handlePayment}/>}
        {showItem === '4' && <Payment item={subscription} />}
      </Modal>
    </>
  );
}

export default SubscriptionModal