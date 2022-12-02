import React from 'react'
import './index.css';

import colors from '../../DefaultColors';

function CubeItem({item}) {
  return (
    <div style ={{
        width : '100%',
        height : '100%',
        borderRadius : '20px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }}>
        <p className='cube-text'>{item.text}</p>
    </div>
  )
}

export default CubeItem