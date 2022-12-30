import "./index.css";
import Carousel from "react-bootstrap/Carousel";
import colors from "../../DefaultColors";
import innovation from "./Assets/innovation.png";
import dataTracking from "./Assets/data-tracking.png";
import costEffective from "./Assets/costEffective.png";
import {FaChevronRight} from 'react-icons/fa';
import {FaChevronLeft} from 'react-icons/fa';

const nextIcon = () =>{
  return <FaChevronRight size={36} color={colors.blue} />
}
const prevIcon = () =>{
  return <FaChevronLeft size={36} color={colors.blue} />
}

function CarouselHeader() {
  return (
    <Carousel 
    nextIcon={nextIcon()}
    prevIcon={prevIcon()}
    slide={false} className="carousel-component">
      <Carousel.Item>
        <div
          style={{
            background: "rgb(21,112,173)",
            background:
              "linear-gradient(106.04deg, #003366 5.02%, #4A84C3 109.29%)",

            backgroundColor: colors.blue,
            width: "100%",
            height: "80vh",
          }}
          className="glass-morphic-effect"
        >
          <div className="banner-content">
            <div className="text-content">
              <p className="heading-content">Innovative solution</p>
              <p className="subHeading-content">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <img
              src={innovation}
              alt="bannerImage"
              className="costEffective-style"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-main-container glass-morphic-effect">
          <div className="banner-content">
            <div className="text-content">
              <p className="heading-content">Cost Effective Treatment</p>
              <p className="subHeading-content">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <img
              src={costEffective}
              alt="bannerImage"
              className="costEffective-style cost-effective-image"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
            width: "100%",
            height: "80vh",
          }}
          className="glass-morphic-effect"
        >
          <div className="banner-content">
            <div className="text-content">
              <p className="heading-content">Precise Data Tracking</p>
              <p className="subHeading-content">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <img
              src={dataTracking}
              alt="bannerImage"
              className="costEffective-style"
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
