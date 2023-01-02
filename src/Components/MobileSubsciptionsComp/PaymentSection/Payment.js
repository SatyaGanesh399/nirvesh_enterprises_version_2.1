import * as React from 'react';
import './Payment.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PaymentPage1 from './PaymentPage1';
import PaymentPage2 from './PaymentPage2';
import PaymentPage3 from './PaymentPage3';

const steps = [
  'Confirm User Authentication',
  'Make Payment',
  'Confirm Payment',
];

export default function Payment({closeModal}) {

  const [paymentCount, setPaymentCount] = React.useState(0);
  const [changePage, setChangePage] = React.useState(paymentCount);
  
  const modalClosure = () => {
    closeModal();
  }

  React.useEffect(()=>{
    setTimeout(() =>{
      setChangePage(paymentCount);
    }, 1000);
  }, [])

  return (
    <Box sx={{ width: '100%' }}
    className="payment-container"
    >
      <Stepper activeStep={paymentCount} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        paymentCount === 0 && 
      <PaymentPage1 handleModal={modalClosure} forwardPayment={(number)=> setPaymentCount(number)} />
      }
      {paymentCount === 1 && 
      <PaymentPage2 handleModal={modalClosure} forwardPayment={(number)=> setPaymentCount(number)} />
      }
      {paymentCount === 2 && 
      <PaymentPage3 handleModal={modalClosure} forwardPayment={(number)=> setPaymentCount(number)} />
      }
    </Box>
  );
}