import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SubscriptionCard from './SubscriptionCard';
import './MobileSubscription.css';

import { subscriptionData } from "./Data";

function SubscriptionModal({showItem, hideModal, show, }) {
  const handleClose = () =>{
    hideModal();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {showItem === '1' && <SubscriptionCard item={subscriptionData[0]} />}
        {showItem === '2' && <SubscriptionCard item={subscriptionData[2]} />}
        {showItem === '3' && <SubscriptionCard item={subscriptionData[1]} />}
      </Modal>
    </>
  );
}

export default SubscriptionModal