import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { UdemyDetails } from '../../utils/UdemyData';
import UdemyCard from '../ui/UdemyCard';

export default function UdemyCourses() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ],
  };

  return (
    <div className="max-w-[100rem] mx-auto flex flex-col items-center px-4 md:px-8">
  <div className="text-center">
    <h1 className="text-5xl md:text-8xl text-primary-400 font-semibold py-4">Udemy</h1>
    <h3 className="text-xl md:text-3xl text-primary-700 font-semibold py-5">
      Not only in India, we are global leaders in tech education
    </h3>
  </div>

  <div className="w-full py-10">
    <Slider {...settings}>
      {UdemyDetails.map((course) => (
        <div key={course.id} className="px-2">
          <UdemyCard
            link={course.image}
            name={course.CourseName}
            details={course.details}
            Rating={course.Rating}
            learners={course.learners}
            buy="https://www.udemy.com/course/web-dev-master/?couponCode=ST13MT80425G3"
          />
        </div>
      ))}
    </Slider>
  </div>
</div>


  );
}

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -top-12 right-[3rem] -translate-x-7 bg-white text-gray-800 border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 z-10 hover:cursor-pointer"
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
