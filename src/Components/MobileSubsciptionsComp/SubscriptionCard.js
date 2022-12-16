import React from 'react'
import AppButtonRound from "../../ReusableComponents/AppButtonRound";
import { TiTick } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";
import colors from "../../DefaultColors";


function SubscriptionCard({item}) {
  return (

        <div
      style={{
        backgroundColor: colors.white,
      }}
      className="subscription-card-container"
    >
      <div className="subscription-title-header">
        <p className="subscription-title">{item.title}</p>
        <p className="subscription-cost">{item.cost}</p>
      </div>
      <div style={{ paddingTop: "30px" }}>
        <table>
          <tr>
            <th style={{ color: colors.dark }}>Service</th>
            <th style={{ color: colors.dark }}>Available</th>
          </tr>
          {item.advantages.map((listItem, index) => (
            <tr>
              <td style={{ color: colors.dark }}>{listItem}</td>
              <td>
                {item.accesable[index] === 1 ? (
                  <TiTick size={24} color="green" />
                ) : (
                  <TiDelete size={24} color="red" />
                )}
              </td>
            </tr>
          ))}
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
  )
}

export default SubscriptionCard