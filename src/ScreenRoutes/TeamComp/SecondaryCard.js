import React from 'react';
import './index2.css';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

function SecondaryCard({item}) {
  return (
    <div 
    className='secondary-card-container'>
        <img src={item.url} alt="profileImage" className="profile-image2" />
        <p className='secondary-card-name'>{item.profileName}</p>
        <p className='secondary-card-design'>{item.profileDesign}</p>
<div className='social-media-accounts2'>
          <BsLinkedin className="social-media-icons2" />
          <AiFillInstagram className="social-media-icons2" />
          <BsTwitter className="social-media-icons2" />
      </div>
    </div>
  )
}

export default SecondaryCard