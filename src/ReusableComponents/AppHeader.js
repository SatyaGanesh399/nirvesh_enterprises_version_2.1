import React from 'react'
import './index.css';

function AppHeader({image, title, subTitle}) {
  return (
    <div
    style={{
        backgroundImage: `linear-gradient(90deg,rgba(8, 83, 156, 1),rgba(79, 226, 191, 0.535)),url(${image})`}}
    class="app-header">
        <h2 className="app-header-title">{title}</h2>
        <p className="app-header-description">
          {subTitle}
        </p>
      </div>
  )
}

export default AppHeader