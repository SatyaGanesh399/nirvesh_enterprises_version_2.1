import React from "react";
import "./Payment.css";

function PaymentPage1() {
  return (
    <div className="payment-first-container">
      <label for="username" className="payment-customer-label">Customer Id/ Device Id/ Email Id</label>
      <input 
      name="username" 
      placeholder="Enter your Id"
      className="payment-customer-input" />
      <button className="confirm-user-button">Submit</button>
      <div className="payment-user-confirm">

      </div>
      <div className="payment-checkbox-container">
        <div className="payment-checkbox-card">
          <input type="checkbox" id="basic" />
          <label for="basic">Basic Plan</label>
        </div>
        <div className="payment-checkbox-card">
          <input type="checkbox" id="standard" />
          <label for="standard">Standard Plan</label>
        </div>
        <div className="payment-checkbox-card">
          <input type="checkbox" id="premium" />
          <label for="premium">Premium Plan</label>
        </div>
      </div>
      <button className="confirm-acceptance-button">Confirm</button>
    </div>
  );
}

export default PaymentPage1;
