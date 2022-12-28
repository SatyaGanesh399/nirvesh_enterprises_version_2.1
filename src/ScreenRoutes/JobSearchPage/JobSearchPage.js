import React, {useState} from 'react'
import './JobSearchPage.css';
import AppTitle from '../../ReusableComponents/AppTitle';
import JobSearchFilter from './JobSearchFilter';

import {BsSearch} from 'react-icons/bs';
import {oppertunitiesData} from './JobOppertunitiesData';
import JobCard from './JobCard';
import AppSubHeading from '../../ReusableComponents/AppSubHeading';

function JobSearchPage() {
    // All job oppertunities
    const [jobs, setJobs] = useState(oppertunitiesData);

    // All job oppertunity experiences

    const experienceData = jobs.map(item => item.experience[0] +" to "+ item.experience[1])
    const [experiences, setExperiences] =useState(experienceData);

    // All job oppertunity locations

    const locationData = jobs.map(item => item.location);
    const uniqueLocation = [];
    for(let i=0; i<locationData.length; i++){
        for(let j=i; j<locationData.length; j++){
            if(uniqueLocation.length === 0){
                uniqueLocation.push(locationData[i]);
            }else if(locationData[i] !== locationData[j]){
                uniqueLocation.push(locationData[i]);
            }
        }
    }
    const[locations, setLocations] = useState(uniqueLocation)

    // All job oppertunity positions

    const positionData = oppertunitiesData.map(item => item.position);
    

    const [positions, setPositions] = useState(positionData);

    // All job oppertunity Departments

    const departmentData = oppertunitiesData.map(item => item.department);

    const [departments, setDepartments] = useState(departmentData);


  return (
    <div className='job-search-container'>
        <div className='job-search-header'>
        <h2 className="job-search-title">Job Oppertunities</h2>
        <p className="job-search-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        </div>
        <AppTitle title="We are hiring" />
        <AppSubHeading text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <div className='job-search-filters-group'>
        <JobSearchFilter placeHolder="Job Title" data={positions}/>
        <JobSearchFilter placeHolder="Experience" data={experiences}/>
        <JobSearchFilter placeHolder="Department" data={departments}/>
        <JobSearchFilter placeHolder="Location" data={locations}/>
        <button className='job-search-button'>
           <BsSearch className='search-button-icon' /> Search</button>
        </div>
        <div className='job-oppertunities-description'>
            {jobs.map(item => <JobCard item={item} />)}
        </div>
    </div>
  )
}

export default JobSearchPage