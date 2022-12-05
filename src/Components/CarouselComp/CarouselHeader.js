import "./index.css";
import Carousel from "react-bootstrap/Carousel";
import colors from '../../DefaultColors'
import innovation from './Assets/innovation.png';
import dataTracking from './Assets/dataTracking.png';
import costEffective from './Assets/costEffective.png';


function CarouselHeader() {
  return (
    <Carousel slide={false} className="carousel-component">
      <Carousel.Item>
        <div 
        style={{backgroundColor : '#7895B2', width : '100%', height : '80vh'}}>
          <div className='banner-content'>
            <div className="text-content">
              <p className='heading-content'>Cost Effective Treatment</p>
              <p className='subHeading-content'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img src={costEffective} alt='banner-image' className="costEffective-style" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
        style={{backgroundColor : colors.synpasilDark, width : '100%', height : '80vh'}}>
          <div className='banner-content'>
            <div className="text-content">
              <p className='heading-content'>Precise Data Tracking</p>
              <p className='subHeading-content'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img src={dataTracking} alt='banner-image' className="costEffective-style" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
        style={{backgroundColor : colors.blue, width : '100%', height : '80vh'}}>
          <div className='banner-content'>
            <div className="text-content">
              <p className='heading-content'>Innovative solution</p>
              <p className='subHeading-content'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <img src={innovation} alt='banner-image' className="costEffective-style brain-image" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
