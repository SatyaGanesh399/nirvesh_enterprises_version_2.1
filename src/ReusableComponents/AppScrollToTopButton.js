import React, { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import colors from '../DefaultColors';

function AppScrollToTopButton() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY >100){
                setBackToTop(true)
            }else{
                setBackToTop(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth",
        })
    }


  return (
    <div 
    className='scroll-to-top'
    onClick={scrollUp}>
        {backToTop && <BsFillArrowUpCircleFill color={colors.navy} size={40} />}
    </div>
  )
}

export default AppScrollToTopButton