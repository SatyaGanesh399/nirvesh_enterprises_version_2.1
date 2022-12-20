import React from 'react';
import './index2.css';

function SecondaryCard({item}) {
  return (
    <div className='secondary-card-container'>
        <img src={item.url} alt="profileImage" className="profile-image2" />
        <p className='secondary-card-name'>{item.profileName}</p>
        <p className='secondary-card-design'>{item.profileDesign}</p>
    </div>
  )
}

export default SecondaryCard