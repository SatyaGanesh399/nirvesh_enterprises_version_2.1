import React, {useState} from 'react'
import './index.css';
import colors from '../DefaultColors';

function UniqueCards({number, title, description, bgColor, textColor, special}) {

  return (
    <div className='card-container'
    style={{scale : special && "1.08", backgroundColor : special && colors.blue}}
    key={number}>
        <p className='card-number'
        style={{color : special && colors.white}}
        >{number}</p>
        <p className='card-title'
        style={{color : special && colors.white}}
        >{title}</p>
        <p className='card-description'
        style={{color : special && colors.white}}
        >{description}</p>
    </div>
  )
}

export default UniqueCards