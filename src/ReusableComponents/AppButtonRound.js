import React, { useState } from 'react'
import './index.css'


function AppButtonRound({text, bgColor, border, width, textColor, afterClick}) {
    const [toggle, setToggle] = useState(false);

    const toggleClasses = () =>{
        setToggle(!toggle);
    }

    const handleClick = () =>{
      afterClick();
    }
  return (
    <button className="app-button-round"
    onMouseEnter={toggleClasses}
    onMouseLeave={toggleClasses}
    onClick={afterClick}
     style={{backgroundColor : !toggle ? bgColor : 'transparent', 
        borderColor: border,
        color : toggle && border,
        width : width}}>{text}</button>
  )
}

export default AppButtonRound;