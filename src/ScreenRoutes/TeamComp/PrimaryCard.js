import React from 'react';
import './index2.css';

function PrimaryCard({item}) {
  return (
    <div className='primary-card-container'>
        <img src={item.url} alt="profileImage" className="profile-image3" />
        <p className='secondary-card-name'>{item.profileName}</p>
        <p className='secondary-card-design'>{item.profileDesign}</p>
        <p className='primary-card-description'>{item.description}</p>
    </div>
  )
}

export default PrimaryCard