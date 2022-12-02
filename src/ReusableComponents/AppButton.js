import React from 'react'
import './index.css'
import colors from '../DefaultColors'

function AppButton({text, bgColor = colors.blue}) {
  return (
    <button className="app-button" style={{backgroundColor : bgColor}}>{text}</button>
  )
}

export default AppButton