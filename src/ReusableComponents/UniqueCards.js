import React, {useState} from 'react'
import './index.css';
import {BsChevronDown} from 'react-icons/bs';
import {BsChevronUp} from 'react-icons/bs';

function UniqueCards({number, title, description, bgColor, textColor}) {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () =>{
    setDropDown(!dropDown);
  }
  return (
    <div className='card-container'>
        <p className='card-number'>{number}</p>
        <p className='card-title'>{title}</p>
        {dropDown &&<p className='card-description'>{description}</p>}
        { !dropDown && <BsChevronDown size={20} className="chevron-down" onClick={toggleDropDown}/>}
        { dropDown && <BsChevronUp size={20} className="chevron-down" onClick={toggleDropDown}/>}
    </div>
  )
}

export default UniqueCards