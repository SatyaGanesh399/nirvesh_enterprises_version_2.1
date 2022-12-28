import React from 'react'

function JobCard({item}) {
  return (
    <div className='job-card-container'>
      <div className='job-card-main-content'>
        <div className='job-card-position'>
          <p className='job-card-sub-heading'>Position</p>
          <p className='job-card-items'>{item.position}</p>
        </div>
        <div className='job-card-skills'>
        <p className='job-card-sub-heading'>Skills</p>
        <div className='job-card-skills'>
        {item.skills.map(skill => <p className='job-card-items'>{skill}</p>)}
        </div>
        </div>
        <div className='job-card-experience'>
        <p className='job-card-sub-heading'>Experience</p>
        <p className='job-card-items'>{item.experience[0]} to {item.experience[1]}</p>
        </div>
        <div className='job-card-department'>
        <p className='job-card-sub-heading'>Department
        </p>
        <p className='job-card-items'>{item.department}</p>
        </div>
        <div className='job-card-location'>
        <p className='job-card-sub-heading'>Location</p>
        <p className='job-card-items'>{item.location}</p>
        </div>
        <div className='job-card-dateposted'>
        <p className='job-card-sub-heading'>Published on</p>
        <p className='job-card-items'>{item.datePublished}</p>
        </div>

      </div>
      <button className='job-card-apply-button'>Apply</button>
    </div>
  )
}

export default JobCard