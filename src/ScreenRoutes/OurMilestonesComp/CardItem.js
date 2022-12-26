import React from "react";
import "./index.css";

import colors from "../../DefaultColors";

import { Box, Typography } from "@mui/material";

function CardItem(props) {
  return (
    <div
      key={props.item.id}
      className="milestones-card-container"
    >
      <span class="material-symbols-rounded card-icon">{props.item.icon}</span>
      <Typography
        sx={{
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: colors.dark,
        }}
      >
        {props.item.subHeading}
      </Typography>
      <Typography
        sx={{ padding: "10px", fontSize: "16px", color: colors.dark }}
      >
        {props.item.description}
      </Typography>
    </div>
  );
}

export default CardItem;
