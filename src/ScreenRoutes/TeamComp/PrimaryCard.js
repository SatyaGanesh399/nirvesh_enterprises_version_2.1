import React from 'react';
import './index2.css';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

function PrimaryCard({item}) {
  return (
    <div className='primary-card-container'>
        <img src={item.url} alt="profileImage" className="profile-image3" />
        <p className='primary-card-description'>{item.description}</p>
        <p className='secondary-card-name'>{item.profileName}</p>
        <p className='secondary-card-design'>{item.profileDesign}</p>
        <div className='social-media-accounts3'>
          <BsLinkedin className="social-media-icons3" />
          <AiFillInstagram className="social-media-icons3" />
          <BsTwitter className="social-media-icons3" />
      </div>
    </div>
  )
}

export default PrimaryCard