import React from 'react'
import {motion} from 'framer-motion';


const pathContainer = {
  hidden : {
    opacity : 0,
    pathLength : 0,
    scale: 0.6,
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    scale: 1,
    transition : {
      type : "tween",
      duration : 2,
      delay : 0.5,
      ease : "easeOut",
    }
  }
}
let strokeWidth = 5;

function LoaderPage() {
  return (
    <div>
  

    </div>
  )
}

export default LoaderPage