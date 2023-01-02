import React from "react";
import AccordinPage from "./AccordinPage";
import "./Payment.css";

function PaymentPage2({handleModal, forwardPayment}) {

  const changePayment = (paymentNumber) => {
    forwardPayment(paymentNumber)
}


  return (
    <div
    className="payment-page2-container"
    >
      <div className="payment2-accordin-container">
    <AccordinPage />
    <div className="patient-acknowledgement-checkbox"
    style={{marginTop : "20px"}}>
        <input type="checkbox" name="acknowledgement" />
        <label for="acknowledgement">
          yes, i accept to make the payment.
        </label>
      </div>
      </div>
    <div className="payment-buttons-group">
        <button className="confirm-acceptance-button cancel-button"
        onClick={() => console.log("checked")}>
          Cancel Payment
        </button>
        <button className="confirm-acceptance-button confirm-button"
        onClick={() => changePayment(2)}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentPage2;
