import React, { useContext } from "react";
import ModalContext from "../../../Contexts/ModalContext/SubscriptionModalContext";
import AccordinPage from "./AccordinPage";
import "./Payment.css";

function PaymentPage2({ forwardPayment, plan }) {
  const changePayment = (paymentNumber) => {
    forwardPayment(paymentNumber);
  };

  // modal context

  const { setOpenModal } = useContext(ModalContext);

  return (
    <div className="payment-page2-container">
      <div className="payment2-accordin-container">
        <AccordinPage item={plan} />
        <div
          className="patient-acknowledgement-checkbox"
          style={{ marginTop: "20px" }}>
          <input type="checkbox" name="acknowledgement" />
          <label for="acknowledgement">
            yes, i accept to make the payment.
          </label>
        </div>
      </div>
      <div className="payment-buttons-group">
        <button
          className="confirm-acceptance-button cancel-button"
          onClick={() => setOpenModal(false)}>
          Cancel Payment
        </button>
        <button
          className="confirm-acceptance-button confirm-button"
          onClick={() => changePayment(2)}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentPage2;
