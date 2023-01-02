import React, { useState } from "react";
import masterCard from "../Assets/Mastercard-logo.png";
import phonePay from "../Assets/phonepay.jpg";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CardDetails from "./CardDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const creditCardData = [
  {
    id: "1",
    name: "MasterCard",
    img: masterCard,
  },
  {
    id: "2",
    name: "MasterCard",
    img: masterCard,
  },
  {
    id: "3",
    name: "MasterCard",
    img: masterCard,
  },
  {
    id: "4",
    name: "MasterCard",
    img: masterCard,
  },
  {
    id: "5",
    name: "MasterCard",
    img: masterCard,
  },
];

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const paymentCard = ({ item, title }) => {
  return (
    <div className="payment-cards">
      <p className="payment-card-title">Make an UPI Payment</p>
      <div className="payment-credit-card">
        {creditCardData.map((item) => (
          <img src={item.img} className="credit-card-payment" />
        ))}
      </div>
      <div className="card-divider"></div>
    </div>
  );
};

export default function AccordinPage() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [creditCardBox, setCreditCardBox] = useState(false);

  const handlePaymentDetails = () => {
    setCreditCardBox(true);
  };
  const [debitCardBox, setDebitCardBox] = useState(false);

  const handleDebitCardDetails = () => {
    setDebitCardBox(true);
  };

  const [upiDataBox, setUpiDataBox] = useState(false);

  const handleUpiPayments = () => {
    setUpiDataBox(true);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Choose Your Plan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="payment-checkbox-container">
            <div className="payment-checkbox-card">
              <input
                type="checkbox"
                id="packages"
                // checked={packages.basic}
                name="basic"
                // onChange={handlePackages}
              />
              <label for="basic">Basic Plan</label>
            </div>
            <div className="payment-checkbox-card">
              <input
                type="checkbox"
                id="packages"
                // checked={packages.standard}
                name="standard"
                // onChange={handlePackages}
              />
              <label for="standard">Standard Plan</label>
            </div>
            <div className="payment-checkbox-card">
              <input
                type="checkbox"
                id="packages"
                // checked={packages.premium}
                name="premium"
                // onChange={handlePackages}
              />
              <label for="premium">Premium Plan</label>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Payment Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="payment2-order-title">Order Summary</p>
          <div className="payment2-order-container">
            <div className="payment2-order-item">
              <p className="payment2-order-label">Plan Cost :</p>
              <p className="payment2-order-cost">Rs. 666/-</p>
            </div>
            <div className="payment2-order-item">
              <p className="payment2-order-label">GST :</p>
              <p className="payment2-order-cost">18%</p>
            </div>
            <div className="payment2-order-item">
              <p className="payment2-order-label">Total Cost (incl. GST)</p>
              <p className="payment2-order-cost">Rs. 785.88/-</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Payment Methods</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "100%",
            height: "250px",
            overflowY: "scroll",
          }}
        >
          <div className="payment-cards">
            <p className="payment-card-title">Choose your Credit Card</p>
            <div className="payment-credit-card">
              {creditCardData.map((item) => (
                <img
                  src={item.img}
                  className="credit-card-payment"
                  onClick={handlePaymentDetails}
                />
              ))}
            </div>
            {creditCardBox && <CardDetails />}
          </div>
          <div className="card-divider"></div>
          <div className="payment-cards">
            <p className="payment-card-title">Choose your Debit Card</p>
            <div className="payment-credit-card">
              {creditCardData.map((item) => (
                <img
                  src={item.img}
                  className="credit-card-payment"
                  onClick={handleDebitCardDetails}
                />
              ))}
            </div>
          </div>
          {debitCardBox && <CardDetails />}
          <div className="card-divider"></div>
          <div className="payment-cards">
            <p className="payment-card-title">Make an UPI Payment</p>
            <div className="payment-credit-card">
              {creditCardData.map((item) => (
                <img
                  src={phonePay}
                  className="credit-card-payment"
                  onClick={handleUpiPayments}
                />
              ))}
            </div>
          </div>
          {upiDataBox && (
            <div>
              <div className="upi-card-item">
                <label for="upipayment"
                className="payment-card-label">Enter your UPI ID</label>
                <input
                  placeholder="UPI ID"
                  className=" upi-card-input"
                />
              </div>
              <div className="upi-container">
                <button className="upi-submit">
                  Submit Details
                </button>
              </div>
            </div>
          )}
          <div className="card-divider"></div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
