import React, { useState } from "react";
import "./Payment.css";

function PaymentPage1({handleModal, forwardPayment}) {
  const [packages, setPackages] = useState({
    basic: false,
    standard: false,
    premium: false,
  });

  const [manual, setManual] = useState(false);

  const handlePackages = (event) => {
    let target = event.target.name;
    console.log(target);
  };
  const handleManual = () => {
    setManual(!manual);
  };

  const changePayment = (paymentNumber) => {
      forwardPayment(paymentNumber)
  }

  return (
    <div className="payment-first-container">
      <label for="username" className="payment-customer-label">
        Customer Id/ Device Id/ Email Id
      </label>
      <div className="payment-user-submit">
        <input
          name="username"
          placeholder="Enter your Id"
          className="payment-customer-input"
        />
        <button className="confirm-user-button">Submit</button>
      </div>
      <div className="payment-user-confirm">
        <div className="patient-manual-enter">
          <input
            type="checkbox"
            className="patient-manual-input"
            checked={manual}
            onChange={handleManual}
          />
          <label className="patient-manual-label">Enter Manually</label>
        </div>
        <p className="patient-details-title">Patient's Details</p>
        <div className="payment-patient-details">
          <label for="username" className="payment-patient-label">
            Patient's Name
          </label>
          <input
            name="username"
            placeholder="Enter your name"
            className="payment-patient-input"
            disabled={!manual ? true : false}
          />
        </div>
        <div className="payment-patient-details">
          <label for="username" className="payment-patient-label">
            Patient's ID
          </label>
          <input
            name="username"
            placeholder="Enter your id"
            className="payment-patient-input"
            disabled={!manual ? true : false}
          />
        </div>
        <div className="payment-patient-details">
          <label for="username" className="payment-patient-label">
            Device ID
          </label>
          <input
            name="username"
            placeholder="Enter device Id"
            className="payment-patient-input"
            disabled={!manual ? true : false}
          />
        </div>
        <div className="payment-patient-details">
          <label for="username" className="payment-patient-label">
            Device Type
          </label>
          <select
            className="payment-patient-input"
            disabled={!manual ? true : false}
          >
            <option value="headband">Head Band</option>
            <option value="earpiece">Ear Piece</option>
          </select>
        </div>
      </div>

      <div className="patient-acknowledgement-checkbox">
        <input type="checkbox" name="acknowledgement" />
        <label for="acknowledgement">
          yes, i confirm that the above furnished details are acknowledged.
        </label>
      </div>
      <div className="payment-buttons-group">
        <button className="confirm-acceptance-button cancel-button"
        onClick={() => console.log("checked")}>
          Cancel
        </button>
        <button className="confirm-acceptance-button confirm-button"
        onClick={() => changePayment(1)}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default PaymentPage1;
