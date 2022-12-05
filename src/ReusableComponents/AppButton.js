import React from 'react'
import './index.css'
import colors from '../DefaultColors'

function AppButton({text, bgColor, border}) {
  return (
    <button className="app-button" style={{backgroundColor : bgColor, border: border}}>{text}</button>
  )
}

export default AppButton