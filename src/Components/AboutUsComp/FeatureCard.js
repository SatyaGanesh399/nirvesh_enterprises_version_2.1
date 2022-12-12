import React from 'react'
import './index.css'

function FeatureCard({item}) {
  return (
    <div className='feature-card'>
        <span className="material-symbols-rounded feature-icon" >{item.icon}</span>
        <p className='feature-description'>{item.text}</p>
    </div>
  )
}

export default FeatureCard