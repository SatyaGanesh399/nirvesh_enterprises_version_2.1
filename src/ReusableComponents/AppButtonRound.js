import React, { useState } from 'react'
import './index.css'

function AppButtonRound({text, bgColor, border, width}) {
    const [toggle, setToggle] = useState(false);

    const toggleClasses = () =>{
        setToggle(!toggle);
    }
  return (
    <button className="app-button-round"
    onMouseEnter={toggleClasses}
    onMouseLeave={toggleClasses}
     style={{backgroundColor : !toggle ? bgColor : 'transparent', 
        borderColor: border,
        color : toggle && border,
        width : width}}>{text}</button>
  )
}

export default AppButtonRound;