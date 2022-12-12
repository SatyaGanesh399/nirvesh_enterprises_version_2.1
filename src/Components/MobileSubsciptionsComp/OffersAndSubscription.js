import React from 'react'
import { TiTick } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";

import {subscriptionData } from "./Data";
import colors from '../../DefaultColors';
import './MobileSubscription.css'
import AppButtonRound from "../../ReusableComponents/AppButtonRound";


// Subscription card component for prices
const subscriptionCard = (item) => {
    return (
      <div
        style={{
          marginTop: item.id === "3" ? "0" : "100px",
          backgroundColor : colors.white
        }}
        className="subscription-card-container"
      >
        <div
          style={{
            // backgroundColor:
            //   item.id === "3"
            //     ? colors.blue
            //     : colors.blue
          }}
          className="subscription-title-header"
        >
          <p className="subscription-title">{item.title}</p>
          <p className="subscription-cost">{item.cost}</p>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <table>
              <tr>
              <th style={{color : colors.dark}}>Service</th>
              <th style={{color : colors.dark}}>Available</th>
              </tr>
              {item.advantages.map((listItem, index) =>
              <tr>
                  <td style={{color : colors.dark}}>{listItem}</td>
                  <td>{item.accesable[index] === 1 ? <TiTick size={24} color='green' /> : <TiDelete size={24} color='red' />}</td>
              </tr>)}
          
              </table>
              {item.id === "2" && (
            <AppButtonRound
            text="Subscribe"
            width="80%"
            bgColor={colors.navy}
            border={colors.navy}
          />
          )}
          {item.id === "3" && (
            <AppButtonRound
              text="Subscribe"
              width="80%"
              bgColor={colors.navy}
              border={colors.navy}
            />
          )}
          {item.id === "1" && (
            <AppButtonRound
              text="Subscribe"
              width="80%"
              bgColor={colors.navy}
              border={colors.navy}
            />
          )}
        </div>
      </div>
    );
  };
  

function OffersAndSubscription() {
  return (
    <div className="offers-subscription-content">
        <p className="subscription-maintitle">Offers & Subscriptions</p>
        <div className="mobile-subscription-benefits">
          {subscriptionData.map((item) => subscriptionCard(item))}
        </div>
      </div>
  )
}

export default OffersAndSubscription