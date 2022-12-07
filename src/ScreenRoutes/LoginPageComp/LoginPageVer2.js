import React from "react";
import AppTitle from "../../ReusableComponents/AppTitle";

import synapsilLogo from "./Assests/synapsil-logo.png";
import qr from "./Assests/qrcode.png";
import login from "./Assests/login.jpg";

import "./index2.css";
import colors from "../../DefaultColors";
import AppLoginInput from "../../ReusableComponents/AppLoginInput";
import AppButtonRound from "../../ReusableComponents/AppButtonRound";

const leftContainer = {
  hidden: {
    x: "-100vw",
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: "0.2",
      stiffness: 40,
      ease: "easeInOut",
    },
  },
};
const rightContainer = {
  hidden: {
    x: "100vw",
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: "0.2",
      stiffness: 40,
      ease: "easeInOut",
    },
  },
};

function LoginPageVer2() {
  const [patient, setPatient] = React.useState(false);
  const [doctor, setDoctor] = React.useState(true);
  const [hospital, setHosital] = React.useState(false);

  const handlePatient = () => {
    setPatient(true);
    setDoctor(false);
    setHosital(false);
  };

  const handleDoctor = () => {
    setPatient(false);
    setDoctor(true);
    setHosital(false);
  };
  const handleHospital = () => {
    setPatient(false);
    setDoctor(false);
    setHosital(true);
  };

  return (
    <div className="login-container-new">
      <img src={synapsilLogo} alt="synpasil-logo" className="synpasil-image" />
      <div className="main-container">
        <div className="main-container-left">
          <p className="login-title">Login Page</p>
              <p className="login-welcome-message">
                Welcome back!
              </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap : "30px",
              margin : '25px',
            }}
          >
            <img src={login} alt="loginimage" className="login-image-left" />
            <div>
            <p className="guidance-message">
              If you have a problem logging in, please send an email to
              support@lynx.care
            </p>
            <span className="guidance-message">or</span>
            <button className="left-button">Watch introduction movie</button>

            </div>
          </div>
        </div>
        <div className="main-container-right">
          <div className="left-container-toggleItem">
            <div className="toggle-buttons">
              <p
                onClick={handlePatient}
                style={{
                  fontSize: patient && "0.9rem",
                  backgroundColor: patient && colors.primaryWhite,
                  color: patient && colors.navy,
                }}
              >
                Patient Login
              </p>
              <p
                style={{
                  fontSize: doctor && "0.9rem",
                  backgroundColor: doctor && colors.primaryWhite,
                  color: doctor && colors.navy,
                }}
                onClick={handleDoctor}
              >
                Doctor's Login
              </p>
              <p
                style={{
                  fontSize: hospital && "0.9rem",
                  backgroundColor: hospital && colors.primaryWhite,
                  color: hospital && colors.navy,
                }}
                onClick={handleHospital}
              >
                Hospital Login
              </p>
            </div>
          </div>
          <div className="toggle-login-options">
            {patient && (
              <div className="patients-login-content">
                <img src={qr} alt="qr-code" className="qr-code" />
                <p className="patients-info-text">
                  To access patient Services download the app on google play. If
                  you already have the app, simply Login.
                </p>
              </div>
            )}

            {doctor && (
              <div className="doctors-login-content">
                <AppLoginInput
                  labelText="User Name (Doctor's)"
                  placeholder="User Name"
                />
                <AppLoginInput
                  labelText="Password"
                  placeholder="Password"
                  password={true}
                />
                <button className="synpasil-login-button">Login</button>
              </div>
            )}

            {hospital && (
              <div className="doctors-login-content">
                <AppLoginInput
                  labelText="User Name (Hospital)"
                  placeholder="User Name"
                />
                <AppLoginInput
                  labelText="Password"
                  placeholder="Password"
                  password={true}
                />
                <button className="synpasil-login-button">Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageVer2;
