import React from 'react'
import './index.css';

function AppInputWithLabel({labelText, placeholder, width}) {
  return (
    <div style={{width : width, marginBottom : '20px'}}>
      <p className='input-text-label'>{labelText}</p>
      <input type="text" placeholder={placeholder} className='input-text'/>
    </div>
  )
}

export default AppInputWithLabel