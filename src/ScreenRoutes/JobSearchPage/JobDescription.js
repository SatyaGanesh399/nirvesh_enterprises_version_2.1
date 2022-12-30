import React from 'react'
import './JobSearchPage.css';

function JobDescription({title, description, skills, experience}) {
  return (
    <div className='job-item-container'>
        <p className='job-item-title'>{title}</p>
        { (!skills && !experience) && <p className='job-item-description'>{description}</p> }
        { experience && <p className='job-item-description'>{description[0]} - {description[1]} years</p> }
        { skills && <p className='job-item-description'>
          {
            description.map(item => <span>{item} </span>)
          }
          </p>}
    </div>
  )
}

export default JobDescription;