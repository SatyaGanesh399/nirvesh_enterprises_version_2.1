import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Button
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import colors from '../../DefaultColors';

const provide = [
  "End-to-End cost effective Post-operative Brain health Management system",
  "Targeted cognitive status classification algorithm > 80% accuracy",
  "Beneficial Interventions (Audio-Visual Training) to improve well-being",
  "Multimodal data collection and continuous analysis",
];

function AboutUs() {
  return (
    <Box sx={{ margin: "auto", padding : '20px'}}>
      <Typography
        variant="h5"
        sx={{ fontSize: "24px", fontWeight: "bold", color: "primary.light" }}
        align="center"
        gutterBottom
      >
        About Us
      </Typography>
      <Box sx={{ margin: "10px" }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "16px", fontWeight: "medium", color: "grey" }}
          align="center"
        >
          We are a team of 45 persons' years with good combination of experience
          and skills across Neuroscience, Biomedical sciences and
          Neuropsychiatry
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <List>
          <ListSubheader
            align="center"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            We Provide
          </ListSubheader>
          {provide.map((item) => {
            return (
              <ListItem>
                <ListItemIcon>
                  <ArrowRightOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ color: "grey" }} />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontSize: "16px", fontWeight: "medium", color: "grey" }}
          align="center"
        >
          With the strong need for evidence-based diagnostic technology as a
          complementary to existing technology likely to include a multimodal
          approach and consolidates it in a holistc report with a wide range of
          compliance rates of assessmennt tools with better accuracy. Our
          mission is to redefine neurohealth and serve as unique solution for
          all rehabilitation centers / organizations looking to take control of
          their patient's health.
        </Typography>
      </Box>
      <Box sx={{display : 'flex', alignItems : 'center', width : '100%', justifyContent : 'center', margin : '15px'}}>
      <Button variant="outlined" 
      endIcon={<PlayArrowIcon sx={{color : colors.lighter}} />}>
        Know More
      </Button>
        </Box>
    </Box>
  );
}

export default AboutUs;
