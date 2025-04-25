import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CoursesDetails } from '../../utils/CoursesDetails';
import LiveCoursesCard from '../ui/LiveCoursesCard';

export default function LiveCourses() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
  
    ],
  };

  return (
    <div>
      <div className="justify-items-center container mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-primary-400 font-semibold ">
          Cohorts
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-primary-700 font-semibold py-2">
          Live training classes
        </h3>
      </div>

      <div className="w-full flex justify-center relative overflow-x-hidden">

        <div className="absolute right-[14rem] top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary-800 rounded-full z-0 blur-3xl opacity-20"></div>
        <div className="absolute left-[34rem] top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary-700 rounded-full z-0 blur-3xl opacity-40"></div>

        <div className="w-full max-w-6xl py-12 z-10">
          <Slider {...settings}>
            {CoursesDetails.map((data, index) => (
              <div key={index} className="px-2 sm:px-4">
                <LiveCoursesCard
                  name={data.name}
                  link={data.link}
                  discount={data.discount}
                  originalPrice={data.originalPrice}
                  discountedPrice={data.discountedPrice}
                  buy={data.buy}
                  details={data.details}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -top-12 right-[5rem] -translate-x-7 bg-white text-gray-800 border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 z-10 hover:cursor-pointer"
  >
    <FaChevronLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -top-12 right-[3rem] translate-x-7 bg-white text-gray-800 border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 z-10 hover:cursor-pointer"
  >
    <FaChevronRight size={16} />
  </button>
);
