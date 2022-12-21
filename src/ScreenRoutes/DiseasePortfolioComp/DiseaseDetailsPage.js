import React from "react";
import "./DiseasePortfolio.css";
import { useParams, useNavigate } from "react-router-dom";
import allData from "./DiseasePortfolioData";

function DiseaseDetailsPage() {
  const { id } = useParams();
  const itemId = id;

  const otherLinks = allData.filter((item) => item.id != itemId);

  const navigation = useNavigate();

  const handleNavigation = (diseaseId)=>{
    // navigate(`detailspage/${diseaseId}`);
    navigation(`/detailspage/${diseaseId}`);
  }
  return (
    <div className="details-page">
      <div className="disease-header">
      <h2>{allData[itemId-1].disease}</h2>
      </div>
      <div className="disease-details-description">
        <div className="disease-description-left">
          <ul>
            {otherLinks.map((item) => (
              <li onClick={()=>handleNavigation(item.id)}>{item.disease}</li>
            ))}
          </ul>
        </div>
        <div className="disease-description-right">
          
          <p style={{whiteSpace: "pre-line"}}>
          {allData[id-1].description}
          </p>
        </div>
      </div>
      <div className="disease-conclusion"></div>
    </div>
  );
}

export default DiseaseDetailsPage;
