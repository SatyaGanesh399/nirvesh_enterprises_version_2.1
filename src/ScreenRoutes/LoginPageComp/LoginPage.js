import React from "react";
import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import './index.css'
import synapsilLogo from './Assests/synapsil-logo.png'
import qr from './Assests/qrcode.png'
import {motion} from 'framer-motion';

import colors from "../../DefaultColors";
import AppInputWithLabel from '../../ReusableComponents/AppInputWithLabel';

const leftContainer = {
    hidden : {
        x : '-100vw',
        opacity : 0,
        scale : 0,
    },
    visible : {
        x : 0,
        opacity : 1,
        scale : 1,
        transition : {
            type : 'spring',
            delay : '0.2',
            stiffness : 40,
            ease : 'easeInOut'
        },
    },
}
const rightContainer = {
    hidden : {
        x : '100vw',
        opacity : 0,
        scale : 0,
    },
    visible : {
        x : 0,
        opacity : 1,
        scale : 1,
        transition : {
            type : 'spring',
            delay : '0.2',
            stiffness : 40,
            ease : 'easeInOut'
        },
    },
}

function LoginPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    sx={{
        marginTop: "100px",
        width : '100%',
        marginBottom : '50px'

    }}>
        <Typography
          sx={{
            fontSize: "30px",
            color: '#048cdc',
            textAlign: "center",
            fontWeight : '500',
            margin: "30px",
            marginBottom : '40px'
          }}
        >Welcome to synpasil Login</Typography>

    <Box
      sx={{
        width : '100%',
        display : 'flex'
      }}
    >
      <Box
      component={motion.div}
      variants={leftContainer}
      initial = 'hidden'
      animate = 'visible' 
      className="login-leftCard">
        <img src={synapsilLogo} alt='synpasilLogo' className='synapsil-logo' />
      </Box>
      <Box
      component={motion.div}
      variants={rightContainer}
      initial = 'hidden'
      animate = 'visible' 
      className="login-rightCard">
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="Login Toggle"
              centered
            >
              <Tab label="Patient" value="1"/>
              <Tab label="Doctor" value="2" defaultChecked />
              <Tab label="Hospital" value="3" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
            sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                width : '100%',
                height : '100%',
                gap : '30px',
                padding : '30px',
                minHeight : '250px'
            }}>
                <Box
                sx={{width : '250px',
                height : '200px',}}>
                  <img src={qr} alt='qrcode' width='200px' height= '200px' />
                </Box>
                <Typography
                sx={{
                    color : colors.grey,
                }}
                >
                To access patient Services download the app on google play. If you already have the app, simply Login.
                <br/>
                <br/>
                For all the patients it is adviced to kindly login from synpasil mobile application
                </Typography>
            </Box>
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
            <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'flex-start',
                width : '100%',
                height : '100%',
                padding : '30px',
                minHeight : '250px',
            }}>
                <Box
                sx={{
                    marginTop : '-30px',
                    width : '100%'
                }}
                >
                    <Typography
                    sx={{
                        width : '85%',
                        fontSize : '20px',
                        color : colors.grey,
                        borderBottom : '1px solid lightgrey',
                        padding : '10px',
                        marginBottom : '30px',
                        fontWeight : '500'
                        
                    }}
                    >Doctor's Login</Typography>
                </Box>
                <Box
                sx={{
                    width : '100%',
                    height : '100%',
                }}>
                <AppInputWithLabel text = 'Username'
                placeHolder='User Name' />
                </Box>
                <Box
                sx={{
                    width : '100%',
                    height : '100%',
                }}>
                <AppInputWithLabel text = 'Password'
                placeHolder='Password' />
                </Box>
                <Box 
                sx={{
                    width : '100%',
                    height : '100%',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'flex-end'
                }}>
                <button className="login-button">Login</button>
                </Box>
            </Box>
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
            <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'flex-start',
                width : '100%',
                height : '100%',
                padding : '30px',
                minHeight : '250px',
            }}>
                <Box
                sx={{
                    marginTop : '-80px',
                    width : '100%'
                }}
                >
                    <Typography
                    sx={{
                        width : '85%',
                        fontSize : '20px',
                        color : colors.grey,
                        borderBottom : '1px solid lightgrey',
                        padding : '10px',
                        marginBottom : '30px',
                        fontWeight : '500'
                    }}
                    >Hospital Login</Typography>
                </Box>
                <Box
                sx={{
                    width : '100%',
                    height : '100%',
                }}>
                <AppInputWithLabel text = 'Username' placeHolder='User Name' />
                </Box>
                <Box
                sx={{
                    width : '100%',
                    height : '100%',
                }}>
                <AppInputWithLabel text = 'Password'
                placeHolder='Password' />
                </Box>
                <Box 
                sx={{
                    width : '100%',
                    height : '100%',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'flex-end'
                }}>
                <button className="login-button">Login</button>
                </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
    </Box>
  );
}

export default LoginPage;
