import * as React from 'react';
import './Payment.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PaymentPage1 from './PaymentPage1';

const steps = [
  'Confirm User Authentication',
  'Make Payment',
  'Confirm Payment',
];

export default function HorizontalLabelPositionBelowStepper() {

  const [paymentCount, setPaymentCount] = React.useState(0);

  const handleChange = (number)=>{
    setPaymentCount(number);
  }
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
      <PaymentPage1 />
    </Box>
  );
}