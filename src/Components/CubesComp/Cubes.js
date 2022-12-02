import React from 'react'
import colors from '../../DefaultColors'
import CubeItem from './CubeItem'

const cubeData = [
    {
        id:"1",
        bgColor : colors.blue,
        width : '200px',
        height : '200px',
        text : 'About'
    },
    {
        id:"2",
        bgColor : colors.red,
        width : '200px',
        height : '200px',
        text : 'About'
    },
    {
        id:"3",
        bgColor : colors.navy,
        width : '200px',
        height : '200px',
        text : 'About'
    },
    {
        id:"4",
        bgColor : colors.orange,
        width : '200px',
        height : '200px',
        text : 'About'
    },
    {
        id:"5",
        bgColor : colors.primaryWhite,
        width : '200px',
        height : '200px',
        text : 'About'
    },
]

function Cubes() {
  return (
    <div className="grid-container">
        {cubeData.map((item) => 
        <div className='cube-container'>
            <CubeItem item ={item} />
        </div>)}
    </div>
  )
}

export default Cubes