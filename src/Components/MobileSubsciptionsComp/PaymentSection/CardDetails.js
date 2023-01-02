import React from 'react'
import './Payment.css';

function CardDetails() {
  return (
    <div className="payment-card-details">
                <div className="payment-card-item">
                  <label for="cardNumber" className="payment-card-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="payment-card-input"
                  />
                </div>
                <div className="payment-card-item  cvv-number">
                  <label for="CVVNumber" className="payment-card-label">
                    CVV number
                  </label>
                  <input
                    type="text"
                    placeholder="CVV number"
                    className="payment-card-input"
                  />
                </div>
                <div className="payment-card-item">
                  <label for="cardNumber" className="payment-card-label">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Card holder name"
                    className="payment-card-input card-holder"
                  />
                </div>
                <div className="payment-submit-container">
                  <button className="payment-submit-button">
                    Submit Details
                  </button>
                </div>
              </div>
  )
}

export default CardDetails