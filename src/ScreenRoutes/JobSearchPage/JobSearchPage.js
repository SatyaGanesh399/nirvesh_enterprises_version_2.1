import React, { useState, useEffect } from "react";
import "./JobSearchPage.css";
import AppTitle from "../../ReusableComponents/AppTitle";
import JobSearchFilter from "./JobSearchFilter";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircularProgress from '@mui/material/CircularProgress';

import { BsSearch } from "react-icons/bs";
import { oppertunitiesData } from "./JobOppertunitiesData";
import JobCard from "./JobCard";
import AppSubHeading from "../../ReusableComponents/AppSubHeading";
import JobDescriptionCard from "./JobDescriptionCard";

function JobSearchPage() {
  // All job oppertunities
  const [jobs, setJobs] = useState([...oppertunitiesData]);
  console.log(jobs);
  const [jobsCount, setJobsCount] = useState(1);
  const [showJobs, setShowJobs] = useState([]);

  // Loader
  const [loader, setLoader] = useState(true);
  useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{
      setLoader(false);
    },3000)
  },[jobsCount])

  // All job oppertunity experiences

  const experienceData = jobs.map(
    (item) => item.experience[0] + " to " + item.experience[1]
  );
  const [experiences, setExperiences] = useState(experienceData);

  // All job oppertunity locations

  const locationData = jobs.map((item) => item.location);
  const uniqueLocation = [];
  for (let i = 0; i < locationData.length; i++) {
    for (let j = i; j < locationData.length; j++) {
      if (uniqueLocation.length === 0) {
        uniqueLocation.push(locationData[i]);
      } else if (locationData[i] !== locationData[j]) {
        uniqueLocation.push(locationData[i]);
      }
    }
  }
  const [locations, setLocations] = useState(uniqueLocation);

  // All job oppertunity positions

  const positionData = oppertunitiesData.map((item) => item.position);

  const [positions, setPositions] = useState(positionData);

  // All job oppertunity Departments

  const departmentData = oppertunitiesData.map((item) => item.department);

  const [departments, setDepartments] = useState(departmentData);

  // pagination effect on change in data

  const handlePagination = (event, pageNumber) => {
    setJobsCount(parseInt(pageNumber));
  };

  useEffect(() => {
    if (jobsCount > 1) {
      let filteredData = [];
      for (let i = (jobsCount - 1) * 5 - 1; i < jobsCount * 5 - 1; i++) {
        if (jobs[i]) {
          filteredData.push(jobs[i]);
        }
      }
      setShowJobs(filteredData);
    } else {
      setShowJobs([jobs[0], jobs[1], jobs[2], jobs[3], jobs[4]]);
    }
  }, []);

    // Modal open close 
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpenItem = (item) => {
    setModalData(item);
  }

  return (
    <div className="job-search-container">
      <div className="job-search-header">
        <h2 className="job-search-title">Job Opportunities</h2>
        <p className="job-search-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <AppTitle title="We are hiring" />
      <AppSubHeading
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <div className="job-search-filters-group">
        <JobSearchFilter placeHolder="Job Title" data={positions} />
        <JobSearchFilter placeHolder="Experience" data={experiences} />
        <JobSearchFilter placeHolder="Department" data={departments} />
        <JobSearchFilter placeHolder="Location" data={locations} />
        <button className="job-search-button">
          <BsSearch className="search-button-icon" /> Search
        </button>
      </div>
      <JobDescriptionCard show={show} item={modalData} handleClose={handleClose} />
      <div className="job-oppertunities-description">
      {loader && <CircularProgress
      sx={{marginTop : "150px"}}
      /> }
        { !loader && showJobs.map((item) => (
          <JobCard item={item} openModal={handleShow} handleOpenItem={handleOpenItem} />
        ))}

        <div className="career-search-pagination">
          <Stack spacing={2}>
            <Pagination
              size="large"
              color="primary"
              onChange={(event, pageNumber) =>
                handlePagination(event, pageNumber)
              }
              count={(jobs.length / 5).toFixed()}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default JobSearchPage;
