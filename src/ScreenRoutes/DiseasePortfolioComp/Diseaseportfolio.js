import React, { useState } from "react";
import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppTitle from "../../ReusableComponents/AppTitle";

import TabItems from "./TabItems";
import image1 from "./Assests/portfolio-1.jpg";
import image2 from "./Assests/portfolio-2.jpg";
import image3 from "./Assests/portfolio-3.jpg";
import image4 from "./Assests/portfolio-4.jpg";
import image5 from "./Assests/portfolio-6.jpg";
import image6 from "./Assests/portfolio-7.jpg";
import image7 from "./Assests/portfolio-8.jpg";

const allData = [
  {
    id: "1",
    type: "TBI",
    disease: "Traumatic Brain Injury",
    url: image1,
    flipped: false,
  },
  {
    id: "2",
    type: "TBI",
    disease: "fMRI",
    url: image2,
    flipped: false,
  },
  {
    id: "3",
    type: "TBI",
    disease: "Prevalence",
    url: image3,
    flipped: false,
  },
  {
    id: "4",
    type: "STROKE",
    disease: "Brain Stroke",
    url: image4,
    flipped: false,
  },
  {
    id: "5",
    type: "BRAIN STROKE",
    disease: "Symptoms",
    url: image6,
    flipped: false,
  },
  {
    id: "6",
    type: "Epidemiology",
    disease: "Brain Stroke Prevalence",
    url: image5,
    flipped: false,
  },
  {
    id: "7",
    type: "Hearable",
    disease: "Music Therapy",
    url: image7,
    flipped: false,
  },
];

function Diseaseportfolio() {
  // portfolio Data stored in state
  const [portfolioData, setPortfolioData] = useState(allData);
 // portfolio data slpit between tabs
  const tbiData = portfolioData.filter((item) => item.type == "TBI");
  const strokeData = portfolioData.filter((item) => item.type != "TBI");
  // Tab 1 always shows all the data
  const [value, setValue] = React.useState("1");
  // Tab 1 always shows all the data
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Data goes back to default with toggle tabs
    setPortfolioData(allData);
  };

  //  only one item stays flipped at a time

  const handleCLick = (id) => {
    let flippedData = portfolioData.map((item) =>{
      if(item.id === id){
        return {
          ...item,
          flipped : true,
        }
      }else{
        return{
          ...item,
          flipped : false,
        }
      }
    });
    setPortfolioData(flippedData);
  }
  // Flipping back to normal state
    
  const handleFlipBack = () => {
    let flippedData = portfolioData.map((item) =>{
        return {
          ...item,
          flipped : false,
        }
    });
    setPortfolioData(flippedData);
  };



  return (
    <Box sx={{ marginTop: "120px" }}>
      <AppTitle title="Our Disease Portfolio" />

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="All" value="1" />
              <Tab label="Traumatic Brain Injury" value="2" defaultChecked />
              <Tab label="Stroke" value="3" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {portfolioData.map((item) => (
              <TabItems item={item}
              clickHandler={handleCLick} 
              clickFlipBack={handleFlipBack}/>
            ))}
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {tbiData.map((item) => (
              <TabItems item={item}
              clickHandler={handleCLick}
              clickFlipBack={handleFlipBack} />
            ))}
          </TabPanel>
          <TabPanel
            value="3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {strokeData.map((item) => (
              <TabItems item={item}
              clickHandler={handleCLick}
              clickFlipBack={handleFlipBack} />
            ))}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default Diseaseportfolio;
