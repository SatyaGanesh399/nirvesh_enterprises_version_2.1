import React from 'react'
import client1 from '../../Assets/client-1.png'
import client2 from '../../Assets/client-2.png'
import client3 from '../../Assets/client-3.png'
import client4 from '../../Assets/client-4.png'
import client5 from '../../Assets/client-5.png'
import client6 from '../../Assets/client-6.png'

import './index.css'

function SupportedBy() {
  return (
    <div>
      <p></p>
    <div className='supportedImages'>
        <img src={client1} width='100px' height='60px' alt="client-images"/>
        <img src={client2} width='65px' height='60px' alt="client-images"/>
        <img src={client3} width='65px' height='60px' alt="client-images"/>
        <img src={client4} width='95px' height='60px' alt="client-images"/>
        <img src={client5} width='120px' height='60px' alt="client-images"/>
        <img src={client6} width='120px' height='90px' alt="client-images"/>
    </div>
    </div>
  )
}

export default SupportedBy