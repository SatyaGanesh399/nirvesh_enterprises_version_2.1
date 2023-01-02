import React, { useState } from 'react'
import './Payment.css';
import CircularProgress from '@mui/material/CircularProgress';

import paymentDone from '../Assets/payment.png';

function PaymentPage3() {

    const [paymentConfirmation, setPaymentConfirmation] = useState(true);

    setTimeout(()=>{
        setPaymentConfirmation(false);
    }, 4000)

    if(paymentConfirmation){
        return (
            <div className='payment3-container'>
                <CircularProgress color="success" />
                <p className='payment-successful-message'>
                    Please wait till the transaction is finished, Kindly stay in the page.
                </p>
            </div>
          )
    }else return (
    <div className='payment3-container'>
        <img src={paymentDone} alt="payment" className='payment-done-symbol'/>
        <p className='payment-successful-message'>Payment Successful</p>
    </div>
  )
}

export default PaymentPage3