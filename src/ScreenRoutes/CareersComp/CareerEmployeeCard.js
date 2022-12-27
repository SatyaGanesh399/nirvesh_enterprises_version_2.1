import React from 'react'

function CareerEmployeeCard({item}) {
  return (
    <div
    className='career-employee-card'
    key={item.id}>
        <img src={item.img} className="career-employee-video-image"/>
        <p
        className="career-employee-video-title">{item.title}</p>
        <p
        className="career-employee-video-sub-title">{item.subTitle}</p>
    </div>
  )
}

export default CareerEmployeeCard