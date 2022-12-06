import React from "react";
import './Achieved.css';
import AppTitle from "../../ReusableComponents/AppTitle";

function Achieved() {
  return (
    <div className="achieved-container">
      <AppTitle title="What we have acheieved so far" />
      <div className="achieved-content">
        <p>Clients</p>
        <p>Projects</p>
        <p>Datasets</p>

      </div>
    </div>
  );
}

export default Achieved;
