import React from "react";
import "./index.css";

import colors from "../../DefaultColors";

import { Box, Typography } from "@mui/material";

function CardItem(props) {
  return (
    <Box
      key={props.item.id}
      sx={{
        width: "250px",
        minHeight: "350px",
        borderRadius: "10px",
        margin: "15px",
        padding : '10px',
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <span class="material-symbols-rounded card-icon">{props.item.icon}</span>
      <Typography
        sx={{
          padding: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: colors.navy,
        }}
      >
        {props.item.subHeading}
      </Typography>
      <Typography
        sx={{ padding: "10px", fontSize: "16px", color: colors.dark }}
      >
        {props.item.description}
      </Typography>
    </Box>
  );
}

export default CardItem;
